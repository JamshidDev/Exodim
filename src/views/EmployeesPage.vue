<template >
  <div class="grid card surface-0 shadow-1 py-4 px-3">
    <div class="col-6">
      <h6 class="uppercase pl-2">Umumiy korxonalar</h6>
    </div>

    <div class="col-6">
      <div class="w-full flex justify-content-end">
        <SplitButton
          label="Export"
          :model="items"
          class="p-button-secondary p-button-sm"
        ></SplitButton>
      </div>
    </div>
    <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3 p-fluid">
      <h6>Katta korxonalar - {{ bigOrganizationList.length-1 }}</h6>
      <Dropdown
        id="adressDistrict"
        v-model="bigOrgValue"
        :options="bigOrganizationList"
        optionLabel="name"
        class="xl:p-inputtext-sm"
        :filter="true"
        placeholder="Tanlang"
        emptyMessage="Hech narsa topilmadi"
        emptyFilterMessage="Tizmda ma'lumot topilmadi..."
        @change="changeRailway"
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

    <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
      <h6>Korxonalar - {{ organizations.length? organizations.length-1 : organizations.length }}</h6>
      <Dropdown
        id="adressDistrict"
        v-model="orgValue"
        :options="organizations"
        optionLabel="name"
        @change="changeOrganization"
        :filter="true"
        placeholder=" Tanlang"
        class="w-full"
        emptyMessage="Hech narsa topilmadi"
        emptyFilterMessage="Tizmda ma'lumot topilmadi..."
      >
        <template #value="slotProps">
          <div
            class="country-item country-item-value w-full"
            v-if="slotProps.value"
          >
            <div>{{ slotProps.value.name }}</div>
          </div>
          <span v-else>
            {{ slotProps.placeholder }}
          </span>
        </template>
        <template #option="slotProps">
          <div class="country-item w-full">
            <div>{{ slotProps.option.name }}</div>
          </div>
        </template>
      </Dropdown>
    </div>

    <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
      <h6>Bo'limlar va bekatlar - {{ departmentList.length? departmentList.length-1 : departmentList.length }}</h6>
      <Dropdown
        id="adressDistrict"
        v-model="departmentValue"
        :options="departmentList"
        optionLabel="name"
        :filter="true"
        placeholder="Tanlang"
        class="w-full"
        @change="changeDepartment"
        emptyMessage="Hech narsa topilmadi"
        emptyFilterMessage="Tizmda ma'lumot topilmadi..."
      >
        <template #value="slotProps">
          <div
            class="country-item country-item-value w-full"
            v-if="slotProps.value"
          >
            <div>{{ slotProps.value.name }}</div>
          </div>
          <span v-else>
            {{ slotProps.placeholder }}
          </span>
        </template>
        <template #option="slotProps">
          <div class="country-item w-full">
            <div>{{ slotProps.option.name }}</div>
          </div>
        </template>
      </Dropdown>
    </div>

    <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
      <Button
        label="Qidiruv"
        icon="pi pi-search "
        class="mt-5 w-10 p-button-secondary"
        @click="searchBtn()"
      />
      <Button
        icon="pi pi-filter"
        class="mt-5 w-2 p-button-text p-button-secondary"
        @click="openFilterPanel"
      />
      <!-- Additional filter menu -->
      <OverlayPanel
        ref="op"
        :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
        :style="{ width: '550px' }"
      >
        <div class="grid">
          <div class="col-12">
            <h6 class="text-sm uppercase">Qo'shimcha filter sozlamalari</h6>
          </div>

          <div class="col-6">
            <div class="col-12">
              <h6 class="text-sm mb-0">Lavozim {{ Stuffs.length }}</h6>
            </div>
            <div class="w-full flex">
              <Dropdown
                id="adressDistrict"
                v-model="stuffValue"
                :options="Stuffs"
                optionLabel="name"
                :filter="true"
                placeholder="Tanlang"
                :showClear="true"
                class="w-full p-inputtext-sm"
                @change="changeStuffs"
                emptyMessage="Hech narsa topilmadi"
        emptyFilterMessage="Tizmda ma'lumot topilmadi..."
              >
                <template #value="slotProps">
                  <div
                    class="country-item country-item-value w-full"
                    v-if="slotProps.value"
                  >
                    <div>{{ slotProps.value.name }}</div>
                  </div>
                  <span v-else>
                    {{ slotProps.placeholder }}
                  </span>
                </template>
                <template #option="slotProps">
                  <div class="country-item w-full">
                    <div>{{ slotProps.option.name }}</div>
                  </div>
                </template>
              </Dropdown>
            </div>
          </div>
          <div class="col-6">
            <div class="col-12">
              <h6 class="text-sm mb-0">Ma'lumoti</h6>
            </div>
            <div class="w-full flex">
              <div class="w-full">
                <Dropdown
                  v-model="educationValue"
                  :options="educationList"
                  optionLabel="name"
                  placeholder="Tanlang"
                  class="w-full p-inputtext-sm"
                  @change="changeEducation"
                />
              </div>
            </div>
          </div>

          <div class="col-6">
            <div class="col-12">
              <h6 class="text-sm mb-0">Viloyat</h6>
            </div>
            <div class="w-full flex">
              <div class="w-full">
                <Dropdown
                  v-model="regionValue"
                  :options="regionList"
                  optionLabel="name"
                  placeholder="Tanlang"
                  class="w-full p-inputtext-sm"
                  @change="changeRegion"
                />
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="col-12">
              <h6 class="text-sm mb-0">Ta'til</h6>
            </div>
            <div class="w-full flex">
              <div class="w-full">
                <Dropdown
                  v-model="vacationValue"
                  :options="vacationList"
                  optionLabel="name"
                  placeholder="Ta'til"
                  class="w-full p-inputtext-sm"
                  @change="changeVacation"
                />
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="col-12">
              <h6 class="text-sm mb-0">Ism</h6>
            </div>
            <div class="w-full flex">
              <div class="w-full">
                <InputText
                  type="text"
                  v-model="organization.first_name"
                  class="w-full font-semibold p-inputtext-sm"
                  placeholder="Kiriting"
                />
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="col-12">
              <h6 class="text-sm mb-0">Familiya</h6>
            </div>
            <div class="w-full flex">
              <div class="w-full">
                <InputText
                  type="text"
                  v-model="organization.last_name"
                  class="w-full font-semibold p-inputtext-sm"
                  placeholder="Kiriting"
                />
              </div>
            </div>
          </div>

          <div class="col-6">
            <div class="col-12">
              <h6 class="text-sm mb-1">Yosh oralig'i</h6>
              <p class="text-center text-blue-600 font-semibold">
                {{ selectedAge[0] + " -- " + selectedAge[1] }}
              </p>
            </div>
            <div class="w-full flex">
              <div class="w-full">
                <Slider
                  class=""
                  v-model="selectedAge"
                  :step="1"
                  :range="true"
                />
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="col-12">
              <h6 class="text-sm mb-0">Jinsi</h6>
            </div>
            <div class="w-full flex">
              <div class="w-full">
                <Dropdown
                  v-model="regionValue"
                  :options="regionList"
                  optionLabel="name"
                  placeholder="Jinsi"
                  class="w-full p-inputtext-sm"
                />
              </div>
            </div>
          </div>
          <div class="col-12 flex justify-content-between align-items-center">
            <p class="text-left text-600 mb-0">
              Qo'shimcha filter sozlamalarini sozlash
            </p>
            <Tag class="cursor-pointer" value="Tozalash" severity="danger" icon="pi pi-filter-slash" @click="clearFilterDetails()"></Tag>
          </div>
        </div>
      </OverlayPanel>
    </div>

    <!-- Employees table ---start -->
    <div class="col-12 pt-6" v-show="!loadingtable">
      <DataTable
        ref="dt"
        :value="cadries"
        v-model:selection="selectedCadries"
        dataKey="id"
        responsiveLayout="scroll"
        showGridlines
        class=" p-datatable-sm"
      >
        <template #header>
          <div class="flex w-full">
            <h6 class="mb-2 md:m-0 uppercase py-2 px-3">
              Umumiy xodimlar (<span
                class="text-blue-500 font-semibold text-base"
                >{{ totalCadries }}</span
              >
              )
            </h6>
          </div>
          <div class="flex justify-content-center">
            <Paginator
              v-model:first="currentPage"
              v-model:rows="per_page"
              :totalRecords="totalpage"
              :rowsPerPageOptions="[10, 20, 30]"
            ></Paginator>
          </div>
        </template>

        <Column
          selectionMode="multiple"
          style="width: 3rem"
          :exportable="false"
        ></Column>
        <Column header="Fotosurat">
          <template #body="slotProps">
            <div class="flex justify-content-center">
              <Image
                :src="slotProps.data.photo"
                :alt="slotProps.data.fullname"
                width="40"
                height="40"
                preview
              />
            </div>
            <!-- <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.image" class="product-image" /> -->
          </template>
        </Column>
        <Column field="name" header="F.I.SH" style="min-width: 16rem">
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
              {{ slotProps.data.fullname }}
            </div>
          </template>
        </Column>

        <Column field="rating" header="Lavozimi" style="min-width: 20rem">
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-md
                lg:text-base
                xl:text-base
                font-medium
              "
            >
              O'zbekiston temir yo'llari Aksiyadorlik jamiyati Personalni
              boshqarish va kadrlar tayyorlash boshqarmasida ish yurituvchi

              {{ slotProps.data.fullname }}
            </div>
          </template>
        </Column>
        <Column field="rating" header="Korxona nomi" style="min-width: 16rem">
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-md
                lg:text-base
                xl:text-base
                font-medium
              "
            >
              Toshkent mintaqaviy temir yo'l uzeli
              <span v-show="false">{{ slotProps }}}</span>
            </div>
          </template>
        </Column>

        <Column :exportable="false" style="min-width: 6rem">
          <template #body="slotProps">
            <div class="flex w-full">
              <Button
                icon="pi pi-id-card"
                class="p-button-rounded p-button-secondary mr-2"
                v-tooltip.left="`Ma'lumotlarni ko'rish`"
                @click="isShow = !isShow"
              />
              <Button
                icon="pi pi-cloud-download"
                class="p-button-rounded p-button-secondary"
                v-tooltip.left="`Ma'lumotnomani yuklash`"
                @click="confirmDeleteProduct(slotProps.data)"
              />
            </div>
          </template>
        </Column>
        <template #footer>
          <div class="flex justify-content-center">
            <Paginator
              v-model:first="currentPage"
              v-model:rows="per_page"
              :totalRecords="totalpage"
              :rowsPerPageOptions="[10, 20, 30]"
            ></Paginator>
          </div>
        </template>
      </DataTable>
    </div>
    <div class="col-12 pt-6" v-show="loadingtable">
     
      <employee-loader ></employee-loader>
    </div>
    <div class="col-12">
      <Toast position="bottom-right"  />
    </div>
  </div>
</template>
<script>
import organizationsService from "../service/servises/organizationsService";
import globalFactoryService from "../service/servises/globalFactoryService";
import EmployeeLoader from "../components/loaders/EmployeeLoader.vue";
export default {
  components: { EmployeeLoader },
  data() {
    return {
      displayBasic: true,
      loadingtable: false,

      selectedCadries: null,
      value1: null,
      selectedCity: null,
      selectedYear: null,
      cadries: [],
      items: [
        {
          label: "Pdf",
          icon: "pi pi pi-copy",
          command: () => {
            this.$toast.add({
              severity: "success",
              summary: "Updated",
              detail: "Data Updated",
              life: 3000,
            });
          },
        },
        {
          label: "Exel",
          icon: "pi pi pi-copy",
          command: () => {
            this.$toast.add({
              severity: "success",
              summary: "Updated",
              detail: "Data Updated",
              life: 3000,
            });
          },
        },
        {
          label: "Printer",
          icon: "pi pi-print",
          command: () => {
            this.$toast.add({
              severity: "success",
              summary: "Updated",
              detail: "Data Updated",
              life: 3000,
            });
          },
        },
      ],
   
      selectedAge: [10, 80],
     

      // Organization
      bigOrganizationList: [],
      bigOrgValue: null, //fake
      organizations: [],
      orgValue: null, //fake
      Stuffs: [],
      stuffValue: null, //fake
      departmentList: [],
      departmentValue: null, //fake
      educationList: [],
      educationValue: null, //fake
      regionList: [],
      regionValue: null, //fake
      vacationList: [],
      vacationValue: null, //fake

      currentPage: 1,
      per_page: 10,
      totalpage: 0,
      totalCadries: 0,

      // Organization params
      organization: {
        railway_id: null,
        organization_id: null,
        department_id: null,
        per_page: 10,
        page: 1,
        last_name: null,
        first_name: null,
        middle_name: null,
        staff_id: null,
        sex: null,
        vacation_id: null,
        education_id: null,
        age_start: null,
        age_end: null,
      },
    };
  },
  watch: {
    currentPage(number) {
      console.log(number);
      console.log(this.per_page);
      this.organization.page = (number + this.per_page) / this.per_page;
      this.getOrg(this.organization);
    },
    per_page(number) {
      this.currentPage = 1
      this.organization.per_page = number;
      // this.getOrg(this.organization);
    },
  },
  methods: {
    // get Global organization function
    getOrg(params) {
      this.controlLoading(true);
      globalFactoryService
        .getOrganization(params)
        .then((res) => {
          this.totalCadries = res.data.cadries.pagination.total;
          this.totalpage = res.data.cadries.pagination.total;
          this.cadries = res.data.cadries.data;

          this.controlLoading(false);
        })
        .catch((error) => {
          this.controlLoading(false);
          console.log(error);
        });
    },

    // get  Factory function
    get_Railway() {
      organizationsService
        .get_Railway()
        .then((res) => {
          this.bigOrganizationList = res.data;
          this.bigOrganizationList.unshift({
            name:"Barchasi",
            id:null
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },

    get_Organization(id) {
      organizationsService
        .get_Organization({ railway_id: id })
        .then((res) => {
         
          if(res.data.length){
            this.organizations = res.data;
            this.organizations.unshift({
            name:"Barchasi",
            id:null
          });
          }else{
            this.organizations = res.data;
          }
          
        })
        .catch((error) => {
          console.log(error);
        });
    },

    get_Department(id) {
      organizationsService
        .getDepartment({ organization_id: id })
        .then((res) => {
          res.data.unshift({
            name:"Barchasi",
            id:null
          });
          this.departmentList = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    get_Stuffs(id) {
      organizationsService
        .get_Staffs({ organization_id: id })
        .then((res) => {
          this.Stuffs = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    get_Education() {
      organizationsService
        .getEducation()
        .then((res) => {
          this.educationList = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    get_getRegions() {
      organizationsService
        .getRegions()
        .then((res) => {
          this.regionList = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    get_getVacations() {
      organizationsService
        .getVacations()
        .then((res) => {
          this.vacationList = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    changeRailway(event) {
      this.organization.railway_id = event.value.id;
      this.get_Organization(event.value.id);
      this.organization.organization_id = null;
      this.organization.department_id = null;
      this.departmentList = [];
      this.departmentValue = null;
      this.orgValue = null;
      this.getOrg(this.organization);
    },

    changeOrganization(event) {
      this.organization.organization_id = event.value.id;
      this.organization.department_id = null;
      this.departmentValue = null;
      this.stuffValue = null;
      this.get_Department(event.value.id);
      this.get_Stuffs(event.value.id);
      this.getOrg(this.organization);
    },

    changeDepartment(event) {
      this.organization.department_id = event.value.id;
      this.getOrg(this.organization);
    },

    changeStuffs(event) {
      this.organization.staff_id = event.value.id;
    },
    changeEducation(event){
      this.organization.education_id = event.value.id;
    },
    changeRegion(event){
    
    },
    changeVacation(event){
      this.organization.vacation_id = event.value.id;
    },

    searchBtn(){
      console.table(this.organization);
      this.getOrg(this.organization);
    },

    // clear additional filter details
    clearFilterDetails(){
      this.organization.staff_id =null;
      this.stuffValue =null;
      this.organization.education_id =null;
      this.educationValue =null;
      this.organization.vacation_id =null;
      this.vacationValue =null;
      this.organization.first_name =null;
      this.organization.last_name =null;
      this.organization.middle_name =null;
      this.$toast.add({severity:'success', summary: 'Muvofaqqiyatli bajarildi', detail:'Tozalandi', life: 2000});
      
    },




    openFilterPanel(event) {
      this.$refs.op.toggle(event);
    },
    controlLoading(item) {
      this.loadingtable = item;
    },
  },
  created() {
    this.getOrg(this.organization);
    this.get_Railway();
    this.get_Education();
    this.get_getRegions();
    this.get_getVacations();
  },
};
</script>
<style lang="scss">
.custop_dropdown {
  max-width: 100% !important;
}
.p-dropdown-panel {
  max-width: 100px;
}
.p-dropdown-items-wrapper {
  max-width: 100%;
}
.p-dropdown-item {
  max-width: 100%;
  overflow: visible !important;
  white-space: normal !important;
}
.max-w-100 {
  max-width: 100%;
}
</style>