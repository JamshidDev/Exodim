<template >
  <div class="grid px-3">


    <!-- Title section -->
    <div class="col-12">
      <div class="grid">
        <div class="col-12 pb-0">
          <bread-crumb
            :breadCump="[{ name: 'Malaka oshirish', path: '' }]"
          ></bread-crumb>
        </div>
        <div class="col-12 y-0 py-0">
          <span class="text-2xl font-semibold"
            >Malaka oshirish
            <span class="text-base text-primary pl-2" v-show="totalItem > 0">
              ( {{ totalItem }} )</span
            >
          </span>
        </div>
      </div>
    </div>


<!-- Header section -->
    <div class="col-12 py-0">
      <div class="grid">
        <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3 p-fluid">
                <Dropdown
                  v-model="qualification"
                  :options="qualificationList"
                  optionLabel="name"
                  placeholder="Tayorlov turini tanlang"
                  class="w-full p-inputtext-sm"
                  @change="changeQualification"
                />
        </div>

        <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
          <Dropdown
            id="adressDistrict"
            v-model="apparat"
            :options="apparatList"
            optionLabel="name"
            :filter="true"
            placeholder="Xo'jalikni tanlang"
            class="w-full p-inputtext-sm"
            @change="changeApparats"
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
          <Dropdown
            id="adressDistrict"
            v-model="direction"
            :options="DirectionList"
            optionLabel="name"
            :filter="true"
            placeholder="Yo'nalishni tanlang"
            class="w-full p-inputtext-sm"
            @change="changeDirection"
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
        <div class="grid p-0">
          <div class="col-7 p-fluid">
            <InputText
            type="text"
            v-model="search_name"
            placeholder="Qidiruv..."
            class="p-inputtext-sm"
            @keyup.enter="searchByName()"
          />
          </div>

          <div class="col-5 p-fluid">
            <Calendar
            inputId="yearpicker"
            class="p-inputtext-sm"
            @date-select="changeDate"
            v-model="date1"
            view="year"
            dateFormat="yy"
          />
          </div>

        </div>
        </div>
      </div>
    </div>


    <!-- table section -->
    <div class="col-12 pt-0" v-show="!loadingtable">
      <DataTable
        ref="dt"
        :value="statisticList"
        dataKey="id"
        responsiveLayout="scroll"
        showGridlines
        v-show="totalItem > 0"
        class="p-datatable-sm"
        v-model:selection="selectItem"
      >
        <Column style="min-width: 30px; width: 36px">
          <template #header>
            <div class="text-800 text-sm font-medium">No</div>
          </template>
          <template #body="slotProps">
            <div class="text-800 w-full text-center text-sm lg:text-base xl:text-base font-normal">
              {{ slotProps.data.number }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 100px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Korxona nomi
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
              <div>{{ slotProps.data.name }}</div>
            </div>
          </template>
        </Column>
        <Column field="name" style="min-width: 50px; width: 150px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Xodimlar soni
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
                text-center
              "
            >
            <div v-show="(slotProps.data.upgrades==0)" class="w-full text-center text-red-700 bg-red-100 ">{{ slotProps.data.upgrades }}</div>
              <Chip v-show="(slotProps.data.upgrades!==0)"
                :label="slotProps.data.upgrades.toString()"
                class="mr-2 mb-2 text-sm text-blue-700 bg-blue-100 font-bold"
              />
            </div>
          </template>
        </Column>

        <Column style="min-width:50px; width:200px">
          <template #header>
            <div class="text-800 font-semibold">Yotoqxonaga zarurati yo'q xodimlar</div>
          </template>
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-sm
                lg:text-base
                xl:text-base
                text-center
              "
            >
              <div v-show="(slotProps.data.status_bedroom==0)" class="w-full text-center text-red-700 bg-red-100 ">{{ slotProps.data.status_bedroom}}</div>
              <Chip v-show="(slotProps.data.status_bedroom!==0)"
                :label="slotProps.data.status_bedroom.toString()"
                class="mr-2 mb-2 text-sm text-blue-700 bg-blue-100 font-bold"
              />
            </div>
          </template>
        </Column>
        <!-- <Column style="min-width: 50px; width: 60px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Ruhsat
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
                text-center
              "
            >
              <span>{{ slotProps.data.accepteds }}</span>
            </div>
          </template>
        </Column> -->

        <!-- <Column :exportable="false" style="min-width: 100px; width: 100px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Amallar
            </div>
          </template>
          <template #body>
            <div class="flex w-full align-items-center gap-2"></div>
          </template>
        </Column> -->
        <template #footer>
          <table-pagination
            v-show="totalItem > 10"
            :total_page="totalItem"
            @pagination="changePagination($event)"
          ></table-pagination>
        </template>
      </DataTable>
      <no-data-component v-show="!totalItem"></no-data-component>
    </div>
    <div class="col-12 pt-0" v-show="loadingtable">
      <skill-loader></skill-loader>
    </div>
  </div>
</template>
<script>
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import SkillService from "@/service/servises/SkillService";
import NoDataComponent from "@/components/EmptyComponent/NoDataComponent";
import TablePagination from "@/components/Pagination/TablePagination";
import SkillLoader from "@/components/loaders/SkillLoader";
export default {
  components: {
    BreadCrumb,
    NoDataComponent,
    TablePagination,
    SkillLoader,
  },
  data() {
    return {
      List:[],
      qualificationList:[],
      qualification:null,
      apparatList: [],
      apparat: null,
      DirectionList: [],
      direction: null,

      selectItem:null,

      statisticList: [],
      totalItem: 0,
      search_name: null,
      date1: "2022",
      loadingtable: false,

      params: {
        date_qual: "2022",
        search: null,
        page: localStorage.getItem("page_7")
          ? Number(localStorage.getItem("page_7"))
          : 1,
        per_page: localStorage.getItem("per_page_7")
          ? Number(localStorage.getItem("per_page_7"))
          : 10,
        apparat_id:null,
        training_direction_id:null,
      },
    };
  },

  methods: {
    get_Statistic(params, loader) {
      this.controlLoader(loader);
      SkillService.get_Skill_Statistic(params).then((res) => {
        let number = (this.params.page - 1) * this.params.per_page;
        res.data.railways.data.forEach((item) => {
          number++;
          item.number = number;
        });
        this.statisticList = res.data.railways.data;
        this.totalItem = res.data.railways.pagination.total;
        this.controlLoader(false);
      });
    },
    get_Apparats(){
      SkillService.get_Skill_Apparats({params:{
        page:1,
        per_page:1000,
        search:null,
      }}).then((res) =>{
        this.qualificationList = res.data.type_qualifications;
        this.List = res.data.apparats.data;
      })
    },
    get_Directions(){
      SkillService.get_Skill_Direction({params:{
        page:1,
        per_page:1000,
        search:null,
      }}).then((res) =>{
        console.log(res.data.directions.data);
        this.DirectionList =res.data.directions.data.filter((item) => item.apparat.id == this.apparat.id )
      })
    },



    changeApparats(){
      this.direction = null;
      this.params.apparat_id = this.apparat.id;
      this.get_Statistic(this.params, true);
      this.get_Directions()
    },
    changeDirection(){
      this.params.training_direction_id = this.direction.id;
      this.get_Statistic(this.params, true);
    },
    changeQualification(){
      this.apparat = null;
      this.direction = null;
      this.apparatList = this.List.filter((item) => item.type_qualification.id == this.qualification.id)
    },

    changePagination(event) {
      this.params.page = event.page;
      this.params.per_page = event.per_page;
      localStorage.setItem("page_7", event.page);
      localStorage.setItem("per_page_7", event.per_page);
      this.get_Statistic(this.params, true);
    },
    changeDate() {
      this.params.date_qual = new Date(this.date1).getFullYear();
      this.get_Statistic(this.params, true);
    },

    searchByName() {
      this.params.search = this.search_name;
      this.get_Statistic(this.params, true);
    },
    controlLoader(item) {
      this.loadingtable = item;
    },
  },
  created() {
    this.get_Statistic(this.params, true);
    this.get_Apparats()
  },
};
</script>
<style lang="">
</style>