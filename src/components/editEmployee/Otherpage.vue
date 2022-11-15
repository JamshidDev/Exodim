<template>
  <div class="grid card xl:p-4 lg:p-2 p-2">
    <div class="col-12 p-2">
      <add-button
        @click="addItemSkill()"
        :title="'Tayorlov'"
        :text="false"
      ></add-button>
    </div>
    <div class="col-12">
      <DataTable
        :value="List_qualification"
        dataKey="id"
        :paginator="false"
        responsiveLayout="scroll"
        showGridlines
        class="pb-6 p-datatable-sm"
      >
        <Column style="min-width: 100px; width: 200px">
          <template #header>
            <div class="text-800 font-semibold">Ta'lim turi</div>
          </template>
          <template #body="slotProps">
            <div class="text-left cursor-pointer font-semibold">
              {{ slotProps.data.type_qualification.name }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 100px">
          <template #header>
            <div class="text-800 font-semibold">Faoliyat turi</div>
          </template>
          <template #body="slotProps">
            <div class="font-semibold flex justify-content-center">
              {{ slotProps.data.apparat.name }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 100px; width: 400px">
          <template #header>
            <div class="text-800 font-semibold">Ta'lim yo'nalishi</div>
          </template>
          <template #body="slotProps">
            <div class="font-semibold flex justify-content-center">
              {{ slotProps.data.training_direction.name }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 80px; width: 100px">
          <template #header>
            <div class="text-800 font-semibold">Status</div>
          </template>
          <template #body="slotProps">
            <div class="font-semibold flex justify-content-center">
              <Chip
                :label="slotProps.data.status.message"
                class="mr-2 mb-2 text-sm"
                :class="[slotProps.data.status.status && 'custom_chip']"
              />
            </div>
          </template>
        </Column>
        <Column style="min-width: 40px; width: 60px">
          <template #header>
            <div class="text-800 font-semibold">Ball</div>
          </template>
          <template #body="slotProps">
            <div class="font-semibold flex justify-content-center">
              {{ slotProps.data.ball ? slotProps.data.ball : "" }}
            </div>
          </template>
        </Column>

        <Column :exportable="false" style="min-width: 100px; width: 100px">
          <template #header>
            <div class="text-800 font-semibold">Amallar</div>
          </template>
          <template #body="slotProps">
            <div class="flex gap-2">
              <edit-button
                :editItem="slotProps.data"
                @editEvent="editItemSkill($event)"
              ></edit-button>
              <delete-button
                :deleteItem="slotProps.data.id"
                @deleteAcceptEvent="deleteItemSkill($event)"
              ></delete-button>
            </div>
          </template>
        </Column>
      </DataTable>
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
import formatter from "../../util/formatter";
import DeleteButton from "../buttons/DeleteButton.vue";
import EditButton from "../buttons/EditButton.vue";

export default {
  components: {
    AddButton,
    DeleteButton,
    EditButton,
  },
  data() {
    return {
      formatter,
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
    editItemSkill(event) {
      this.skill_submitted = false;
      this.skillDialogtype = false;
      this.controlDialog(true);
      this.qualification = event.type_qualification
      this.activity = event.apparat
      this.direction = event.training_direction
      this.planDate = new Date(`${event.data_qualification}-03-25`) 
      this.status_bedroom = event.status_bedroom==1? false : true;
      this.cadry_adress = event.address;
      this.cadry_comment =event.comment

      console.log(event);
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
        let cadry_id = this.$route.params.id;
        let data = {
          type_qualification: this.qualification.id,
          apparat_id: this.activity.id,
          training_direction_id: this.direction.id,
          date_1: this.formatter.textDateYear(this.lastDate),
          date_2: this.formatter.textDateYear(this.planDate),
          status_bedroom: !this.status_bedroom,
          address: this.cadry_adresss,
          comment: this.cadry_comment,
        };
        if (this.skillDialogtype) {
          SkillService.create_Qualification({ id: cadry_id, data }).then(
            (res) => {
              this.controlDialog(false);
            }
          );
        }
      }
    },

    deleteItemSkill(id) {
      SkillService.delete_Cadry_Qualification({ id })
        .then((res) => {
          console.log(res.data);
          this.get_Cadry_qualification();
        })
        .catch((error) => {
          console.log(error);
        });
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
        return this.skillDialogtype;
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
<style lang="scss" scoped>
.custom_chip {
  background: var(--green-100);
  color: var(--green-700);
  font-weight: 700 !important;
}
</style>