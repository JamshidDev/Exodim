<template >
  <div class="grid px-3">
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
            <span class="text-base text-primary pl-2" v-show="(totalItem>0)"> ( {{totalItem}} )</span>
          </span>
        </div>
      </div>
    </div>
    <div class="col-12 py-0">
      <div class="grid">
        <div class="col-12 xl:col-6">
          <InputText
            type="text"
            v-model="search_name"
            placeholder="Qidiruv..."
            class="p-inputtext-sm"
            @keyup.enter="searchByName()"
          />
        </div>
        <div class="col-12 xl:col-6 flex justify-content-end">
          <Calendar inputId="yearpicker" @date-select="changeDate" v-model="date1" view="year" dateFormat="yy"/>
        </div>
      </div>
    </div>
    <div class="col-12 pt-0" v-show="!loadingtable">
      <DataTable
        ref="dt"
        :value="statisticList"
        dataKey="id"
        responsiveLayout="scroll"
        showGridlines
        v-show="totalItem>0"
        class="p-datatable-sm"
      >
        <Column style="min-width: 30px; width: 36px">
          <template #header>
            <div class="text-800 text-sm font-medium">No</div>
          </template>
          <template #body="slotProps">
            <div class="w-full text-center text-base font-medium">
              {{ slotProps.data.number }}
            </div>
          </template>
        </Column>
        <Column style="min-width:100px;">
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
        <Column field="name" style="min-width: 50px; width: 60px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Xodimlar
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
              <div>{{ slotProps.data.upgrades }}</div>
            </div>
          </template>
        </Column>

        <Column style="min-width: 50px; width: 60px">
          <template #header>
            <div class="text-800 font-semibold">Yotoqxona</div>
          </template>
          <template #body="slotProps">
            <div
              class="text-sm sm:text-sm md:text-sm lg:text-base xl:text-base text-center"
            >
            <div>{{ slotProps.data.status_bedroom }}</div>
            </div>
          </template>
        </Column>
        <Column style="min-width: 50px; width: 60px">
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
        </Column>

        <Column :exportable="false" style="min-width: 100px; width: 100px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Amallar
            </div>
          </template>
          <template #body>
            <div class="flex w-full align-items-center gap-2"></div>
          </template>
        </Column>
        <template #footer>
          <table-pagination
            v-show="totalItem>10"
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
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb'
import SkillService from "@/service/servises/SkillService";
import NoDataComponent from '@/components/EmptyComponent/NoDataComponent'
import TablePagination from '@/components/Pagination/TablePagination';
import SkillLoader from '@/components/loaders/SkillLoader';
export default {
  components: {
    BreadCrumb,
    NoDataComponent,
    TablePagination,
    SkillLoader,
  },
  data() {
    return {
      statisticList: [],
      totalItem:0,
      search_name:null,
      date1:'2022',
      loadingtable:false,

      params:{
        date_qual:'2022',
        search:null,
        page:1,
        per_page:10
      }
    };
  },

  methods: {
    get_Statistic(params, loader) {
      this.controlLoader(loader)
      SkillService.get_Skill_Statistic(params).then((res) => {
        let number =
            (this.params.page - 1) * this.params.per_page;
            res.data.railways.data.forEach((item) => {
            number++;
            item.number = number;
          });
        this.statisticList =res.data.railways.data
        this.totalItem = res.data.railways.pagination.total
        this.controlLoader(false)

      });
    },
    changePagination(event){
      this.params.page = event.page;
      this.params.per_page = event.per_page;
      this.get_Statistic(this.params, true);

    },
    changeDate(){
      this.params.date_qual = new Date(this.date1).getFullYear()
      this.get_Statistic(this.params, true);
    },

    searchByName(){
      this.params.search = this.search_name;
      this.get_Statistic(this.params, true);
    },
    controlLoader(item){
      this.loadingtable = item;
    },
  },
  created() {
    this.get_Statistic(this.params, true);
  },
};
</script>
<style lang="">
</style>