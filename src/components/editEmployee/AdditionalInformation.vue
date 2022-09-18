<template >
  <div class="grid card py-4" v-if="barLoader">
    <div class="col-12">
      <progress-bar-loader></progress-bar-loader>
    </div>
  </div>

  <div  class="grid card py-4" v-if="!barLoader">
    <div class="col-12 py-1 px-0">
      <DataTable
        :value="punishmentList"
        dataKey="id"
        :paginator="false"
        responsiveLayout="scroll"
        @rowReorder="onRowReorder"
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
                @click="addItem()"
              />
            </div>
          </div>
        </template>
        <Column style="min-width:100px; width:100px;">
          <template #header>
            <div class="text-800 font-semibold">Prikaz nomer</div>
          </template>
          <template #body="slotProps">
            <div
              class="text-center cursor-pointer font-semibold"
            >
              {{ slotProps.data.command_number }}
            </div>
          </template>
        </Column>
        <Column  style="min-width:150px;">
          <template #header>
            <div class="text-800 font-semibold">	Sanasi</div>
          </template>
          <template #body="slotProps">
            <div
              class="text-center cursor-pointer font-semibold"
            >
              {{ slotProps.data.date_punishment }}
            </div>
          </template>
        </Column>

        <Column style="min-width:200px; width:300px;">
          <template #header>
            <div class="text-800 font-semibold">Jazo turi</div>
          </template>
          <template #body="slotProps">
            <div
              class="
                font-semibold
              "
            >
              {{ slotProps.data.reason_punishment }}
            </div>
          </template>
        </Column>
        <Column style="min-width:200px; width:300px;">
          <template #header>
            <div class="text-800 font-semibold">	Jazo sababi</div>
          </template>
          <template #body="slotProps">
            <div
              class="
                font-semibold
              "
            >
              {{ slotProps.data.type_punishment }}
            </div>
          </template>
        </Column>
        <Column :exportable="false" style="min-width:100px; width:150px;">
          <template #header>
            <div class="text-800 font-semibold">Amallar</div>
          </template>
          <template #body="slotProps">
            <div class="flex gap-2">
              <edit-button
                :editItem="slotProps.data"
                @editEvent="editRelative($event)"
              ></edit-button>
              <delete-button
                :deleteItem="slotProps.data.id"
                @deleteAcceptEvent="deleteRelative($event)"
              ></delete-button>
            </div>
          </template>
        </Column>
      </DataTable>
    </div>
    <div class="col-12">
     
      <Dialog
        v-model:visible="relativeDialog"
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
              relativeDialogType
                ? "Ma'lumot qo'shish"
                : "Ma'lumotni tahrirlash"
            }}
          </h6>
        </template>
        <div class="grid pt-2">
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Qarindoshligi</h6>
            <Dropdown
                id="bornRegion"
                v-model="relative_id"
                :options="relativeList"
                optionLabel="name"
                optionValue="id"
                placeholder="Tanlang"
                class="w-full font-semibold"
              />
          </div>
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">F.I.SH</h6>
            <InputText
              type="text"
              class="w-full font-semibold"
              placeholder="Kiriting"
              id="employeePhone"
              v-model="relative_fullName"
            />
          </div>
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Tug'ilgan yili va joyi</h6>
            <InputText
              type="text"
              class="w-full font-semibold"
              placeholder="Kiritng"
              id="employeePhone"
              v-model="relative_birthday"
            />
          </div>
         
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Kasbi</h6>
            <Textarea
              class="w-full font-semibold"
              placeholder="Kiriting"
              id="employeePhone"
              v-model="relative_job"
              :autoResize="true"
              rows="1"
            />
          </div>
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Hozirda yashash manzili</h6>
            <Textarea
              class="w-full font-semibold"
              placeholder="Kiriting"
              id="employeePhone"
              v-model="relative_adress"
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
                @click="addAndEdit()"
              />
            </div>
          </div>
        </template>
      </Dialog>

    </div>

  </div>
</template>
<script>
  import DeleteButton from '../buttons/DeleteButton.vue';
  import EditButton from '../buttons/EditButton.vue';

  import ProgressBarLoader from "../loaders/ProgressBarLoader.vue";
  import employeeAdditionalService from '../../service/servises/employeeAdditionalService';
export default {
  components:{
    DeleteButton, EditButton,ProgressBarLoader,
  },
  data(){
    return{
      barLoader:false,
      punishmentList:[],

     


    }
  },
  methods:{
   
    get_punishment(id, loader){
      this.controlLoader(loader)
      employeeAdditionalService.get_CadryPunishment({id}).then((res)=>{
        console.log(res.data);
        this.punishmentList = res.data.punishments

        this.controlLoader(false)
      }).catch((error)=>{
        this.controlLoader(false)
        console.log(error);
      })
    },


    controlLoader(item){
      this.barLoader = item
    }
  },

  created(){
   this.get_punishment(this.$route.params.id, true)
  }

  
};
</script>
