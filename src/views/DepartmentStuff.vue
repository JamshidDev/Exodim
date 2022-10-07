<template>

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
        :value="DepStuffList"
        dataKey="id"
        responsiveLayout="scroll"
        showGridlines
        class="p-datatable-sm"
        stripedRows
      >
        <template #header>
          <div class="grid">
            <div class="col-6">
              <h6 class="font-medium uppercase text-lg pt-1 pl-2">
                <span class="text-blue-600">{{ department_name }}</span>
                bo'limiga biriktirilgan shtat lavozimlari ro'yhati
              </h6>
            </div>
            <div class="col-6 flex justify-content-end align-items-center">
              <InputText
                type="text"
                v-model="searchPartName"
                placeholder="Nomi orqali qidiruv"
                class="p-inputtext-sm"
                @keyup.enter="searchByName()"
              />
            </div>
          </div>
        </template>
        <Column header="" style="min-width: 30px; width: 40px">
          <template #body="slotProps">
            <div class="w-full text-center text-lg font-semibold">
              {{ slotProps.data.number }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 16rem">
          <template #header>
            <div class="text-800 font-semibold">To'liq shtat lavozim nomi</div>
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
              "
            >
              {{ slotProps.data.staff_fullname }}
            </div>
          </template>
        </Column>

        <Column class="py-0" style="min-width: 50px; width: 100px">
          <template #header>
            <div class="text-800 font-semibold">Plan</div>
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
                text-center text-blue-500
              "
            >
              {{ slotProps.data.rate }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 50px; width: 100px">
          <template #header>
            <div class="text-800 font-semibold">Fakt</div>
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
                text-center
              "
            >
              <div v-show="slotProps.data.rate > slotProps.data.rate_sum">
                <Chip
                  :label="
                    (slotProps.data.rate - slotProps.data.rate_sum).toString()
                  "
                  class="mr-2 mb-2 custom-chip"
                />
              </div>
              <div v-show="slotProps.data.rate < slotProps.data.rate_sum">
                <Chip
                  :label="
                    (slotProps.data.rate_sum - slotProps.data.rate).toString()
                  "
                  class="mr-2 mb-2 custom-chip-red"
                />
              </div>
              <div v-show="slotProps.data.rate == slotProps.data.rate_sum">
                {{ slotProps.data.rate_sum }}
              </div>
            </div>
          </template>
        </Column>

        <Column :exportable="false" style="min-width: 120px; width: 120px">
          <template #header>
            <div class="text-800 font-semibold">Amallar</div>
          </template>
          <template #body="slotProps">
            <div class="flex gap-2">
              <view-button-v
                v-tooltip.bottom="`Xodimlarni ko'rish`"
                :icon="'pi-users'"
                @click="goCadry(slotProps.data.id, slotProps.data.staff_fullname )"
              ></view-button-v>
              <edit-button
                :editItem="slotProps.data"
                @editEvent="editStuff($event)"
              ></edit-button>
              <delete-button
                :deleteItem="slotProps.data.id"
                @deleteAcceptEvent="deleteItemDepStuff($event)"
              ></delete-button>
            </div>
          </template>
        </Column>
        <!-- <template #footer>
          <table-pagination
            v-show="totalDepartment > 10"
            :total_page="totalDepartment"
            @pagination="changePagination($event)"
          ></table-pagination> </template
      > -->
    </DataTable>
    </div>

    <div class="col-12" v-show="loader">
      <department-stuff-loader></department-stuff-loader>
    </div>
    <div class="col-12">
      <Dialog
        v-model:visible="stuffDialog"
        :breakpoints="{
          '1960px': '30vw',
          '1600px': '40vw',
          '1200px': '70vw',
          '960px': '80vw',
          '640px': '90vw',
        }"
        :style="{ width: '50vw' }"
        :modal="true"
      >
        <template #header>
          <h6 class="uppercase text-lg text-blue-500 font-medium">
            Bo'limga shtat lavozim biriktirish
          </h6>
        </template>
        <div class="grid pt-2">
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Shtat lavozimni tanlang</h6>
            <Dropdown
            v-model="stuff"
            :options="StuffList"
            optionLabel="name"
            :filter="true"
            placeholder="Tanlang"
            class="w-full"
            :class="{ 'p-invalid': errorStuff && stuffsubmited }"
          >
            <template #value="slotProps">
              <div
                class="font-semibold"
                v-if="slotProps.value"
              >
                <div class="font-semibold">{{ slotProps.value.name }}</div>
              </div>
              <span class="font-semibold" v-else>
                {{ slotProps.placeholder }}
              </span>
            </template>
            <template #option="slotProps">
              <div class="font-semibold">
                <div>{{ slotProps.option.name }}</div>
              </div>
            </template>
          </Dropdown>
          </div>
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">To'liq shtat lavozim nomi</h6>
            <Textarea
              class="w-full font-semibold"
              placeholder="Kiriting"
              v-model.trim="full_stuff"
              :autoResize="true"
              rows="1"
              :class="{ 'p-invalid': errorFullStuff && stuffsubmited }"
            />
          </div>
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Plan</h6>
            <InputText
                type="text"
                class="w-full font-semibold"
                placeholder="Kiriting"
                id="adressStreet"
                v-model="stuf_plan"
                :class="{ 'p-invalid': errorPlan && stuffsubmited }"
              />
          </div>
        </div>

        <template #footer>
          <div class="col-12 pt-2">
            <div class="flex justify-content-end">
              <Button
                label="Saqlash"
                class="p-button-secondary p-button-sm"
                @click="addStuffItem()"
              />
            </div>
          </div>
        </template>
      </Dialog>
    </div>
  </div>
</template>
<script>
import TablePagination from "../components/Pagination/TablePagination.vue";
import DeleteButton from "../components/buttons/DeleteButton.vue";
import EditButton from "../components/buttons/EditButton.vue";
import ViewButtonV from "../components/buttons/ViewButtonV.vue";
import DepartmentStuffService from "../service/servises/DepartmentStuffService";
import DepartmentStuffLoader from "../components/loaders/DepartmentStuffLoader.vue";
import DepartmentService from "../service/servises/DepartmentService";
export default {
  components: {
    DeleteButton,
    EditButton,
    ViewButtonV,
    TablePagination,
    DepartmentStuffLoader,
  },
  data() {
    return {
      loader: false,
      DepStuffList: [],
      department_name: "",
      params: {
        page: 1,
        per_page: 10,
      },

      stuffDialog:false,
      stuff:"",
      full_stuff:"",
      stuf_plan:null,
      StuffList:[],
      stuffsubmited:false,
      stuff_params:{
        search:null,
        page:1,
        per_page:1000
      }


    };
  },
  computed: {
    errorStuff() {
      if (!this.stuff) {
        return true;
      } else {
        return false;
      }
    },
    errorFullStuff() {
      if (this.full_stuff?.length == 0 || !this.full_stuff ) {
        return true;
      } else {
        return false;
      }
    },
    errorPlan() {
      if (this.stuf_plan.length==0 || this.stuf_plan.length>4 ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    get_DepartmentStuff(id, loader) {
      this.controlLoader(loader);
      DepartmentStuffService.get_DepartmentStuff({ id })
        .then((res) => {
          console.log(res);
          let cadrList = [];
          let number = (this.params.page - 1) * this.params.per_page;
          res.data.department.forEach((item) => {
            number++;
            item.number = number;
            cadrList.push(item);
          });
          this.DepStuffList = res.data.department;
          this.controlLoader(false);
        })
        .catch((error) => {
          console.log(error);
        });
    },


    

    editStuff(event){
      console.log(event);
      this.stuffsubmited = false
      this.stuff=event.staff_id
      this.stuf_plan=event.rate,
      this.full_stuff=event.staff_fullname
      this.controlstuffDialog(true)

    },
    addStuffItem(){
      console.log(this.stuf_plan.toString().length ==0);
      this.stuffsubmited = true
      if(this.stuff && this.full_stuff.length>0 && !this.stuf_plan.toString().length==0 && this.stuf_plan.toString().length<=4  ){
        this.controlstuffDialog(false)
      }

    },
    deleteItemDepStuff(id) {
      DepartmentStuffService.delete_DepartmentStuff({id}).then((res)=>{
        this.get_DepartmentStuff(this.$route.params.id, false);
      }).catch((error)=>{
        console.log(error);
      })
    },
    get_StuffList(){
      DepartmentService.get_StuffList(this.stuff_params).then((res)=>{
        console.log(res.data.data);
        this.StuffList = res.data.data
      }).catch((error)=>{
        console.log(error);
      })
    },

    goPush(){
      this.$router.push("/admin/partfactory");
    },

    goCadry(id, name){
      this.$router.push({name:"departmentstuffcadry", params:{
        id, name,
        depId:this.$route.params.id,
        depName:this.$route.params.name,
      }});
    },

    controlLoader(item) {
      this.loader = item;
    },
    controlstuffDialog(item){
      this.stuffDialog = item
    },
  },
  created() {
    this.department_name = this.$route.params.name;
    this.get_DepartmentStuff(this.$route.params.id, true);
    this.get_StuffList()
  },
};
</script>
<style lang="scss" scoped>
.p-chip.custom-chip {
  background: var(--green-500);
  color: var(--primary-color-text);
}
.p-chip.custom-chip-red {
  background: var(--red-500);
  color: var(--primary-color-text);
}
</style>