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
            <span class="text-base text-primary pl-2"> (0)</span>
          </span>
        </div>
      </div>
    </div>
    <div class="col-12 py-0">
      <div class="grid">
        <div class="col-12 xl:col-6">
          <InputText
            type="text"
            v-model="searchCadryName"
            placeholder="Ism orqali qidiruv"
            class="p-inputtext-sm"
            @keyup.enter="searchByName()"
          />
        </div>
        <div class="col-12 xl:col-6 flex justify-content-end">
          <Button
            icon="pi pi-plus"
            label="Qo'shish"
            class="p-button-info p-button-sm"
            @click="addItemSkill()"
            v-tooltip.bottom="`Tayorlovga yuborish`"
          ></Button>
        </div>
      </div>
    </div>
    <div class="col-12 pt-0" v-show="!loadingtable">
      <DataTable
        ref="dt"
        :value="qualificatonCadry"
        dataKey="id"
        responsiveLayout="scroll"
        showGridlines
        class="p-datatable-sm"
        v-show="totalCadries"
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
        <Column style="min-width: 120px; width: 180px">
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
          <template #body>
            <div class="flex w-full align-items-center gap-2"></div>
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
      <no-data-component v-show="!totalCadries"></no-data-component>
    </div>

    <div class="col-12">
      <Dialog
        v-model:visible="skillDialog"
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
            Tayyorlovga yuborish
          </h6>
        </template>
        <div class="grid pt-2">
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Ta'lim turi</h6>
            <Dropdown
              id="bornRegion"
              v-model="qualification"
              :options="type_Qualifications"
              optionLabel="name"
              placeholder="Tanlang"
              class="w-full font-semibold"
              @change="changeType"
            />
          </div>
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Xodimni tanlang</h6>
            <Dropdown
              id="positionPart"
              v-model="cadry"
              :options="cadryList"
              optionLabel="fullname"
              :filter="true"
              placeholder="Tanlang"
              class="w-full"
            >
              <template #value="slotProps">
                <div class="font-semibold" v-if="slotProps.value">
                  <div>{{ slotProps.value.fullname }}</div>
                </div>
                <span v-else class="font-semibold">
                  {{ slotProps.placeholder }}
                </span>
              </template>
              <template #option="slotProps">
                <div class="country-item">
                  <div>{{ slotProps.option.fullname }}</div>
                </div>
              </template>
            </Dropdown>
          </div>
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Faoliyat turi</h6>
            <Dropdown
              id="positionPart"
              v-model="activity"
              :options="ActivityType"
              optionLabel="name"
              :filter="true"
              placeholder="Tanlang"
              class="w-full"
              @change="changeActivity"
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
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Ta'lim yo'nalishi</h6>
            <Dropdown
              id="positionPart"
              v-model="direction"
              :options="DirectionList"
              optionLabel="name"
              :filter="true"
              placeholder="Tanlang"
              class="w-full"
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
          <div class="col-12" v-show="direction">
              <h6 class="my-0 text-yellow-400 text-sm font-medium">
               {{direction? direction.staff_name : ''}}
              </h6>
              <h6 class="my-0 text-yellow-400">
                {{direction? direction.comment_time : ''}}
              </h6>
          </div>
          <div class="col-6">
            <h6 class="mb-2 pl-2 text-500">Oxirgi malaka oshirgan sanasi</h6>
            <Calendar
              class="w-full font-semibold"
              :manualInput="true"
              id="positionFirstDate"
              v-model="lastDate"
              view="year" dateFormat="yy"
              v-maska="'####'"
              placeholder="Sanani tanlang"
              :class="{ 'p-invalid': cadry_Date1 && med_submitted }"
            />
          </div>
          <div class="col-6">
            <h6 class="mb-2 pl-2 text-500">Rejadagi o'tish sanasi</h6>
            <Calendar
              class="w-full font-semibold"
              :manualInput="true"
              v-model="planDate"
              view="year" dateFormat="yy"
              v-maska="'####'"
              placeholder="Sanani tanlang"
              :class="{ 'p-invalid': cadry_Date2 && med_submitted }"
            />
          </div>
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Izoh</h6>
            <Textarea
              class="w-full font-semibold"
              placeholder="(Ixtiyoriy)"
              id="employeePhone"
              v-model="med_comment"
              :autoResize="true"
              rows="1"
            />
          </div>
        </div>

        <template #footer>
          <div class="col-12 pt-2">
            <div class="flex justify-content-end">
              <Button
                label="Saqlash"
                class="p-button-secondary p-button-sm"
                @click="AddMed()"
              />
            </div>
          </div>
        </template>
      </Dialog>
    </div>
  </div>
</template>
<script>
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb.vue";
import SkillService from "@/service/servises/SkillService";
import NoDataComponent from '@/components/EmptyComponent/NoDataComponent'
export default {
  components: {
    BreadCrumb,
    NoDataComponent,
  },
  data() {
    return {
      cadryList: [],
      totalCadries: 0,
      skillDialog: false,
      type_Qualifications: [],
      qualification: null,
      search_params: {
        page: 1,
        per_page: 1000,
        search: 'a',
      },
      cadryList:[],
      cadry:null,
      List:[],
      ActivityType:[],
      activity:null,
      DirectionList:[],
      direction:null,
      lastDate:null,
      planDate:null,

      qualificatonCadry:[],
    };
  },

  methods: {
    get_Qualificaton() {
      SkillService.get_Qualification().then((res) => {
        console.log(res.data);
        this.type_Qualifications = res.data.type_qualification;
        this.List = res.data.apparats
      });
    },

    searchCadry(params){
      SkillService.search_Cadry(params).then((res)=>{
        console.log(res.data);
        this.cadryList = res.data.data;
       
      })
    },
    addItemSkill() {
      this.controlDialog(true);
    },
    changeType(){
     this.ActivityType = this.List.filter((item)=>item.status == this.qualification.id)
    },
    changeActivity(){
      console.log(this.activity);
      this.DirectionList = this.activity.directions;
      this.direction = null;
    },
    controlDialog(item) {
      this.skillDialog = item;
    },
  },
  created() {
    this.get_Qualificaton();
    this.searchCadry(this.search_params)
  },
};
</script>
<style lang="">
</style>