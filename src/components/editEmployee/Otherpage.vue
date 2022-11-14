<template>
  <div class="grid card xl:p-4 lg:p-2 pt-4 px-2">
    <div class="col-12 p-0">
      <add-button
        @click="addItemSkill()"
        :title="'Tayorlov'"
        :text="false"
      ></add-button>
    </div>
    <div class="col-12 p-0">
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
              class="w-full"
              :class="{ 'p-invalid': qualification_Error && skill_submitted }"
            />
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
              :class="{ 'p-invalid': activity_Error && skill_submitted }"
              @change="changeActivity"
            >
              <template #value="slotProps">
                <div v-if="slotProps.value">
                  <div>{{ slotProps.value.name }}</div>
                </div>
                <span v-else>
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
              :class="{ 'p-invalid': direction_Error && skill_submitted }"
            >
              <template #value="slotProps">
                <div v-if="slotProps.value">
                  <div>{{ slotProps.value.name }}</div>
                </div>
                <span v-else>
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
              {{ direction ? direction.staff_name : "" }}
            </h6>
            <h6 class="my-0 text-yellow-400">
              {{ direction ? direction.comment_time : "" }}
            </h6>
          </div>
          <div class="col-6">
            <h6 class="mb-2 pl-2 text-500">Oxirgi malaka oshirgan yili</h6>
            <Calendar
              class="w-full"
              :manualInput="true"
              id="positionFirstDate"
              v-model="lastDate"
              view="year"
              dateFormat="yy"
              v-maska="'####'"
              placeholder="Sanani tanlang"
              :class="{ 'p-invalid': lastDate_Error && skill_submitted }"
            />
          </div>
          <div class="col-6">
            <h6 class="mb-2 pl-2 text-500">Rejadagi o'tish yili</h6>
            <Calendar
              class="w-full"
              :manualInput="true"
              v-model="planDate"
              view="year"
              dateFormat="yy"
              v-maska="'####'"
              placeholder="Sanani tanlang"
              :class="{ 'p-invalid': planDate_Error && skill_submitted }"
            />
          </div>
          <div class="col-12">
            <Checkbox
              inputId="binary"
              v-model="status_bedroom"
              :binary="true"
            />
            <span class="pl-2 text-500">Xodimni yoqotxonaa zaruriyati bor</span>
          </div>
          <div class="col-12" v-show="!status_bedroom">
            <h6 class="mb-2 pl-2 text-500">Toshkentda yashash manzili</h6>
            <Textarea
              class="w-full"
              placeholder="Yashash manzili"
              id="employeePhone"
              v-model="cadry_adress"
              :autoResize="true"
              rows="1"
            />
          </div>
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Izoh</h6>
            <Textarea
              class="w-full"
              placeholder="(Ixtiyoriy)"
              id="employeePhone"
              v-model="cadry_comment"
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
                @click="addAndEditItem()"
              />
            </div>
          </div>
        </template>
      </Dialog>
    </div>
  </div>
</template>
<script>
import AddButton from "../buttons/AddButton.vue";
import SkillService from "@/service/servises/SkillService";

export default {
  components: {
    AddButton,
  },
  data() {
    return {
      skill_submitted: false,
      totalCadries: 0,
      skillDialog: false,
      skillDialogtype: true,
      List_qualification: [],

      type_Qualifications: [],
      qualification: null,

      ActivityType: [],
      activity: null,

      DirectionList: [],
      direction: null,

      lastDate: null,
      planDate: null,
      status_bedroom: true,
      cadry_comment: null,
      cadry_adress: null,
    };
  },
  methods: {
    get_Cadry_qualification() {
      SkillService.get_Cadry_Qualification({ id: this.$route.params.id }).then(
        (res) => {
          console.log(res.data.cadries);
          this.List_qualification = res.data.cadries;
        }
      );
    },
    get_Qualificaton() {
      SkillService.get_Qualification().then((res) => {
        this.type_Qualifications = res.data.type_qualification;
        this.ActivityType = res.data.apparats;
      });
    },
    addItemSkill() {
      this.skill_submitted = false;
      this.skillDialogtype = true;
      this.resetSkillDialog();
      this.controlDialog(true);
    },
    editItemSkill() {
      this.skill_submitted = false;
      this.skillDialogtype = false;
    },

    addAndEditItem() {
      this.skill_submitted = true;
      if (
        !this.qualification_Error &&
        !this.activity_Error &&
        !this.direction_Error &&
        !this.lastDate_Error &&
        !this.planDate_Error
      ) {
        let data = {
          type_qualification: this.qualification.id,
          apparat_id: this.activity.id,
          training_direction_id: this.direction.id,
          date_1: this.lastDate,
          date_2: this.planDate,
          status_bedroom: !this.status_bedroom,
        };
        console.log(data);
      }
    },

    changeActivity() {
      this.DirectionList = this.activity.directions;
      this.direction = null;
    },
    resetSkillDialog() {
      this.qualification = null;
      this.activity = null;
      this.direction = null;
      this.lastDate = null;
      this.planDate = null;
      this.status_bedroom = true;
      this.cadry_comment = null;
      this.cadry_adress = null;
    },

    controlDialog(item) {
      this.skillDialog = item;
    },
  },
  created() {
    this.get_Cadry_qualification();
    this.get_Qualificaton();
  },
  computed: {
    qualification_Error() {
      if (!this.qualification) {
        return true;
      } else {
        return false;
      }
    },

    activity_Error() {
      if (!this.activity) {
        return true;
      } else {
        return false;
      }
    },

    direction_Error() {
      if (!this.direction) {
        return true;
      } else {
        return false;
      }
    },

    lastDate_Error() {
      if (!this.lastDate) {
        return true;
      } else {
        return false;
      }
    },

    planDate_Error() {
      if (!this.planDate) {
        return true;
      } else {
        return false;
      }
    },

    cadry_adress_Error() {
      if (!this.cadry_adress) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
<style lang="scss">
</style>