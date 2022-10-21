<template >
  <div class="grid surface-0 py-2 px-2">
    <div class="col-12">
      <h6 class="text-base uppercase">Eksport bo'limi</h6>
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
        <div class="col-12 xl:col-3">
        
        </div>
      </div>
    </div>
    <div class="col-12">
      <h5 class="uppercase text-sm mb-1">Eksport sozlamalari</h5>
        <div class="grid">
          <div class="col-10 p-fluid max-w-full" >
          <TreeSelect
            v-model="selectedNodes2"
            :options="option"
            display="chip"
            selectionMode="checkbox"
            placeholder="Sozlamalarni o'rnatish"
            class="max-w-full"
            :change="changeSelect"
          ></TreeSelect>
        </div>
        </div>
    </div>
    <div class="col-12"></div>
    <div class="col-12 mt-8" v-show="false">
      <download-excel
        :data="jsonData"
        :fields="json_fields"
        name="exodim.xls"
        ref="excel_table"
      >
      </download-excel>
    </div>
    <div class="col-12 flex justify-content-center">
      <Button
        type="button"
        class="p-button p-button-rounded"
        @click="filterDetails()"
        :class="[loadingData ? 'p-button-secondary' : 'p-button-success']"
      >
        <span class="ml-2 uppercase font-medium">Eksport</span>
      </Button>
    </div>
  </div>
</template>

<script>
import EksportService from "@/service/servises/EksportService";
import formatter from "../util/formatter";
export default {
  data() {
    return {
      loadingData: true,
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
              label: "Millati",
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
            {
              key: "0-5",
              label: "Pasport seriya",
              icon: "pi pi-user",
              data: "folder",
            },
            {
              key: "0-6",
              label: "Pasport JSHR",
              icon: "pi pi-user",
              data: "folder",
            },
            {
              key: "0-7",
              label: "Pasport (Viloyat)",
              icon: "pi pi-user",
              data: "folder",
            },
            {
              key: "0-8",
              label: "Pasport (Tuman)",
              icon: "pi pi-user",
              data: "folder",
            },
            {
              key: "0-9",
              label: "Pasport (Sana)",
              icon: "pi pi-user",
              data: "folder",
            },
            {
              key: "0-10",
              label: "Yashash (Tuman)",
              icon: "pi pi-user",
              data: "folder",
            },
            {
              key: "0-11",
              label: "Yashash (Viloyat)",
              icon: "pi pi-user",
              data: "folder",
            },
            {
              key: "0-12",
              label: "Yashash manzili",
              icon: "pi pi-user",
              data: "folder",
            },
            {
              key: "0-13",
              label: "Ma'lumoti",
              icon: "pi pi-user",
              data: "folder",
            },
            {
              key: "0-14",
              label: "Jinsi",
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
              label: "Lavozim",
              icon: "pi pi-user",
              data: "folder",
            },
            {
              key: "1-1",
              label: "Stavka",
              icon: "pi pi-user",
              data: "folder",
            },
            {
              key: "1-2",
              label: "Xizmat darajasi",
              icon: "pi pi-user",
              data: "folder",
            },
            {
              key: "1-3",
              label: "Ma'lumoti",
              icon: "pi pi-user",
              data: "folder",
            },
            {
              key: "1-4",
              label: "Ilmiy unvoni",
              icon: "pi pi-user",
              data: "folder",
            },
            {
              key: "1-5",
              label: "Ilmiy darajasi",
              icon: "pi pi-user",
              data: "folder",
            },
            {
              key: "1-6",
              label: "Xarbiy unvoni",
              icon: "pi pi-user",
              data: "folder",
            },
            {
              key: "1-7",
              label: "Chet tillari",
              icon: "pi pi-user",
              data: "folder",
            },
            {
              key: "1-8",
              label: "Saylangan organlarga a'zoligi",
              icon: "pi pi-user",
              data: "folder",
            },
            {
              key: "1-9",
              label: "Partiyaviyligi",
              icon: "pi pi-user",
              data: "folder",
            },
          ],
        },
      ],
      jsonData: [],
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
      },
      exportShowItem: [
        {
          id: "0-0",
          name: "Lavozim",
          key: "position",
        },
        {
          id: "0-1",
          name: "F.I.SH",
          key: "fullName",
        },
        {
          id: "0-2",
          name: "Bo'lim nomi",
          key: "department",
        },
        {
          id: "0-9",
          name: "Pasport (Sana)",
          key: "passport_date",
        },
      ],
    };
  },
  methods: {
    get_exportdetails(params, loader) {
      this.loadingData = true;
      EksportService.get_exportAnyDetails().then((res) => {
        console.log(res.data);
        res.data.forEach((item) => {
          let option = {
            fullName: item.fullname,
            sex: item.sex,
            position: item.department_and_staffs[0].staff_full,
            department: item.department,
            education: item.education,
            passport: item.passport,
            pinfl: item.pinfl,
            nationality: item.nationality,
            now_position: item.now_position,
            passport_date: item.passport_date,
          };
          this.jsonData.push(option);
        });
        this.loadingData = false;
      });
    },
    onexport() {
      if (!this.loadingData) {
        console.log(this.$refs.excel_table.generate());
      }
    },
    changeSelect(event) {
      console.log(event);
    },
    filterDetails() {
      if (this.selectedNodes2) {
        console.table(this.json_fields);
        for (const key in this.selectedNodes2) {
          this.exportShowItem.forEach((item) => {
            if (item.id == key) {
              this.json_fields[item.name] = item.key;
            }
          });
        }
        console.table(this.json_fields);
        console.log(this.$refs.excel_table.generate());
      }
    },
  },
  created() {
    this.get_exportdetails();
  },
};
</script>
<style lang="">
</style>