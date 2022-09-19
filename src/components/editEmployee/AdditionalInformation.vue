<template >
  <div class="grid card py-4" v-if="barLoader">
    <div class="col-12">
      <progress-bar-loader></progress-bar-loader>
    </div>
  </div>

  <div class="grid card py-4" v-if="!barLoader">
    <!--Punishment table -->
    <div class="col-12 py-1 px-0">
      <DataTable
        :value="punishmentList"
        dataKey="id"
        :paginator="false"
        responsiveLayout="scroll"
        showGridlines
        class="pb-6 p-datatable-sm"
      >
        <template #header>
          <div class="grid">
            <div class="col-6">
              <h5
                class="text-base md:m-0 p-as-md-center uppercase text-blue-600"
              >
                Intizomiy jazo
              </h5>
            </div>
            <div class="col-6 flex justify-content-end align-items-center">
              <Button
                icon="pi pi-plus-circle"
                class="p-button-info p-button-sm"
                label="Qo'shish"
                v-tooltip.bottom="`Bilim yurtini qo'shish`"
                @click="addItemPunishment()"
              />
            </div>
          </div>
        </template>
        <Column>
          <template #header>
            <div class="text-800 font-semibold">Prikaz nomer</div>
          </template>
          <template #body="slotProps">
            <div class="text-center cursor-pointer font-semibold">
              {{ slotProps.data.command_number }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 100px; width: 300px">
          <template #header>
            <div class="text-800 font-semibold">Sanasi</div>
          </template>
          <template #body="slotProps">
            <div class="text-center cursor-pointer font-semibold">
              {{ formatter.textDateFormat(slotProps.data.date_punishment) }}
            </div>
          </template>
        </Column>

        <Column style="min-width: 200px; width: 300px">
          <template #header>
            <div class="text-800 font-semibold">Jazo turi</div>
          </template>
          <template #body="slotProps">
            <div class="font-semibold">
              {{ slotProps.data.type_punishment }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 200px; width: 300px">
          <template #header>
            <div class="text-800 font-semibold">Jazo sababi</div>
          </template>
          <template #body="slotProps">
            <div class="font-semibold">
              {{ slotProps.data.reason_punishment }}
            </div>
          </template>
        </Column>
        <Column :exportable="false" style="min-width: 100px; width: 150px">
          <template #header>
            <div class="text-800 font-semibold">Amallar</div>
          </template>
          <template #body="slotProps">
            <div class="flex gap-2">
              <edit-button
                :editItem="slotProps.data"
                @editEvent="editItemPunishment($event)"
              ></edit-button>
              <delete-button
                :deleteItem="slotProps.data.id"
                @deleteAcceptEvent="deleteItemPunishment($event)"
              ></delete-button>
            </div>
          </template>
        </Column>
      </DataTable>
    </div>
    <!-- Incentive table -->
    <div class="col-12 py-1 px-0">
      <DataTable
        :value="incentiveList"
        dataKey="id"
        :paginator="false"
        responsiveLayout="scroll"
        showGridlines
        class="pb-6 p-datatable-sm"
      >
        <template #header>
          <div class="grid">
            <div class="col-6">
              <h5
                class="text-base md:m-0 p-as-md-center uppercase text-blue-600"
              >
                Rag'batlantirish
              </h5>
            </div>
            <div class="col-6 flex justify-content-end align-items-center">
              <Button
                icon="pi pi-plus-circle"
                class="p-button-info p-button-sm"
                label="Qo'shish"
                v-tooltip.bottom="`Bilim yurtini qo'shish`"
                @click="addItemIncentive()"
              />
            </div>
          </div>
        </template>
        <Column>
          <template #header>
            <div class="text-800 font-semibold">Kim tomonidan</div>
          </template>
          <template #body="slotProps">
            <div class="text-left cursor-pointer font-semibold">
              {{ slotProps.data.by_whom }}
            </div>
          </template>
        </Column>

        <Column style="min-width: 200px; width: 300px">
          <template #header>
            <div class="text-800 font-semibold">Buyruq raqami</div>
          </template>
          <template #body="slotProps">
            <div class="font-semibold">
              {{ slotProps.data.command_number }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 100px; width: 300px">
          <template #header>
            <div class="text-800 font-semibold">Sanasi</div>
          </template>
          <template #body="slotProps">
            <div class="text-center cursor-pointer font-semibold">
              {{ formatter.textDateFormat(slotProps.data.incentive_date) }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 200px; width: 300px">
          <template #header>
            <div class="text-800 font-semibold">Rag'bat turi</div>
          </template>
          <template #body="slotProps">
            <div class="font-semibold">
              {{ slotProps.data.type_incentive }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 200px; width: 300px">
          <template #header>
            <div class="text-800 font-semibold">Rag'bat sababi</div>
          </template>
          <template #body="slotProps">
            <div class="font-semibold">
              {{ slotProps.data.reason_incentive }}
            </div>
          </template>
        </Column>
        <Column :exportable="false" style="min-width: 100px; width: 150px">
          <template #header>
            <div class="text-800 font-semibold">Amallar</div>
          </template>
          <template #body="slotProps">
            <div class="flex gap-2">
              <edit-button
                :editItem="slotProps.data"
                @editEvent="editItemIncentive($event)"
              ></edit-button>
              <delete-button
                :deleteItem="slotProps.data.id"
                @deleteAcceptEvent="delete_Incentive($event)"
              ></delete-button>
            </div>
          </template>
        </Column>
      </DataTable>
    </div>

    <!-- Stuff table -->
    <div class="col-12 py-1 px-0">
      <DataTable
        :value="stuffList"
        dataKey="id"
        :paginator="false"
        responsiveLayout="scroll"
        showGridlines
        class="pb-6 p-datatable-sm"
      >
        <template #header>
          <div class="grid">
            <div class="col-6">
              <h5
                class="text-base md:m-0 p-as-md-center uppercase text-blue-600"
              >
                Lavozim yo'riqnomasi
              </h5>
            </div>
            <div class="col-6 flex justify-content-end align-items-center">
              <Button
                icon="pi pi-plus-circle"
                class="p-button-info p-button-sm"
                label="Qo'shish"
                v-tooltip.bottom="`Bilim yurtini qo'shish`"
                @click="addItemStuff()"
              />
            </div>
          </div>
        </template>
        <Column>
          <template #header>
            <div class="text-800 font-semibold">Izoh yoki nom</div>
          </template>
          <template #body="slotProps">
            <div class="text-left cursor-pointer font-semibold">
              {{ slotProps.data.comment }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 50px; width: 300px">
          <template #header>
            <div class="text-800 font-semibold">Ko'rish</div>
          </template>
          <template #body="slotProps">
            <div class="font-semibold flex justify-content-center">
              <view-button :file_Link="slotProps.data.file_staff"></view-button>
            </div>
          </template>
        </Column>

        <Column :exportable="false" style="min-width: 100px; width: 150px">
          <template #header>
            <div class="text-800 font-semibold">Amallar</div>
          </template>
          <template #body="slotProps">
            <div class="flex gap-2">
              <edit-button
                :editItem="slotProps.data"
                @editEvent="editItemStuff($event)"
              ></edit-button>
              <delete-button
                :deleteItem="slotProps.data.id"
                @deleteAcceptEvent="deleteStuff($event)"
              ></delete-button>
            </div>
          </template>
        </Column>
      </DataTable>
    </div>

    <!-- Punishment Dialog -->
    <div class="col-12">
      <Dialog
        v-model:visible="punishmentDialog"
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
            {{
              punishmentDialogType
                ? "Ma'lumot qo'shish"
                : "Ma'lumotni tahrirlash"
            }}
          </h6>
        </template>
        <div class="grid pt-2">
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Prikaz Nomer</h6>
            <InputText
              type="text"
              class="w-full font-semibold"
              placeholder="Kiriting"
              id="employeePhone"
              v-model="punishment_number"
            />
          </div>
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Sanasi</h6>
            <Calendar
              class="w-full font-semibold"
              :manualInput="true"
              id="passportDate"
              v-model="punishment_date"
              v-maska="'##/##/####'"
              placeholder="Sanani tanlang"
              dateFormat="dd/mm/yy"
              :showButtonBar="true"
            />
          </div>
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Jazo turi</h6>
            <InputText
              type="text"
              class="w-full font-semibold"
              placeholder="Kiriting"
              id="employeePhone"
              v-model="punishment_type"
            />
          </div>

          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Jazo sababi</h6>
            <Textarea
              class="w-full font-semibold"
              placeholder="Kiriting"
              v-model="punishment_reason"
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
                @click="addAndEditPunishment()"
              />
            </div>
          </div>
        </template>
      </Dialog>
    </div>
    <!-- Incentive Dialog -->
    <div class="col-12">
      <Dialog
        v-model:visible="incentiveDialog"
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
            {{
              incentiveDialogType
                ? "Ma'lumot qo'shish"
                : "Ma'lumotni tahrirlash"
            }}
          </h6>
        </template>
        <div class="grid pt-2">
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Kim tomonidan</h6>
            <InputText
              type="text"
              class="w-full font-semibold"
              placeholder="Kiriting"
              id="employeePhone"
              v-model="incentive_byWhom"
            />
          </div>

          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Buyruq raqami</h6>
            <InputText
              type="text"
              class="w-full font-semibold"
              placeholder="Kiriting"
              id="employeePhone"
              v-model="incentive_command_number"
            />
          </div>

          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Sanasi</h6>
            <Calendar
              class="w-full font-semibold"
              :manualInput="true"
              id="passportDate"
              v-model="incentive_incentive_date"
              v-maska="'##/##/####'"
              placeholder="Sanani tanlang"
              dateFormat="dd/mm/yy"
              :showButtonBar="true"
            />
          </div>

          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Rag'bat turi</h6>
            <InputText
              type="text"
              class="w-full font-semibold"
              placeholder="Kiriting"
              id="employeePhone"
              v-model="incentive_type_incentive"
            />
          </div>

          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Rag'bat sababi</h6>
            <Textarea
              class="w-full font-semibold"
              placeholder="Kiriting"
              v-model="incentive_reason_incentive"
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
                @click="addAndEditIncenstive()"
              />
            </div>
          </div>
        </template>
      </Dialog>
    </div>
    <!-- Stuff Dialog -->
    <div class="col-12">
      <Dialog
        v-model:visible="stuffDialog"
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
            {{
              stuffDialogType
                ? "Ma'lumot qo'shish"
                : "Ma'lumotni tahrirlash"
            }}
          </h6>
        </template>
        <div class="grid pt-2">
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Izoh</h6>
            <Textarea
              class="w-full font-semibold"
              placeholder="Kiriting"
              v-model="stuff_Comment"
              :autoResize="true"
              rows="1"
            />
          </div>
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Fayl (.Pdf)</h6>
            <Button
                label="Fayl yuklash"
                icon="pi pi-cloud-upload"
                class="p-button-info p-button-sm w-full"
                @click="$refs.file.click()"
              />
              <input
          v-show="false"
          type="file"
          ref="file"
          @change="uploadFile($event)"
          accept="application/pdf"
        />
        <h6 class="text-sm my-1 text-green-600" v-if="stuff_fileName">{{stuff_fileName}}</h6>
          </div>
        </div>

        <template #footer>
          <div class="col-12 pt-2">
            <div class="flex justify-content-end">
              <Button
                label="Saqlash"
                class="p-button-secondary p-button-sm"
                @click="addAndEditStuff()"
              />
            </div>
          </div>
        </template>
      </Dialog>
    </div>
  </div>
</template>
<script>
import DeleteButton from "../buttons/DeleteButton.vue";
import EditButton from "../buttons/EditButton.vue";
import ViewButton from "@/components/buttons/ViewButton.vue";
import formatter from "../../util/formatter.js";
import ProgressBarLoader from "../loaders/ProgressBarLoader.vue";
import employeeAdditionalService from "../../service/servises/employeeAdditionalService";
import employeeIncentiveService from "../../service/servises/employeeIncentiveService";
import employeeStuff from "../../service/servises/employeeStuff";
export default {
  components: {
    DeleteButton,
    EditButton,
    ViewButton,
    ProgressBarLoader,
  },
  data() {
    return {
      formatter,
      barLoader: false,

      punishmentList: [],
      punishmentDialogType: true,
      punishmentDialog: false,
      punishment_number: "",
      punishment_date: "",
      punishment_type: "",
      punishment_reason: "",
      punishment_id: null,

      incentiveList: [],
      incentiveDialogType: true,
      incentiveDialog: false,
      incentive_byWhom: "",
      incentive_command_number: "",
      incentive_incentive_date: "",
      incentive_type_incentive: "",
      incentive_reason_incentive: "",
      incentive_id: null,

      stuffList: [],
      stuffDialogType: true,
      stuffDialog: false,
      stuff_Comment:"",
      stuff_file:null,
      stuff_id:null,
      stuff_fileName:null,

    };
  },
  methods: {
    get_punishment(id, loader) {
      this.controlLoader(loader);
      employeeAdditionalService
        .get_CadryPunishment({ id })
        .then((res) => {
          console.log(res.data);
          this.punishmentList = res.data.punishments;

          this.controlLoader(false);
        })
        .catch((error) => {
          this.controlLoader(false);
          console.log(error);
        });
    },
    addItemPunishment() {
      this.punishmentDialogType = true;
      this.punishment_number = "";
      this.punishment_date = "";
      this.punishment_type = "";
      this.punishment_reason = "";
      this.controlPunishmentDialog(true);
    },
    editItemPunishment(event) {
      this.punishment_id = event.id;
      this.punishmentDialogType = false;
      this.punishment_number = event.command_number;
      this.punishment_date = formatter.interDateFormatter(
        event.date_punishment
      );
      this.punishment_type = event.type_punishment;
      this.punishment_reason = event.reason_punishment;

      this.controlPunishmentDialog(true);
    },

    addAndEditPunishment() {
      this.controlPunishmentDialog(false);
      let data = {
        command_number: this.punishment_number,
        date_punishment: formatter.outDateFormatter(this.punishment_date),
        type_punishment: this.punishment_type,
        reason_punishmend: this.punishment_reason,
      };
      if (this.punishmentDialogType) {
        employeeAdditionalService
          .create_CadryPunishment({ id: this.$route.params.id, data })
          .then((res) => {
            this.get_punishment(this.$route.params.id, false);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        employeeAdditionalService
          .update_CadryPunishment({ id: this.punishment_id, data })
          .then((res) => {
            this.get_punishment(this.$route.params.id, false);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    deleteItemPunishment(id) {
      employeeAdditionalService
        .delete_CadryPunishment({ id })
        .then((res) => {
          this.get_punishment(this.$route.params.id, false);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    get_Incentive(id, loader) {
      employeeIncentiveService
        .get_CadryIncentive({ id })
        .then((res) => {
          this.incentiveList = res.data.incentives;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    addItemIncentive() {
      this.incentiveDialogType = true;
      this.incentive_byWhom = "";
      this.incentive_command_number = "";
      this.incentive_incentive_date = "";
      this.incentive_type_incentive = "";
      this.incentive_reason_incentive = "";
      this.controlIncentiveDialog(true);
    },

    editItemIncentive(event) {
      this.incentiveDialogType = false;
      this.incentive_id = event.id;
      this.incentive_byWhom = event.by_whom;
      this.incentive_command_number = event.command_number;
      this.incentive_incentive_date = formatter.interDateFormatter(
        event.incentive_date
      );
      this.incentive_type_incentive = event.type_incentive;
      this.incentive_reason_incentive = event.reason_incentive;
      this.controlIncentiveDialog(true);
    },

    addAndEditIncenstive() {
      this.controlIncentiveDialog(false);
      let data = {
        by_whom: this.incentive_byWhom,
        command_number: this.incentive_command_number,
        incentive_date: formatter.outDateFormatter(
          this.incentive_incentive_date
        ),
        type_incentive: this.incentive_type_incentive,
        reason_incentive: this.incentive_reason_incentive,
        status: false,
      };

      if (this.incentiveDialogType) {
        employeeIncentiveService
          .create_CadryIncentive({ id: this.$route.params.id, data })
          .then((res) => {
            this.get_Incentive(this.$route.params.id);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        employeeIncentiveService
          .update_CadryIncentive({ id: this.incentive_id, data })
          .then((res) => {
            this.get_Incentive(this.$route.params.id);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    delete_Incentive(id) {
      employeeIncentiveService
        .delete_CadryIncentive({ id })
        .then((res) => {
          this.get_Incentive(this.$route.params.id);
        })
        .catch((error) => {
          console.log(error);
        });
    },


    get_Stuff(id) {
      employeeStuff
        .get_CadryStuff({ id })
        .then((res) => {
          this.stuffList = res.data.staff_files;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    addItemStuff(){
      this.stuffDialogType = true
      this.stuff_Comment = ""
      this.stuff_file=""
      this.stuff_fileName = null,
      this.controlStuffDialog(true)
    },

    editItemStuff(event){
      this.stuffDialogType = false
      this.stuff_id = event.id
      this.stuff_Comment = event.comment
      this.stuff_file=null,
      this.controlStuffDialog(true)
    },

    uploadFile(event){
      console.log(event);
      const { files } = event.target;
      let fileArray =files[0].name.split(".")
      let extention = fileArray[fileArray.length-1]
      if(extention=="pdf"){
        this.stuff_file = files[0];
        this.stuff_fileName = files[0].name
        console.log(files[0]);
      }else{

      }
    },

    addAndEditStuff(){
      this.controlStuffDialog(false)
      let form = new FormData()
      form.append("comment", this.stuff_Comment)
      form.append("file_staff", this.stuff_file)

      if(this.stuffDialogType){
        employeeStuff.create_CadryStuff({id:this.$route.params.id, form}).then((res)=>{
          this.get_Stuff(this.$route.params.id);
        }).catch((error)=>{
          console.log(error);
        })
      }else{
        employeeStuff.create_CadryStuff({id:this.stuff_id, form}).then((res)=>{
          this.get_Stuff(this.$route.params.id);
        }).catch((error)=>{
          console.log(error);
        })
      }


    },

    deleteStuff(id){
      employeeStuff.delete_CadryStuff({id}).then((res)=>{
        this.get_Stuff(this.$route.params.id);
      }).catch((error)=>{
        console.log(error);
      })
    },
    controlPunishmentDialog(item) {
      this.punishmentDialog = item;
    },
    controlIncentiveDialog(item) {
      this.incentiveDialog = item;
    },
    controlStuffDialog(item){
      this.stuffDialog = item;
    },
    controlLoader(item) {
      this.barLoader = item;
    },
  },

  created() {
    this.get_Stuff(this.$route.params.id);
    this.get_Incentive(this.$route.params.id);
    this.get_punishment(this.$route.params.id, true);
  },
};
</script>
