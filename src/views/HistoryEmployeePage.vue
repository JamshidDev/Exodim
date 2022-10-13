<template >
  <div class="grid card surface-0 shadow-1 py-2 px-2">
    <div class="col-12">
      <div class="grid">
        <div class="col-6">
          <h6 class="text-base font-medium uppercase">Arxiv bo'limi</h6>
        </div>
       
      </div>
    </div>
    <div
      class="
        col-12
        md:col-10 md:col-offset-1
        lg:col-10 lg:col-offset-1
        xl:col-6 xl:col-offset-3
        pt-4
        mb-4
      "
    >
      <div class="grid">
        <div class="col-12">
          <div class="flex">
            <span class="p-input-icon-left p-fluid w-full">
              <i class="pi pi-search" />
              <InputText
                type="text"
                v-model="searchValue"
                placeholder="JSHR orqali izlash"
                class=" font-medium w-full"
                @keyup.enter="searchFromArchive"
              />
            </span>
            <Button
              icon="pi pi-search"
              label="Izlash"
              class="p-button-info"
              @click="searchFromArchive"
            ></Button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12" v-if="!archiveCadry">
      <history-empty class="mt-8 pt-8"></history-empty>
    </div>
    <div class="col-12 mb-8" v-show="archiveCadry">
      <div class="grid flex justify-content-center">
        <div class="col-12 xl:col-5 lg:col-10 md:col-10 sm:col-12 pb-0">
          <div class="grid w-full">
            <div class="col-12">
              <Message :closable="false" severity="warn" class="my-0">{{archiveCadry?.comment}}</Message>
            </div>
            <div class="col-12 xl:col-5 lg:col-6 md:col-12 sm:col-12 flex xl:justify-content-start lg:justify-content-start justify-content-center" >
              <Image
                :src="archiveCadry? archiveCadry.photo : ''"
                width="200"
                preview
              />
            </div>
            <div class="col-12 xl:col-7 lg:col-6 md:col-12 sm:col-12">
              <h5 class="text-center uppercase font-medium xl:mb-4">{{archiveCadry?.fullname}}</h5>
              <h5 class="text-yellow-600"> <i class="pi pi-map-marker text-yellow-600 text-lg px-2"></i>
                Xorazm viloyati, Shovot tumani, Beglar ko'chasi 51-uy
              </h5>
              <h5 class="text-600"> <i class="pi pi-map-marker text-yellow-600 px-2"></i>
                {{archiveCadry?.staff_full}}
              </h5>
             


            </div>
            <div class="col-12">
              <Button
              icon="pi pi-check-circle"
              label="Arxivdan chiqarish"
              class="p-button-info w-full mt-4 p-button-sm"
              @click="get_ArchiveCadry(archiveCadry.id)"
            ></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <Dialog
        v-model:visible="dialog"
        :breakpoints="{
          
          '640px': '90vw',
        }"
        :style="{ width: '50vw' }"
        :modal="true"
      >
        <template #header>
          <h6 class="uppercase text-lg text-blue-500  font-medium">
            Arxivdan chiqarish
          </h6>
        </template>
        <div class="grid">
          <div class="col-12 xl:col-6">
            <h6 class="mb-2 pl-2 text-500">Bo'limni tanlang  ({{departments.length}})</h6>
            <Dropdown
              v-model="department"
              :options="departments"
              optionLabel="name"
              :filter="true"
              placeholder="Tanlang"
              class="w-full  p-input-sm"
              :class="{ 'p-invalid': department_error && submitted }"
              @change="changeDepartment"
            >
              <template #value="slotProps">
                <div class="font-semibold" v-if="slotProps.value">
                  <div>{{ slotProps.value.name }}</div>
                </div>
                <span v-else class="font-semibold">
                  {{ slotProps.placeholder }}
                </span>
              </template>
              <template #option="slotProps">
                <div class="country-item">
                  <div>{{ slotProps.option.name }}</div>
                </div>
              </template>
            </Dropdown>
          </div>
          <div class="col-12 xl:col-6">
            <h6 class="mb-2 pl-2 text-500">Lavozimni tanlang  ({{stuffList.length}})</h6>
            <Dropdown
              v-model="stuff"
              :options="stuffList"
              optionLabel="staff_fullname"
              :filter="true"
              placeholder="Tanlang"
              class="w-full p-input-sm"
              :class="{ 'p-invalid': stuff_error && submitted }"
            >
              <template #value="slotProps">
                <div class="font-semibold" v-if="slotProps.value">
                  <div>{{ slotProps.value.staff_fullname }}</div>
                </div>
                <span v-else class="font-semibold">
                  {{ slotProps.placeholder }}
                </span>
              </template>
              <template #option="slotProps">
                <div class="country-item">
                  <div>{{ slotProps.option.staff_fullname }}</div>
                </div>
              </template>
            </Dropdown>
          </div>
         
          <div class="col-12 xl:col-4 lg:col-4">
            <h6 class="mb-2 pl-2 text-500">Faoliyat turi</h6>
          <Dropdown
                v-model="status"
                :options="staff_status"
                optionLabel="name"
                placeholder="Tanlang"
                class="w-full font-semibold"
                :class="{ 'p-invalid': status_error && submitted }"
              />
        </div>
        <div class="col-12 xl:col-4 lg:col-4">
          <h6 class="mb-2 pl-2 text-500">Lavozim sanasi</h6>
          <Calendar
                class="w-full font-semibold"
                :manualInput="true"
                v-model="stuff_date"
                v-maska="'##/##/####'"
                dateFormat="dd/mm/yy"
                :showButtonBar="true"
                placeholder="Sanani tanlang"
                :class="{ 'p-invalid': stuff_Date && submitted }"
              />
        </div>
        <div class="col-12 xl:col-4 lg:col-4">
            <h6 class="mb-2 pl-2 text-500">Plan</h6>
            <InputText
                type="text"
                class="w-full font-semibold"
                placeholder="Kiriting"
                id="adressStreet"
                v-model="stuff_plan"
                :class="{ 'p-invalid': stuff_Plan && submitted }"
              />
          </div>
        <div class="col-12">
          <Button
              icon="pi pi-check-circle"
              label="Ishga qabul qilish"
              class="p-button-success w-full mt-4 p-button-sm"
              @click="pushCadry()"
            ></Button>
        </div>
          
        </div>
       
        <template #footer> </template>
      </Dialog>
    </div>
  </div>
</template>
<script>
import HistoryEmpty from "../components/EmptyComponent/HistoryEmpty.vue";
import Archive from "../service/servises/Archive"
import DepartmentStuffService from '@/service/servises/DepartmentStuffService'
import formatter from "../util/formatter"
export default {
  components: {
    HistoryEmpty,
  },
  data(){
    return{
      formatter,
      searchValue:"12",
      archiveCadry:null,
      loader:false,
      dialog:false,
      departments:[],
      department:null,
      stuff_plan:0,
      stuff_date:"",
      stuffList:[],
      stuff:null,
      staff_status:[],
      status:null,
      submitted:false,
    }
  },
  computed:{
    stuff_Date() {
      if (!this.stuff_date) {
        return true;
      } else {
        return false;
      }
    },
    department_error() {
      if (!this.department) {
        return true;
      } else {
        return false;
      }
    },
    stuff_error() {
      if (!this.stuff) {
        return true;
      } else {
        return false;
      }
    },
    status_error() {
      if (!this.status) {
        return true;
      } else {
        return false;
      }
    },
    stuff_Plan() {
      if (!this.stuff_plan) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods:{
    searchFromArchive(){
      Archive.findCadryByJSHR({pinfl: this.searchValue}).then((res)=>{
        this.archiveCadry = res.data.cadries?.data[0]
      })
    },
    get_ArchiveCadry(id){
      this.reset_Dialog()
      Archive.acceptCadry({id}).then((res)=>{
        this.departments = res.data.departments;
        this.staff_status = res.data.staff_statuts
        this.dialog = true
      })
      
    },
    changeDepartment(){
      this.stuffList=[];
      this.stuff = null;
      this.get_departmentStuff(this.department.id)
    },
    get_departmentStuff(id){
      DepartmentStuffService.get_DepartmentStuff({id}).then((res)=>{
        console.log(res.data.department);
        this.stuffList = res.data.department
      })
    },
    pushCadry(){
      this.submitted = true;
      if(!this.stuff_Date && !this.department_error && !this.stuff_error && !this.status_error && !this.stuff_Plan ){
        let data ={
        department_id:this.department.id,
        department_staff_id:this.stuff.id,
        rate:this.stuff_plan,
        staff_status:this.status.id,
        staff_date:formatter.outDateFormatter(this.stuff_date) ,
      }
      console.table(data);
      this.dialog = false
      this.archiveCadry = null;
      }
    },
    reset_Dialog(){
      this.submitted=false;
      this.department =null;
      this.status = null;
      this.stuff = null;
      this.stuff_plan =0;
      this.stuff_date=""
    }
  }
};
</script>
<style lang="">
</style>