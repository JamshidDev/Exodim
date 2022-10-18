<template >
    <div class="grid">
      <div class="col-12" v-show="!loading">
        <div class="grid">
          <!-- Header statistic box -->
          <div class="col-12">
            <div class="grid">
              <!-- All users -->
              <div class="col-12 sm:col-6 md:col-4 lg:col-2 xl:col-2">
                <div class="card surface-0 shadow-1 p-4 relative">
                  <div class="absolute " @click="statisticShow(145)">
                    <i class="pi pi-eye text-2xl text-blue-400 cursor-pointer font-medium"></i>
                  </div>
                  <div class="w-full flex justify-content-center">
                    <i class="pi pi-slack text-5xl text-blue-600"></i>
                  </div>
                  <h2
                    class="
                      text-center
                      xl:text-6xl
                      lg:text-3xl
                      md:text-5xl
                      sm:text-5xl
                      text-6xl text-blue-400
                      font-bold
                      mb-0
                    "
                  >
                    {{allCadries }}
                  </h2>
                  <h6 class="text-center text-blue-400 mt-1">Barcha xodimlar</h6>
                </div>
              </div>
  
              <!-- All vakant -->
              <div class="col-12 sm:col-6 md:col-4 lg:col-2 xl:col-2">
                <div class="card surface-0 shadow-1 p-4 relative">
                  <div class="absolute " @click="statisticShow(145)">
                    <i class="pi pi-eye text-2xl text-blue-400 cursor-pointer font-medium"></i>
                  </div>
                  <div class="w-full flex justify-content-center">
                    <i class="pi pi-slack text-5xl text-blue-600"></i>
                  </div>
                  <h2
                    class="
                      text-center
                      xl:text-6xl
                      lg:text-3xl
                      md:text-5xl
                      sm:text-5xl
                      text-6xl text-green-400
                      font-bold
                      mb-0
                    "
                  >
                    {{ allVakant }}
                  </h2>
                  <h6 class="text-center text-green-400 mt-1">Bosh ish o'rinlari</h6>
                </div>
              </div>
  
              <!-- All sverx -->
              <div class="col-12 sm:col-6 md:col-4 lg:col-2 xl:col-2">
                <div class="card surface-0 shadow-1 p-4 relative">
                  <div class="absolute " @click="statisticShow(145)">
                    <i class="pi pi-eye text-2xl text-blue-400 cursor-pointer font-medium"></i>
                  </div>
                  <div class="w-full flex justify-content-center">
                    <i class="pi pi-slack text-5xl text-blue-600"></i>
                  </div>
                  <h2
                    class="
                      text-center
                      xl:text-6xl
                      lg:text-3xl
                      md:text-5xl
                      sm:text-5xl
                      text-6xl text-red-400
                      font-bold
                      mb-0
                    "
                  >
                    {{ allSverx }}
                  </h2>
                  <h6 class="text-center text-red-400 mt-1">Ortiqcha ish o'rinlari</h6>
                </div>
              </div>
  
              <!-- All position -->
              <div class="col-12 sm:col-6 md:col-4 lg:col-2 xl:col-2">
                <div class="card surface-0 shadow-1 p-4 relative">
                  <div class="absolute " @click="statisticShow(145)">
                    <i class="pi pi-eye text-2xl text-blue-400 cursor-pointer font-medium"></i>
                  </div>
                  <div class="w-full flex justify-content-center">
                    <i class="pi pi-slack text-5xl text-blue-600"></i>
                  </div>
                  <h2
                    class="
                      text-center
                      xl:text-6xl
                      lg:text-3xl
                      md:text-5xl
                      sm:text-5xl
                      text-6xl text-600
                      font-bold
                      mb-0
                    "
                  >
                    {{ allPlan }}
                  </h2>
                  <h6 class="text-center text-500 mt-1">Shtat birligi</h6>
                </div>
              </div>
  
              <!-- All kasanachi -->
              <div class="col-12 sm:col-6 md:col-4 lg:col-2 xl:col-2">
                <div class="card surface-0 shadow-1 p-4 relative">
                  <div class="absolute " @click="statisticShow(145)">
                    <i class="pi pi-eye text-2xl text-blue-400 cursor-pointer font-medium"></i>
                  </div>
                  <div class="w-full flex justify-content-center">
                    <i class="pi pi-slack text-5xl text-blue-600"></i>
                  </div>
                  <h2
                    class="
                      text-center
                      xl:text-6xl
                      lg:text-3xl
                      md:text-5xl
                      sm:text-5xl
                      text-6xl text-600
                      font-bold
                      mb-0
                    "
                  >
                    {{ allContract}}
                  </h2>
                  <h6 class="text-center text-500 mt-1">Kasanachilar</h6>
                </div>
              </div>
  
              <!-- All notebook -->
              <div class="col-12 sm:col-6 md:col-4 lg:col-2 xl:col-2">
                <div class="card surface-0 shadow-1 p-4 relative">
                  <div class="absolute " @click="statisticShow(145)">
                    <i class="pi pi-eye text-2xl text-blue-400 cursor-pointer font-medium"></i>
                  </div>
                  <div class="w-full flex justify-content-center">
                    <i class="pi pi-slack text-5xl text-blue-600"></i>
                  </div>
                  <h2
                    class="
                      text-center
                      xl:text-6xl
                      lg:text-3xl
                      md:text-5xl
                      sm:text-5xl
                      text-6xl text-600
                      font-bold
                      mb-0
                    "
                  >
                    {{allIronNote }}
                  </h2>
                  <h6 class="text-center text-500 mt-1">Temir daftar</h6>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Second section information -->
          <div class="col-12 md:col-6 lg:col-4 xl:col-4">
            <div class="card surface-0 shadow-1">
              <div class="card p-4 pb-6">
                <Divider align="center" type="dashed">
                  <div class="font-medium text-500">Diagrammalar orqali</div>
                </Divider>
                <div class="grid">
                  <div class="col-12 xl:col-6">
                    <div class="flex justify-content-center">
                      <Knob
                        size="180"
                        v-model="allManChart"
                        valueTemplate="{value}%"
                        readonly
                        valueColor="MediumTurquoise"
                        rangeColor="SlateGray"
                        textColor="MediumTurquoise"
                      />
                    </div>
                    <h5 class="text-center my-0">{{ allManCadries }}</h5>
                    <h6 class="text-center mt-0">Erkaklar soni</h6>
                  </div>
                  <div class="col-12 xl:col-6">
                    <div class="flex justify-content-center">
                      <Knob
                        size="180"
                        v-model="allWomanChart"
                        valueTemplate="{value}%"
                        readonly
                        valueColor="MediumTurquoise"
                        rangeColor="SlateGray"
                        textColor="MediumTurquoise"
                      />
                    </div>
                    <h5 class="text-center my-0">{{ allWomanCadries }}</h5>
                    <h6 class="text-center mt-0">Ayollar soni</h6>
                  </div>
                  <div class="col-12 xl:col-6">
                    <div class="flex justify-content-center">
                      <Knob
                        size="180"
                        v-model="pensionsManChart"
                        valueTemplate="{value}%"
                        readonly
                        valueColor="MediumTurquoise"
                        rangeColor="SlateGray"
                        textColor="MediumTurquoise"
                      />
                    </div>
                    <h5 class="text-center my-0">{{ pensionsMan }}</h5>
                    <h6 class="text-center mt-0">Nafaqa yoshidagi erkaklar</h6>
                  </div>
                  <div class="col-12 xl:col-6">
                    <div class="flex justify-content-center">
                      <Knob
                        size="180"
                        v-model="pensionWomanChart"
                        valueTemplate="{value}%"
                        readonly
                        valueColor="MediumTurquoise"
                        rangeColor="SlateGray"
                        textColor="MediumTurquoise"
                      />
                    </div>
                    <h5 class="text-center my-0">{{ pensionWoman }}</h5>
                    <h6 class="text-center mt-0">Nafaqa yoshidagi ayollar</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Third section information -->
          <div class="col-12 md:col-6 lg:col-4 xl:col-4">
            <div class="card surface-0 shadow-1">
              <div class="card p-4 pb-6">
                <Divider align="center" type="dashed">
                  <div class="font-medium text-500">Diagrammalar orqali</div>
                </Divider>
                <div class="grid">
                  <div class="col-12 xl:col-6">
                    <div class="flex justify-content-center">
                      <Knob
                        size="180"
                        v-model="allCadry30Chart"
                        valueTemplate="{value}%"
                        readonly
                        valueColor="MediumTurquoise"
                        rangeColor="SlateGray"
                        textColor="MediumTurquoise"
                      />
                    </div>
                    <h5 class="text-center my-0">{{ allCadry30 }}</h5>
                    <h6 class="text-center mt-0">30 yoshdan kichiklar</h6>
                  </div>
                  <div class="col-12 xl:col-6">
                    <div class="flex justify-content-center">
                      <Knob
                        size="180"
                        v-model="allCadry3045Chart"
                        valueTemplate="{value}%"
                        readonly
                        valueColor="MediumTurquoise"
                        rangeColor="SlateGray"
                        textColor="MediumTurquoise"
                      />
                    </div>
                    <h5 class="text-center my-0">{{ allCadry3045 }}</h5>
                    <h6 class="text-center mt-0">30 - 45 yoshlilar</h6>
                  </div>
                  <div class="col-12 xl:col-6">
                    <div class="flex justify-content-center">
                      <Knob
                        size="180"
                        v-model="allCadry45Chart"
                        valueTemplate="{value}%"
                        readonly
                        valueColor="MediumTurquoise"
                        rangeColor="SlateGray"
                        textColor="MediumTurquoise"
                      />
                    </div>
                    <h5 class="text-center my-0">{{ allCadry45 }}</h5>
                    <h6 class="text-center mt-0">45 yoshdan kattalar</h6>
                  </div>
                  <div class="col-12 xl:col-6">
                    <div class="flex justify-content-center">
                      <Knob
                        size="180"
                        v-model="alleducation_oliyChart"
                        valueTemplate="{value}%"
                        readonly
                        valueColor="MediumTurquoise"
                        rangeColor="SlateGray"
                        textColor="MediumTurquoise"
                      />
                    </div>
                    <h5 class="text-center my-0">{{ alleducation_oliy }}</h5>
                    <h6 class="text-center mt-0">Oliy ma'lumotlilar</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- First section information -->
          <div class="col-12 md:col-12 lg:col-4 xl:col-4">
            <div class="card surface-0 shadow-1">
              <div class="card p-4 pb-0">
                <Divider align="center" type="dashed">
                  <div class="font-medium text-blue-600">Bugun</div>
                </Divider>
                <div
                  class="
                    flex
                    justify-content-between
                    border-bottom-1 border-300
                    pb-2
                    mb-2
                  "
                >
                  <div class="font-semibold text-base pl-1  hover:text-blue-500 cursor-pointer" @click="statisticShow(102)">
                    Ishga qabul qilinganlar
                  </div>
                  <div class="text-xl text-600 font-semibold pr-1">
                    <span class="text-green-500">{{ allNewCadries }}</span
                    >/{{ allCadries }}
                  </div>
                </div>
                <div
                  class="
                    flex
                    justify-content-between
                    border-bottom-1 border-300
                    pb-2
                    mb-2
                  "
                >
                  <div class="font-semibold text-base pl-1  hover:text-blue-500 cursor-pointer" @click="statisticShow(102)">
                    Faoliyati yakunlangan xodimlar
                  </div>
                  <div class="text-xl text-600 font-semibold pr-1">
                    <span class="text-red-500">{{ allDeleteCadries }}</span
                    >/{{ allCadries }}
                  </div>
                </div>
                <div
                  class="
                    flex
                    justify-content-between
                    border-bottom-1 border-300
                    pb-2
                    mb-2
                  "
                >
                  <div class="font-semibold text-base pl-1  hover:text-blue-500 cursor-pointer" @click="statisticShow(102)">Tug'ulgan kunlar</div>
                  <div class="text-xl text-600 font-semibold pr-1">
                    <span class="text-yellow-500">{{ allBirthdayCadries }}</span
                    >/{{ allCadries }}
                  </div>
                </div>
              </div>
  
              <div class="card p-4 py-0">
                <Divider align="center" type="dashed">
                  <div class="font-medium text-600">Umumiy</div>
                </Divider>
                <div
                  class="
                    flex
                    justify-content-between
                    border-bottom-1 border-300
                    pb-2
                    mb-2
                  "
                >
                  <div
                    class="
                      font-semibold
                      text-700
                      hover:text-blue-500
                      cursor-pointer
                      text-base
                      pl-1
                    "
                    @click="statisticShow(102)"
                  >
                    Tibbiy ko'rik (tugagan)
                  </div>
                  <div class="text-xl text-600 font-semibold pr-1">
                    <span class="text-yellow-500">{{
                      allCadries - medical_examinations
                    }}</span
                    >/{{ allCadries }}
                  </div>
                </div>
  
                <div
                  class="
                    flex
                    justify-content-between
                    border-bottom-1 border-300
                    pb-2
                    mb-2
                  "
                >
                  <div
                    class="
                      font-semibold
                      text-600
                      hover:text-blue-500
                      cursor-pointer
                      text-base
                      pl-1
                    "
                    @click="statisticShow(102)"
                  >
                    Tibbiy ko'rik (kiritilmaganlar)
                  </div>
                  <div class="text-xl text-600 font-semibold pr-1">
                    <span class="text-red-500">{{medical_not_examinations}}</span
                    >/{{ allCadries }}
                  </div>
                </div>
  
                <div
                  class="
                    flex
                    justify-content-between
                    border-bottom-1 border-300
                    pb-2
                    mb-2
                  "
                >
                  <div
                    class="
                      font-semibold
                      text-600
                      hover:text-blue-500
                      cursor-pointer
                      text-base
                      pl-1
                    "
                    @click="statisticShow(102)"
                  >
                    Mehnat ta'tilidagi xodimlar
                  </div>
                  <div class="text-xl text-600 font-semibold pr-1">
                    <span class="text-yellow-500">{{ vacations }}</span
                    >/{{ allCadries }}
                  </div>
                </div>
                <div
                  class="
                    flex
                    justify-content-between
                    border-bottom-1 border-300
                    pb-2
                    mb-2
                  "
                >
                  <div
                    class="
                      font-semibold
                      text-600
                      hover:text-blue-500
                      cursor-pointer
                      text-base
                      pl-1
                    "
                    @click="statisticShow(102)"
                  >
                    Bola parvarishidagi xodimlar
                  </div>
                  <div class="text-xl text-600 font-semibold pr-1">
                    <span class="text-yellow-500">{{ vacations_Dec }}</span
                    >/{{ allCadries }}
                  </div>
                </div>
                <div
                  class="
                    flex
                    justify-content-between
                    border-bottom-1 border-300
                    pb-2
                    mb-2
                  "
                >
                  <div
                    class="
                      font-semibold
                      text-600
                      hover:text-blue-500
                      cursor-pointer
                      text-base
                      pl-1
                    "
                    @click="statisticShow(102)"
                  >
                    Yaqin qarindoshlari (kiritilmaganlar) 
                  </div>
                  <div class="text-xl text-600 font-semibold pr-1">
                    <span class="text-red-500">{{relativesCount}}</span>/{{ allCadries }}
                  </div>
                </div>
                <div
                  class="
                    flex
                    justify-content-between
                    border-bottom-1 border-300
                    pb-2
                    mb-2
                  "
                >
                  <div
                    class="
                      font-semibold
                      text-600
                      hover:text-blue-500
                      cursor-pointer
                      text-base
                      pl-1
                    "
                    @click="statisticShow(102)"
                  >
                    Mehnat faoliyati (kiritilmaganlar)
                  </div>
                  <div class="text-xl text-600 font-semibold pr-1">
                    <span class="text-yellow-500">{{careersCount}}</span>/{{ allCadries }}
                  </div>
                </div>
                <div
                  class="
                    flex
                    justify-content-between
                    border-bottom-1 border-300
                    pb-2
                    mb-2
                  "
                >
                  <div
                    class="
                      font-semibold
                      text-600
                      hover:text-blue-500
                      cursor-pointer
                      text-base
                      pl-1
                    "
                    @click="statisticShow(102)"
                  >
                    Ilmiy darajali xodimlar
                  </div>
                  <div class="text-xl text-600 font-semibold pr-1">
                    <span class="text-yellow-500">00</span>/{{ allCadries }}
                  </div>
                </div>
                <div
                  class="
                    flex
                    justify-content-between
                    border-bottom-1 border-300
                    pb-2
                    mb-2
                  "
                >
                  <div
                    class="
                      font-semibold
                      text-600
                      hover:text-blue-500
                      cursor-pointer
                      text-base
                      pl-1
                    "
                    @click="statisticShow(102)"
                  >
                  Ilmiy unvonli xodimlar
                  </div>
                  <div class="text-xl text-600 font-semibold pr-1">
                    <span class="text-yellow-500">00</span>/{{ allCadries }}
                  </div>
                </div>
                <div
                  class="
                    flex
                    justify-content-between
                    border-bottom-1 border-300
                    pb-2
                    mb-2
                  "
                >
                  <div
                    class="
                      font-semibold
                      text-600
                      hover:text-blue-500
                      cursor-pointer
                      text-base
                      pl-1
                    "
                    @click="statisticShow(102)"
                  >
                    Rag'batlantirilganlar
                  </div>
                  <div class="text-xl text-600 font-semibold pr-1">
                    <span class="text-yellow-500">00</span>/{{ allCadries }}
                  </div>
                </div>
                <div
                  class="
                    flex
                    justify-content-between
                    border-bottom-1 border-300
                    pb-2
                    mb-2
                  "
                >
                  <div
                    class="
                      font-semibold
                      text-600
                      hover:text-blue-500
                      cursor-pointer
                      text-base
                      pl-1
                    "
                    @click="statisticShow(102)"
                  >
                    Qora ro'yhatdagilar
                  </div>
                  <div class="text-xl text-600 font-semibold pr-1">
                    <span class="text-red-500">{{ BlackList }}</span
                    >/{{ allCadries }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12" v-show="loading">
        <statistic-skeleton></statistic-skeleton>
      </div>
    </div>
  </template>
  <script>
  import StatisticSkeleton from "../components/loaders/StatisticSkeleton.vue";
  import organizationsService from "../service/servises/organizationsService";
  import PartStatisticService from '@/service/servises/PartStatisticService'
  import globalStatistic from "@/service/servises/globalStatistic";
  export default {
    components: { StatisticSkeleton },
  
    data() {
      return {
        loading: false,

        allCadries: 0,
        allVakant: 0,
        allSverx: 0,
        allPlan: 0,
        allContract: 0,
        allIronNote: 0,
  
        allManCadries: 0,
        allWomanCadries: 0,
        pensionsMan: 0,
        pensionWoman: 0,
  
        allNewCadries: 0,
        allDeleteCadries: 0,
        allBirthdayCadries: 0,
  
        allCadry30: 0,
        allCadry3045: 0,
        allCadry45: 0,
        alleducation_oliy: 0,
        medical_examinations: 0,
        medical_not_examinations:0,
        vacations: 0,
        vacations_Dec: 0,
        BlackList: 0,

        relativesCount:0,
        careersCount:0,
  
        // Chart Details
        allManChart: 0,
        allWomanChart: 0,
        pensionsManChart: 0,
        pensionWomanChart: 0,
        allCadry30Chart: 0,
        allCadry3045Chart: 0,
        allCadry45Chart: 0,
        alleducation_oliyChart: 0,
  
      };
    },
    methods: {
      controlLoader(item) {
        this.loading = item;
      },
  
      get_PartStatistic(){
        this.controlLoader(true);
        PartStatisticService.get_PartStatistic().then((res)=>{
            console.log(res.data);
            this.allCadries = res.data.all_cadries_count;
            this.allVakant = res.data.vakant;
            this.allSverx = res.data.sverx;
            this.allPlan = res.data.plan;
            this.allContract = res.data.contract_cadries;
            this.allIronNote = 0;
            this.allManCadries = res.data.all_man_cadries;
            this.allWomanCadries = res.data.all_woman_cadries;
            this.pensionWoman = res.data.retired_Woman;
            this.pensionsMan = res.data.retired_Man;
            this.allNewCadries = res.data.newcadries;
            this.allDeleteCadries = res.data.delete_cadries;
            this.allBirthdayCadries = res.data.birthdays;
            this.allCadry30 = res.data.cadry30;
            this.allCadry3045 = res.data.cadry45-res.data.cadry30;
            this.allCadry45 = res.data.all_cadries_count - res.data.cadry45 
            
            this.alleducation_oliy = res.data.highly_special_educations;
            this.medical_examinations = res.data.meds;
            this.medical_not_examinations = res.data.mednotCount
            this.vacations = res.data.vacations;
            this.vacations_Dec = res.data.vacations_decret;
            this.BlackList = res.data.black_list_cadries;
            this.relativesCount = res.data.relativesCount;
            this.careersCount = res.data.careersCount;
  
            this.allManChart = Math.floor(
              (res.data.all_man_cadries / res.data.all_cadries_count) * 100
            );
            this.allWomanChart = 100 - this.allManChart;
            this.pensionsManChart = Math.floor(
              (res.data.retired_Man / res.data.all_cadries_count) * 100
            );
            this.pensionWomanChart = Math.floor(
              (res.data.retired_Woman / res.data.all_cadries_count) * 100
            );
            this.allCadry30Chart = Math.floor(
              (res.data.cadry30 / res.data.all_cadries_count) * 100
            );
            this.allCadry3045Chart =  Math.floor(
              (this.allCadry3045/ res.data.all_cadries_count) * 100
            );
            this.allCadry45Chart = Math.floor(
              (res.data.cadry45 / res.data.all_cadries_count) * 100
            );
            this.alleducation_oliyChart = Math.floor(
              (res.data.highly_special_educations / res.data.all_cadries_count) * 100
            );
  
            this.controlLoader(false);
        })
      },
  

 

  
  
  

  
    },
    created() {
      this.get_PartStatistic()
    },
  };
  </script>
  <style lang="scss">
  </style>