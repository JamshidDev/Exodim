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
      <div class="col-12" v-show="loader">
        <user-list-loader></user-list-loader>
      </div>
      <div class="col-12" v-show="!loader">
        <DataTable
          ref="dt"
          :value="cadryList"
          dataKey="id"
          responsiveLayout="scroll"
          showGridlines
          class="p-datatable-sm"
          stripedRows
          v-show="totalCadries"
        >
          <template #header>
            <div class="grid">
              <div class="col-12 xl:col-6 lg:col-6 md:col-6">
                <h6 class="font-medium text-lg uppercase">
                  <span class="text-blue-600">{{ department_name }}</span>
                  bo'limidagi xodimlar ro'yhati
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
  
          <Column style="min-width: 200px; width: 300px">
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
                {{ slotProps.data.fullname }}
              </div>
            </template>
          </Column>
          <Column style="min-width: 16rem">
            <template #header>
              <div class="text-800 font-semibold">To'liq shtat lavozim nomi</div>
            </template>
            <template #body="slotProps">
              <div class="text-sm sm:text-sm md:text-md lg:text-lg">
                {{ slotProps.data.staff.staff_full }}
              </div>
            </template>
          </Column>
  
          <Column :exportable="false" style="min-width: 150px; width: 150px">
            <template #header>
              <div class="text-800 font-semibold">Amallar</div>
            </template>
            <template #body="slotProps">
              <div class="flex gap-2">
                <view-button-v
                  v-tooltip.bottom="`Xodimlarni ko'rish`"
                  :icon="'pi-users'"
                ></view-button-v>
                <edit-button
                  :editItem="slotProps.data"
                  @editEvent="editItem($event)"
                ></edit-button>
                <delete-button
                  :deleteItem="slotProps.data.id"
                  @deleteAcceptEvent="deletePosition($event)"
                ></delete-button>
              </div>
            </template>
          </Column>
          <template #footer>
            <table-pagination
              v-show="totalCadries > 10"
              :total_page="totalCadries"
              @pagination="changePagination($event)"
            ></table-pagination>
          </template>
        </DataTable>
        <div class="col-12" v-show="!totalCadries">
        <div class="grid">
          <div class="col-12">
            <h6 class="font-medium text-lg">
              <span class="text-blue-600">{{ department_name }}</span>  bo'limidagi xodimlar ro'yhati
            </h6>
          </div>
          <div class="col-12">
            <div class="text-center w-full text-400">Xodimlar topilmadi</div>
          </div>
        </div>
      </div>
      </div>
    
     
    </div>
  </template>
  <script>
  import employeeService from "../../service/servises/employeeService";
  import UserListLoader from "../loaders/UserListLoader.vue";
  export default {
    components:{
      UserListLoader,
    },
    data() {
      return {
        department_name: null,
        loader:false,
        cadryList: [],
        totalCadries: 0,
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
          region_id: null,
        },
      };
    },
    methods: {
      get_Position_Cadry(id) {
        this.organization.staff_id = id;
        this.controlLoader(true)
        employeeService
          .get_Employees(this.organization)
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
  
            this.cadryList = res.data.cadries.data;
  
            this.controlLoader(false)
          })
          .catch((error) => {
            console.log(error);
            this.controlLoader(false)
          });
      },
      goPush() {
        this.$router.push("/admin/partfactory");
      },
      controlLoader(item){
        this.loader = item
      }
    },
    created() {
      this.department_name = this.$route.params.name;
      this.get_Position_Cadry(this.$route.params.id);
    },
  };
  </script>
  <style lang="scss">
  </style>