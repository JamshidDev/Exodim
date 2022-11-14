<template >
  <div class="grid px-3">
    <div class="col-12">
      <div class="grid">
        <div class="col-12 pb-0">
          <bread-crumb :breadCump="[{name:'Xodimlar', path:'/admin/partemployee'}]"></bread-crumb>
        </div>
        <div class="col-12 y-0 py-0">
          <span class="text-2xl font-semibold"
            >Xodimlar
            <span class="text-base text-primary pl-2">
              ({{ totalCadries }})</span
            >
          </span>
        </div>
      </div>
    </div>
    <div class="col-12 py-0">
      <div class="grid">
        <div class="col-12 sm:col-6 md:col-6 lg:col-2 xl:col-2 p-fluid">
          <InputText
            type="text"
            v-model="organization.first_name"
            class="w-full p-inputtext-sm"
            placeholder="Ismni kiriting"
            @keyup.enter="searchBtn()"
          />
        </div>

        <div class="col-12 sm:col-6 md:col-6 lg:col-2 xl:col-2 p-fluid">
          <InputText
            type="text"
            v-model="organization.last_name"
            class="w-full p-inputtext-sm"
            placeholder="Familiyani kiriting"
            @keyup.enter="searchBtn()"
          />
        </div>
        <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3 p-fluid">
          <Dropdown
            id="adressDistrict"
            v-model="departmentValue"
            :options="departmentList"
            optionLabel="name"
            class="p-inputtext-sm"
            :filter="true"
            placeholder="Bo'limni tanlang"
            emptyMessage="Hech narsa topilmadi"
            emptyFilterMessage="Tizmda ma'lumot topilmadi..."
            @change="changeDepartment"
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
          <div class="grid">
            <div class="col-6">
              <Button
                icon="pi pi-filter"
                label="Filter"
                class="w-full p-button-secondary mx-2 p-button-sm"
                @click="openFilterPanel"
              />
            </div>
            <div class="col-6">
              <Button
                label="Yuklash"
                class="w-full p-button-success font-medium p-button-sm"
                @click="controlExportDialog(true)"
              />
            </div>
          </div>

          <!-- Additional filter menu -->
          <OverlayPanel
            ref="op"
            :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
            :style="{ width: '550px' }"
          >
            <div class="grid">
              <div class="col-12">
                <h6 class="text-sm mb-0 font-bold">
                  Qo'shimcha filter sozlamalari
                </h6>
              </div>

              <div class="col-12">
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
                    class="w-full p-inputtext-sm"
                    @change="changeStuffs"
                    emptyMessage="Hech narsa topilmadi"
                    emptyFilterMessage="Tizmda ma'lumot topilmadi..."
                    @before-show="beforeOpen"
                    :disabled="Stuffs.length == 0"
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
                  <h6 class="text-sm mb-0">Sharif</h6>
                </div>
                <div class="w-full flex">
                  <div class="w-full">
                    <InputText
                      type="text"
                      v-model="organization.middle_name"
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
                      @change="changeCadrAge"
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
                      v-model="genderValue"
                      :options="genderList"
                      optionLabel="name"
                      placeholder="Tanlang"
                      class="w-full p-inputtext-sm"
                      @change="changeGender"
                    />
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="grid">
                  <div class="col-6">
                    <p class="text-left text-600 mb-0 font-bold">
                      Filter sozlamalari
                    </p>
                  </div>
                  <div class="col-6">
                    <div class="grid">
                      <div class="col-6">
                        <Tag
                          class="cursor-pointer w-full"
                          value="Izlash"
                          severity="info"
                          icon="pi pi-search"
                          @click="searchBtn()"
                        ></Tag>
                      </div>
                      <div class="col-6">
                        <Tag
                          class="cursor-pointer w-full"
                          value="Tozalash"
                          severity="danger"
                          icon="pi pi-filter-slash"
                          @click="clearFilterDetails()"
                        ></Tag>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </OverlayPanel>
        </div>
        <div class="col-12 sm:col-6 md:col-6 lg:col-2 xl:col-2 p-fluid">
          <Button
            icon="pi pi-plus"
            @click="goNewPush()"
            class="p-button-info font-medium p-button-sm"
            label="Xodim"
            v-tooltip.bottom="`Yangi xodim qo'shish`"
          />
        </div>
      </div>
    </div>

    <!-- Employees table ---start -->
    <div class="col-12 pt-0" v-show="!loadingtable">
      <DataTable
        ref="dt"
        :value="cadries"
        dataKey="id"
        responsiveLayout="scroll"
        showGridlines
        class="p-datatable-sm"
        v-show="totalCadries"
      >
        <Column style="min-width:30px; width:36px">
          <template #header>
            <div class="text-800 text-sm font-medium">
              No
            </div>
          </template>
          <template #body="slotProps">
            <div class="w-full text-center text-base font-medium">
              {{ slotProps.data.number }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 50px; width: 50px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Rasm
            </div>
          </template>
          <template #body="slotProps">
            <div class="flex justify-content-center">
              <Image
                :src="slotProps.data.photo"
              alt="Rasm yo'q"
                width="30"
                height="30"
                preview
              />
            </div>
          </template>
        </Column>
        <Column field="name" style="min-width: 100px; width: 300px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              F.I.SH
            </div>
          </template>
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-sm
                lg:text-base
                xl:text-base
                font-medium
                hover:text-blue-500
                cursor-pointer
              "
              v-tooltip.bottom="`Tahrirlash`"
              @click="goPush(slotProps.data.id)"
            >
              <div>{{ slotProps.data.fullname }}</div>
            </div>
          </template>
        </Column>

        <Column style="min-width: 200px">
          <template #header>
            <div class="text-800 font-semibold">Lavozimi</div>
          </template>
          <template #body="slotProps">
            <div
              class="text-sm sm:text-sm md:text-sm lg:text-base xl:text-base"
            >
              {{
                slotProps.data.staff
                  ? slotProps.data.staff.staff_full
                  : `Tizimda ma'lumot yo'q`
              }}
            </div>
          </template>
        </Column>
        <Column style="min-width:120px; width:180px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Bo'lim nomi
            </div>
          </template>
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-sm
                lg:text-base
                xl:text-base
                font-medium
              "
            >
              <span>{{ slotProps.data.department }}</span>
            </div>
          </template>
        </Column>

        <Column :exportable="false" style="min-width: 100px; width: 100px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Amallar
            </div>
          </template>
          <template #body="slotProps">
            <div class="flex w-full align-items-center gap-2">
              <download-button
                :color="'bg-primary active:bg-primary'"
                :border="'border-1 border-primary border-round'"
                v-tooltip.left="`Ma'lumotlarni ko'rish`"
                :icon="'pi pi-id-card'"
                @click="goPushDetails(slotProps.data.id)"
              ></download-button>
              <download-button
                v-tooltip.left="`Ma'lumotlarni yuklash`"
                :color="'bg-green-600 active:bg-green-600'"
                :border="'border-1 border-green-600 border-round'"
                :icon="'pi pi-cloud-download'"
                @click="DowloadResume(slotProps.data.id)"
              ></download-button>
            </div>
          </template>
        </Column>
        <template #footer>
          <table-pagination
            v-show="totalCadries > 10"
            :total_page="totalCadries"
            :page="organization.page"
            :per_page="organization.per_page"
            @pagination="changePagination($event)"
          ></table-pagination>
        </template>
      </DataTable>
      <search-not-found-page v-show="!totalCadries"></search-not-found-page>
    </div>
    <div class="col-12 pt-2" v-show="loadingtable">
      <employee-loader></employee-loader>
    </div>
    <div class="col-12">
      <Toast position="bottom-right" />
      <word-template
        :cadry_id="Dowload_cadry_id"
        v-show="false"
        ref="word_resume"
      ></word-template>
      <employee-details ref="show_resume"></employee-details>
      <export-panel ref="export_to_excel"></export-panel>
    </div>
  </div>
</template>
<script>
import TablePagination from "../components/Pagination/TablePagination.vue";
import DownloadButton from "@/components/buttons/DownloadButton";
import organizationsService from "../service/servises/organizationsService";
import employeeService from "../service/servises/employeeService";
import EmployeeLoader from "../components/loaders/EmployeeLoader.vue";
import SearchNotFoundPage from "../components/EmptyComponent/SearchNotFoundPage.vue";
import WordTemplate from "../components/Eksport/WordTemplate.vue";
import EmployeeDetails from "../components/partEmployee/EmployeeDetails.vue";
import ExportPanel from "../components/Eksport/ExportPanel.vue";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb.vue";
export default {
  components: {
    EmployeeLoader,
    TablePagination,
    SearchNotFoundPage,
    WordTemplate,
    EmployeeDetails,
    DownloadButton,
    ExportPanel,
    BreadCrumb,
  },
  data() {
    return {
      displayBasic: true,
      loadingtable: false,
      selectedCadries: null,
      cadries: [],
      Dowload_cadry_id: null,
      selectedAge: [10, 80],

      // Organization
      departmentList: [],
      departmentValue: null, //fake
      Stuffs: [],
      stuffValue: null, //fake
      educationList: [],
      educationValue: null, //fake
      regionList: [],
      regionValue: null, //fake
      vacationList: [],
      vacationValue: null, //fake
      genderList: [
        {
          name: "Erkak",
          id: 'true',
        },
        {
          name: "Ayol",
          id: 'false',
        },
      ],
      genderValue: null, //fake
      selectedAge: [10, 80],

      totalCadries: 0,

      page: localStorage.getItem("page_1") || 1,
      per_page: localStorage.getItem("per_page_1") || 10,

      // Organization params
      organization: {
        railway_id: null,
        organization_id: null,
        department_id: null,
        page: localStorage.getItem("page_1")
          ? Number(localStorage.getItem("page_1"))
          : 1,
        per_page: localStorage.getItem("per_page_1")
          ? Number(localStorage.getItem("per_page_1"))
          : 10,
        last_name: null,
        first_name: null,
        middle_name: null,
        staff_id: null,
        sex: null,
        vacation_id: null,
        education_id: null,
        age_start: null,
        age_end: null,
        birth_region_id: null,
      },
    };
  },
  watch: {
    exportOptions(value) {
      console.log(value);
    },
  },
  methods: {
    // get Employee function
    getEmployee(params) {
      this.controlLoading(true);
      employeeService
        .get_Employees(params)
        .then((res) => {
          this.totalCadries = res.data.cadries.pagination.total;
          let cadrList = [];
          let number =
            (this.organization.page - 1) * this.organization.per_page;
          res.data.cadries.data.forEach((item) => {
            number++;
            item.number = number;
            cadrList.push(item);
          });
          this.cadries = res.data.cadries.data;
          this.controlLoading(false);
        })
        .catch((error) => {
          this.controlLoading(false);
          console.log(error);
        });
    },
    get_Department(id) {
      employeeService
        .get_Department({ organization_id: id })
        .then((res) => {
          res.data.unshift({
            name: "Barchasi",
            id: null,
          });
          this.departmentList = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    get_Stuffs(id) {
      employeeService
        .get_Stuffs({ organization_id: id })
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

    changeDepartment(event) {
      this.organization.department_id = event.value.id;
      this.getEmployee(this.organization);
    },

    changeStuffs(event) {
      this.organization.staff_id = event.value.id;
    },
    changeEducation(event) {
      this.organization.education_id = event.value.id;
    },
    changeRegion(event) {
      this.organization.birth_region_id = event.value.id;
    },

    changeCadrAge(event) {
      this.organization.age_start = event[0];
      this.organization.age_end = event[1];
    },
    changeGender(event) {
      this.organization.sex = event.value.id;
    },

    changeVacation(event) {
      this.organization.vacation_id = event.value.id;
    },
    changePagination(event) {
      console.log(event);
      this.organization.page = event.page;
      this.organization.per_page = event.per_page;
      localStorage.setItem("page_1", event.page);
      localStorage.setItem("per_page_1", event.per_page);
      this.getEmployee(this.organization);
    },

    goPush(id) {
      this.$router.push(`/admin/editemployee/${id}`);
    },
    goPushDetails(id) {
      this.$router.push(`/admin/employee/view/${id}`);
    },
    goNewPush() {
      this.$router.push("/admin/addnewemployee");
    },

    searchBtn() {
      console.table(this.organization);
      this.getEmployee(this.organization);
    },

    // Dowload resume
    DowloadResume(id) {
      console.table(id);
      this.$refs.word_resume.generateWord(id);
    },

    // Opent resume
    openResume(id) {
      this.$refs.show_resume.showResume(id);
    },

    beforeOpen(event) {
      console.log(event);
    },
    // clear additional filter details
    clearFilterDetails() {
      this.organization.staff_id = null;
      this.stuffValue = null;
      this.organization.education_id = null;
      this.educationValue = null;
      this.organization.vacation_id = null;
      this.vacationValue = null;
      this.organization.first_name = null;
      this.organization.last_name = null;
      this.organization.middle_name = null;
      this.organization.age_end = null;
      this.organization.age_start = null;
      this.organization.sex = null;
      (this.organization.birth_region_id = null),
        (this.regionValue = null),
        (this.genderValue = null);
      this.selectedAge = [10, 80];
      this.$toast.add({
        severity: "success",
        summary: "Muvofaqqiyatli bajarildi",
        detail: "Tozalandi",
        life: 2000,
      });
    },

    openFilterPanel(event) {
      this.$refs.op.toggle(event);
    },
    controlLoading(item) {
      this.loadingtable = item;
    },
    controlExportDialog(item) {
      this.$refs.export_to_excel.controlPanel(true, this.organization);
    },
  },
  created() {
    this.getEmployee(this.organization);
    this.get_Department();
    this.get_Education();
    this.get_getRegions();
    this.get_getVacations();
    this.get_Stuffs();
    console.log(this.$route);
  },
};
</script>
<style lang="scss">
table {
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>