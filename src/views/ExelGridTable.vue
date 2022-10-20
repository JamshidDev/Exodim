<template >
  <div class="grid surface-0 py-2 px-2">
    <div class="col-12">
      <h6>Eksport bo'limi</h6>
    </div>
    <div class="col-12">
      <div class="grid">
        <div class="col-12 xl:col-3 p-fluid">
          <Dropdown
            id="adressDistrict"
            v-model="department"
            :options="departmentList"
            optionLabel="name"
            class="xl:p-inputtext-sm"
            :filter="true"
            placeholder="Bo'limni tanlang"
            emptyMessage="Izlash uchun yozing"
            emptyFilterMessage="Tizmda ma'lumot topilmadi..."
          >
            <template #value="slotProps" class="custop_dropdown">
              <div class="max-w-100" v-if="slotProps.value">
                <div>{{ slotProps.value.name }}</div>
              </div>
              <span v-else>
                {{ slotProps.placeholder }}
              </span>
            </template>
            <template #option="slotProps">
              <div class="max-w-100">
                <div>{{ slotProps.option.name }}</div>
              </div>
            </template>
          </Dropdown>
        </div>
        <div class="col-12 xl:col-3 p-fluid">
          <Dropdown
            id="adressDistrict"
            v-model="department"
            :options="departmentList"
            optionLabel="name"
            class="xl:p-inputtext-sm"
            :filter="true"
            placeholder="Viloyatni tanlang"
            emptyMessage="Izlash uchun yozing"
            emptyFilterMessage="Tizmda ma'lumot topilmadi..."
          >
            <template #value="slotProps" class="custop_dropdown">
              <div class="max-w-100" v-if="slotProps.value">
                <div>{{ slotProps.value.name }}</div>
              </div>
              <span v-else>
                {{ slotProps.placeholder }}
              </span>
            </template>
            <template #option="slotProps">
              <div class="max-w-100">
                <div>{{ slotProps.option.name }}</div>
              </div>
            </template>
          </Dropdown>
        </div>
        <div class="col-12 xl:col-3 p-fluid">
          <Dropdown
            id="adressDistrict"
            v-model="department"
            :options="departmentList"
            optionLabel="name"
            class="xl:p-inputtext-sm"
            :filter="true"
            placeholder="Ma'lumotini tanlang"
            emptyMessage="Izlash uchun yozing"
            emptyFilterMessage="Tizmda ma'lumot topilmadi..."
          >
            <template #value="slotProps" class="custop_dropdown">
              <div class="max-w-100" v-if="slotProps.value">
                <div>{{ slotProps.value.name }}</div>
              </div>
              <span v-else>
                {{ slotProps.placeholder }}
              </span>
            </template>
            <template #option="slotProps">
              <div class="max-w-100">
                <div>{{ slotProps.option.name }}</div>
              </div>
            </template>
          </Dropdown>
        </div>
        <div class="col-12 xl:col-3 p-fluid">
          <Dropdown
            id="adressDistrict"
            v-model="department"
            :options="departmentList"
            optionLabel="name"
            class="xl:p-inputtext-sm"
            :filter="true"
            placeholder="Jinsni tanlang"
            emptyMessage="Izlash uchun yozing"
            emptyFilterMessage="Tizmda ma'lumot topilmadi..."
          >
            <template #value="slotProps" class="custop_dropdown">
              <div class="max-w-100" v-if="slotProps.value">
                <div>{{ slotProps.value.name }}</div>
              </div>
              <span v-else>
                {{ slotProps.placeholder }}
              </span>
            </template>
            <template #option="slotProps">
              <div class="max-w-100">
                <div>{{ slotProps.option.name }}</div>
              </div>
            </template>
          </Dropdown>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="grid">
        <div class="col-12 p-fluid">
          <h5 class="uppercase text-base">Eksport sozlamalari</h5>
          <TreeSelect
            v-model="selectedNodes2"
            :options="option"
            display="chip"
            selectionMode="checkbox"
            placeholder="Sozlamalarni o'rnatish"
          ></TreeSelect>
        </div>
      </div>
    </div>
    <div class="col-12"></div>
    <div class="col-12  mt-8" v-show="false">
      <download-excel
        :data="jsonData"
        :fields="json_fields"
        :before-generate = "startDownload"
      :before-finish= "finishDownload"
        name="exodim.xls"
        ref="excel_table"
      >

      </download-excel>
    </div>
    <div class="col-12 flex justify-content-center">
      <Button
        type="button"
        class="p-button p-button-rounded "
        @click="onexport()"
        :class="[loadingData? 'p-button-secondary': 'p-button-success']"
      >
        <span class="ml-2 uppercase font-medium">Eksport</span>
      </Button>
    </div>
  </div>
</template>

<script>
import EksportService from '@/service/servises/EksportService'
export default {
  data() {
    return {
      loadingData:true,
      selectedNodes2: null,
      departmentList: [],
      department: null,
      option: [
        {
          key: "0",
          label: "Shaxsiy ma'lumot",
          icon: "pi pi pi-user",
          data: "folder",
          children: [
            {
              key: "0-0",
              label: "Lavozim",
              icon: "pi pi-user",
              data: "folder",
            },
            {
              key: "0-1",
              label: "F.I.SH",
              icon: "pi pi-user",
              data: "folder",
            },
            {
              key: "0-2",
              label: "Telefon raqam",
              icon: "pi pi-phone",
              data: "folder",
            },
            {
              key: "0-3",
              label: "Tug'ilgan yili",
              icon: "pi pi-user",
              data: "folder",
            },
            {
              key: "0-4",
              label: "Tug'ilgan viloyati",
              icon: "pi pi-user",
              data: "folder",
            },
          ],
        },
        {
          key: "1",
          label: "Boshqalar",
          icon: "pi pi-fw pi-inbox",
          data: "folder",
          children: [
            {
              key: "1-0",
              label: "Stavka",
              icon: "pi pi-user",
              data: "folder",
            },
          ],
        },
      ],
      jsonData:[],
      json_data: [
        {
          name: "Tony Peña",
          city: "New York",
          country: "United States",
          birthdate: "1978-03-15",
          phone: {
            mobile: "1-541-754-3010",
            landline: "(541) 754-3010",
          },
        },
        {
          name: "Thessaloniki",
          city: "Athens",
          country: "Greece",
          birthdate: "1987-11-23",
          phone: {
            mobile: "+1 855 275 5071",
            landline: "(2741) 2621-244",
          },
        },
      ],
      json_fields: {
        "F.I.SH": "fullName",
        "Jinsi": "sex",
        "Lavozim": "position",
        "Bo'lim": "department",
        "Ma'lumoti":"education",
        "Ma'lumoti":"education",
        "Parport seriyas":"passport",
        "Pasport JSHR":"pinfl",
        "Millati":"nationality",
        "Yashash manzili":"now_position",

        



      },
    };
  },
  watch: {
    selectedNodes2(value) {
      console.table(value);
    },
  },
  methods: {
    get_exportdetails(params, loader){
      this.loadingData = true;
      EksportService.get_exportAnyDetails().then((res)=>{
        console.log(res.data);
        res.data.forEach((item)=>{
          let option ={
            fullName:item.fullname,
            sex:item.sex,
            position:item.department_and_staffs[0].staff_full,
            department:item.department,
            education:item.education,
            passport:item.passport,
            pinfl:item.pinfl.toString() ,
            nationality:item.nationality,
            now_position:item.now_position,
          }
          this.jsonData.push(option)
         
        })
        this.loadingData = false;
      
      })
    },
    onexport() {
      if(!this.loadingData){
        console.log(this.$refs.excel_table.generate());
      }
      
    },
    startDownload(event){
      console.log(event);
    },
    finishDownload(event){
      console.log(event);
    }
  },
  created(){
   this.get_exportdetails()
  }
};
</script>
<style lang="">
</style>