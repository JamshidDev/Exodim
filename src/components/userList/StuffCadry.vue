<template >
  <div class="grid card surface-0 shadow-1 py-2 px-2">
    <div class="col-12 flex justify-content-start py-0 mb-4">
      <Button
        icon="pi pi-arrow-circle-left"
        @click="goPush()"
        class="p-button-secondary p-button-rounded p-button-sm"
        v-tooltip.right="`Orqaga`"
      />
    </div>

    <div class="col-12" v-show="!loader">
        <DataTable
        ref="dt"
        :value="stuffCadryList"
        dataKey="id"
        responsiveLayout="scroll"
        showGridlines
        class="p-datatable-sm"
        stripedRows
        v-show="totalPage"
      >
        <template #header>
          <div class="grid">
            <div class="col-12 xl:col-6 lg:col-6 md:col-6">
              <h6 class="font-medium text-lg">
                <span class="text-blue-600">{{ stuff_name }}</span>
                lavozimidagi xodimlar ro'yhati
              </h6>
            </div>
            <div
              class="
                col-12
                xl:col-6
                lg:col-6
                md:col-6
                flex
                justify-content-end
                align-items-center
              "
            >
              <InputText
                type="text"
                v-model="searchPositionName"
                placeholder="Ism orqali qidiruv"
                class="p-inputtext-sm"
                @keyup.enter="searchByName()"
              />
            </div>
          </div>
        </template>
        <Column header="" style="min-width: 30px; width: 40px">
          <template #body="slotProps">
            <div class="w-full text-center font-medium">
              {{ slotProps.data.number }}
            </div>
          </template>
        </Column>
        <Column  style="min-width: 60px; width: 60px">
            <template #header>
            <div class="text-800 font-semibold">Rasm</div>
          </template>
          <template #body="slotProps">
            <div class="flex justify-content-center">
              <Image
                :src="slotProps.data.cadry.photo"
                :alt="slotProps.data.cadry.fullname"
                width="40"
                height="40"
                preview
              />
            </div>
          </template>
        </Column>
        <Column style="min-width: 16rem">
          <template #header>
            <div class="text-800 font-semibold">F.I.O</div>
          </template>
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-md
                lg:text-lg
                xl:text-lg
                font-medium
                text-left
              "
            >
              {{ slotProps.data.cadry.fullname }}
            </div>
          </template>
        </Column>
        <Column :exportable="false" style="min-width: 100px; width: 120px">
          <template #header>
            <div class="text-800 font-semibold">Faoliyat turi</div>
          </template>
          <template #body="slotProps">
            <div v-show="slotProps.data.staff_status=='Asosiy'" class="text-sm sm:text-sm md:text-md lg:text-lg text-center text-green-500 font-medium">
              {{ slotProps.data.staff_status }}
            </div>
            <div v-show="slotProps.data.staff_status!=='Asosiy'" class="text-sm sm:text-sm md:text-md lg:text-lg text-center text-yellow-500 font-medium">
              {{ slotProps.data.staff_status }}
            </div>
          </template>
        </Column>
        <Column :exportable="false" style="min-width: 30px; width: 50px">
          <template #header>
            <div class="text-800 font-semibold">Stavkasi</div>
          </template>
          <template #body="slotProps">
            <div class="text-sm sm:text-sm md:text-md lg:text-lg text-center font-medium">
              {{ slotProps.data.rate }}
            </div>
          </template>
        </Column>
        <Column :exportable="false" style="min-width: 180px; width: 200px">
          <template #header>
            <div class="text-800 font-semibold">Ta'til</div>
          </template>
          <template #body="slotProps">
            <div v-show="slotProps.data.status_vacation != 3" class=" min-w-full min-h-full bg-yellow-500">
              {{checkVacation(vacationList, slotProps.data.status_vacation)}}
            </div>
            <div v-show="slotProps.data.status_vacation == 3" class="">
              {{checkVacation(vacationList, slotProps.data.status_vacation)}}
            </div>
          </template>
        </Column>
        <Column :exportable="false" style="min-width: 60px; width: 60px">
          <template #header>
            <div class="text-800 font-semibold">Amallar</div>
          </template>
          <template #body="slotProps">
            <edit-button :editItem="slotProps.data.cadry.id"  @editEvent="editItem($event)"></edit-button>
          </template>
        </Column>
        <template #footer>
          <table-pagination
            v-show="totalPage > 10"
            :total_page="totalCadries"
            @pagination="changePagination($event)"
          ></table-pagination>
        </template>
      </DataTable>
      <div class="col-12" v-show="!totalPage">
        <div class="grid">
          <div class="col-12">
            <h6 class="font-medium text-lg">
              <span class="text-blue-600">{{ stuff_name }}</span>
              bo'limidagi xodimlar ro'yhati
            </h6>
          </div>
          <div class="col-12">
            <div class="text-center w-full text-400">Xodimlar topilmadi</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12" v-show="loader">
        <user-list-loader></user-list-loader>
      </div>
  </div>
</template>
<script>
import EditButton from "../buttons/EditButton.vue";
import DepartmentStuffService from "@/service/servises/DepartmentStuffService";
import TablePagination from "../Pagination/TablePagination.vue";
import UserListLoader from "../loaders/UserListLoader.vue";
export default {
  components:{
    TablePagination,
    UserListLoader,
    EditButton,
  },
  data() {
    return {
      stuffCadryList: [],
      vacationList:[],
      totalPage:0,


      stuff_name: "",
      loader: false,
      params: {
        page: 1,
        per_page: 10,
      },
    };
  },
  methods: {
    get_StuffCadry(id, params, loader) {
      this.controlLoader(loader)
      DepartmentStuffService.get_StuffCadry({ id, params })
        .then((res) => {
          console.log(res.data.department_cadries.data);
          this.totalPage = res.data.department_cadries.pagination.total
          let cadrList = [];
          let number = (this.params.page - 1) * this.params.per_page;
          res.data.department_cadries.data.forEach((item) => {
            number++;
            item.number = number;
            cadrList.push(item);
          });
          this.vacationList = res.data.status_vacation
          this.stuffCadryList = res.data.department_cadries.data;
          this.controlLoader(false)
        })
        .catch((error) => {
          console.log(error);
        });
    },
    goPush(){
      this.$router.push({name:"departmentstuff", params:{
        id:this.$route.params.depId,
        name:this.$route.params.depName
      }});
    },
    editItem(id){
      this.$router.push(`/admin/editemployee/${id}`)
    },
    checkVacation(array, id){
     return array.filter((item)=>item.id == id)[0].name
    },
    controlLoader(item){
      this.loader =item
    },
  },
  created() {
    this.stuff_name = this.$route.params.name;
    this.get_StuffCadry(this.$route.params.id, this.params, true);
  },
};
</script>
