<template >
  <div class="grid card surface-0 shadow-1 py-2 px-2">
    <h6 class="text-base p-2 uppercase">Shtat lavozimlari jadvali</h6>
    <div class="col-12">
      <DataTable
        ref="dt"
        :value="positionList"
        dataKey="id"
        responsiveLayout="scroll"
        showGridlines
        class="p-datatable-sm"
        stripedRows
      >
        <template #header>
          <div class="grid">
            <div class="col-6">
              <InputText
                type="text"
                v-model="searchPositionName"
                placeholder="Nomi orqali qidiruv"
                class="p-inputtext-sm"
                @keyup.enter="searchByName()"
              />
            </div>
            <div class="col-6 flex justify-content-end">
              <Button
                icon="pi pi-plus"
                label="Qo'shish"
                class="p-button-info p-button-sm"
                @click="addItem()"
              ></Button>
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
            <div class="text-800 font-semibold">Shtat lavozim nomi</div>
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
              {{ slotProps.data.name }}
            </div>
          </template>
        </Column>

        <Column class="py-0" style="min-width: 200px; width: 300px">
          <template #header>
            <div class="text-800 font-semibold">Biriktirilgan bo'limlar</div>
          </template>
          <template #body="slotProps">
            <Dropdown
              class="w-full p-inputtext-sm py-0"
              v-model="selectParty[`${slotProps.data.id}`]"
              :options="paryList"
              optionLabel="name"
            />
          </template>
        </Column>
        <Column style="min-width: 100px; width: 100px">
          <template #header>
            <div class="text-800 font-semibold">Kategoriya</div>
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
                text-center text-blue-600
              "
            >
              {{ slotProps.data.category_id }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 100px; width: 150px">
          <template #header>
            <div class="text-800 font-semibold">Xodimlar soni</div>
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
              {{ slotProps.data.cadries_count }}
            </div>
          </template>
        </Column>

        <Column :exportable="false" style="min-width: 150px; width: 150px">
          <template #header>
            <div class="text-800 font-semibold">Amallar</div>
          </template>
          <template #body="slotProps">
            <div class="flex gap-2">
              <view-button :icon="'pi-users'"></view-button>
              <edit-button :editItem="slotProps.data"  @editEvent="editItem($event)"></edit-button>
              <delete-button :deleteItem="slotProps.data.id"></delete-button>
            </div>
          </template>
        </Column>
        <template #footer>
          <table-pagination
            v-show="totalPosition > 10"
            :total_page="totalPosition"
            @pagination="changePagination($event)"
          ></table-pagination>
        </template>
      </DataTable>
    </div>
    <div class="col-12">
      <Dialog
        v-model:visible="dialogPos"
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
            {{
              posDialogType ? "Ma'lumot qo'shish" : "Ma'lumotni tahrirlash"
            }}
          </h6>
        </template>
        <div class="grid pt-2">
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Shtat lavozim nomi</h6>
            <InputText
              type="text"
              class="w-full font-semibold"
              placeholder="Kiriting"
              v-model="positionDialog.name"
            />
          </div>
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Kategoriyasi</h6>
            <Dropdown
                v-model="positionDialog.category"
                :options="positionCategoryList"
                optionLabel="name"
                optionValue="id"
                placeholder="Tanlang"
                class="w-full font-semibold"
              />
          </div>
        </div>

        <template #footer>
          <div class="col-12 pt-2">
            <div class="flex justify-content-end">
              <Button
                label="Saqlash"
                class="p-button-secondary p-button-sm"
                @click="addAndEdit()"
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
import ViewButton from "../components/buttons/ViewButton.vue";
import positionService from "@/service/servises/positionService";
export default {
  components: {
    DeleteButton,
    EditButton,
    ViewButton,
    TablePagination,
  },
  data() {
    return {
      searchPositionName: null,
      positionList: [],
      positionCategoryList:[],
      totalPosition: 0,
      selectParty: {},
      paryList: [
        {
          name: "Bo'lim 1",
        },
        {
          name: "Bo'lim 2",
        },
        {
          name: "Bo'lim 3",
        },
        {
          name: "Bo'lim 4",
        },
        {
          name: "Bo'lim 5",
        },
      ],
      position: {
        per_page: 10,
        page: 1,
        name: null,
      },
      dialogPos:false,
      posDialogType:true,
      positionDialog:{
        name:null,
        category:null,
      }
    };
  },
  methods: {
    get_positions(params) {
      positionService
        .get_Positions(params)
        .then((res) => {
          console.log(res.data);

          this.totalPosition = res.data.staffs.pagination.total;
          let cadrList = [];
          let number = (this.position.page - 1) * this.position.per_page;
          res.data.staffs.data.forEach((item) => {
            number++;
            item.number = number;
            cadrList.push(item);
          });
          this.positionList = res.data.staffs.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    get_positionCategory(){
      positionService.get_postionCategory().then((res)=>{
        console.log(res.data);
        this.positionCategoryList = res.data.categories
      }).catch((error)=>{
        console.log(error);
      })
    },

    addItem(){
      this.posDialogType = true
      this.positionDialog.name = null,
      this.positionDialog.category = null,
      this.controlPosDialog(true)
    },

    editItem(event){
      console.log(event);
      this.posDialogType = false
      this.positionDialog.name = event.name
      this.positionDialog.category = event.category_id,
      this.controlPosDialog(true)
    },

    addAndEdit(){
      this.controlPosDialog(false)
      let data = {
        name: this.position.name,
        category_id:this.position.category,
      }
      if(this.posDialogType){
        console.log(date);
      }
    },




    changePagination(event) {
      console.log(event);
      this.position.page = event.page;
      this.position.per_page = event.per_page;
      this.get_positions(this.position);
    },

    searchByName() {
      this.position.name = this.searchPositionName;
      this.position.page = 1;
      this.get_positions(this.position);
    },
    controlPosDialog(item){
      this.dialogPos = item;
    }
  },
  created() {
    this.get_positionCategory()
    this.get_positions(this.position);
  },
};
</script>
<style lang="scss">
</style>