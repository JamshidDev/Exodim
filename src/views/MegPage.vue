<template >
     <div class="grid card surface-0 shadow-1 py-2 px-2">
        <h6 class="text-base p-2 uppercase">Tibbiy ko'rik</h6>
        <div class="col-12">
            <DataTable
        ref="dt"
        :value="medList"
        dataKey="id"
        responsiveLayout="scroll"
        showGridlines
        class="p-datatable-sm"
        stripedRows
      >
        <template #header>
          <div class="grid">
            <div class="col-6">
              <InputText
                type="text"
                v-model="searchPartName"
                placeholder="Ism orqali qidiruv"
                class="p-inputtext-sm"
                @keyup.enter="searchByName()"
              />
            </div>
            <div class="col-6 flex justify-content-end">
              <Button
                icon="pi pi-plus"
                label="Qo'shish"
                class="p-button-info p-button-sm"
                @click="addItemMed()"
                v-tooltip.bottom="`Yangi tibbiy ko'rik qo'shish`"
              ></Button>
            </div>
          </div>
        </template>
        <Column header="" style="min-width: 30px; width: 40px">
          <template #body="slotProps">
            <div class="w-full text-center text-lg font-semibold">
              {{ slotProps.data.number }}
              1
            </div>
          </template>
        </Column>
        <Column  style="min-width: 60px; width: 60px">
            <template #header>
            <div class="text-800 font-semibold">Rasm</div>
          </template>
          <template #body>
            <div class="flex justify-content-center">
              <Image
                src="http://exodim.railway.uz/storage/cadry-photos/d83fad83e045f0e3b00bb9924a9f809a.jpg"
                alt="http://exodim.railway.uz/storage/cadry-photos/d83fad83e045f0e3b00bb9924a9f809a.jpg"
                width="40"
                height="40"
                preview
              />
            </div>
          </template>
        </Column>
        <Column style="min-width: 16rem">
          <template #header>
            <div class="text-800 font-semibold">F.I.SH</div>
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
              "
            >
              {{ slotProps.data.fullName }}
            </div>
          </template>
        </Column>

        
        <Column style="min-width: 100px; width: 150px">
          <template #header>
            <div class="text-800 font-semibold">Status</div>
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
                
                
              "
    
            >
            <div v-show="slotProps.data.isFinished" class="w-full text-center  text-red-500">
                Tugagan
            </div>
            <div v-show="!slotProps.data.isFinished &&  slotProps.data.status<=10 " class="w-full text-center  text-yellow-500">
                {{ slotProps.data.status }}
            </div>
            <div v-show="!slotProps.data.isFinished &&  slotProps.data.status>10 " class="w-full text-center  text-blue-500">
                {{ slotProps.data.status }}
            </div>
             
            </div>
          </template>
        </Column>
        <Column style="min-width: 100px; width: 100px">
          <template #header>
            <div class="text-800 font-semibold">Oxirgi sana</div>
          </template>
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-md
                lg:text-lg
                xl:text-lg
                text-center
                font-medium
              "
              :class="[slotProps.data.isFinished? 'text-red-500': '' ]"
            >
              {{ slotProps.data.lastDate }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 100px; width: 100px">
          <template #header>
            <div class="text-800 font-semibold">Keyingi sana</div>
          </template>
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-md
                lg:text-lg
                xl:text-lg
                text-center 
                font-medium
              "
              :class="[slotProps.data.isFinished? 'text-red-500': '' ]"
            >
              {{ slotProps.data.nextDAte }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 200px; width: 300px">
          <template #header>
            <div class="text-800 font-semibold">Izoh</div>
          </template>
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-md
                lg:text-lg
                xl:text-lg
                text-center 
                font-medium
              "
              :class="[slotProps.data.isFinished? 'text-red-500': '' ]"
            >
              {{ slotProps.data.comment }}
            </div>
          </template>
        </Column>

        <Column :exportable="false" style="min-width: 80px; width: 100px">
          <template #header>
            <div class="text-800 font-semibold">Amallar</div>
          </template>
          <template #body="slotProps">
            <div class="flex gap-2"> 
              <edit-button
                :editItem="slotProps.data"
                @editEvent="editItemMed($event)"
              ></edit-button>
              <delete-button
                :deleteItem="slotProps.data.id"
                @deleteAcceptEvent="deleteItemMed($event)"
              ></delete-button>
            </div>
          </template>
        </Column>
        <template #footer>
          <table-pagination
            v-show="totalDepartment > 10"
            :total_page="totalDepartment"
            @pagination="changePagination($event)"
          ></table-pagination>
        </template>
      </DataTable>
        </div>
        <div class="col-12">
            <Dialog
        v-model:visible="med_dialog"
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
            {{ med_dialodType ? " Tibbiy ko'rik hulosasini qo'shish " : "Tibbiy ko'rik hulosasini tahrirlash" }}
          </h6>
        </template>
        <div class="grid pt-2">
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Xodimni tanlang</h6>
            <Dropdown
            id="positionPart"
            v-model="med_fullName"
            :options="med_cadryList"
            optionLabel="name"
            :filter="true"
            placeholder="Tanlang"
            class="w-full"
          >
            <template #value="slotProps">
              <div
                class="font-semibold"
                v-if="slotProps.value"
              >
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
          <div class="col-6">
            <h6 class="mb-2 pl-2 text-500">Oxirgi o'tgan sanasi</h6>
            <Calendar
            class="w-full font-semibold"
            :manualInput="true"
            id="positionFirstDate"
            v-model="med_date1"
            dateFormat="dd/mm/yy"
            v-maska="'##/##/####'"
            placeholder="Sanani tanlang"
          />
          </div>
          <div class="col-6">
            <h6 class="mb-2 pl-2 text-500">Keyingi o'tish sanasi</h6>
            <Calendar
            class="w-full font-semibold"
            :manualInput="true"
            v-model="med_date2"
            dateFormat="dd/mm/yy"
            v-maska="'##/##/####'"
            placeholder="Sanani tanlang"
          />
          </div>
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Izoh</h6>
            <Textarea
              class="w-full font-semibold"
              placeholder="Kiriting"
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
    import DeleteButton from "../components/buttons/DeleteButton.vue";
    import EditButton from "../components/buttons/EditButton.vue";
export default {
    components:{
        EditButton,
        DeleteButton,
    },
    data(){
        return{
            medList:[{
                id:1,
                fullName:"Sharipov Ilyosbek Ilxomovich",
                lastDate:"27-05-2021",
                nextDAte:"27-05-2024",
                status:"Tugagan",
                comment:"Sog'lom",
                isFinished:true,

            },
            {
                id:2,
                fullName:"Sharipov Ilyosbek Ilxomovich",
                lastDate:"27-05-2021",
                nextDAte:"27-05-2024",
                status:"1004",
                comment:"Sog'lom",
                isFinished:false,
            },
            {
                id:3,
                fullName:"Sharipov Ilyosbek Ilxomovich",
                lastDate:"27-05-2021",
                nextDAte:"27-05-2024",
                status:"8",
                comment:"Sog'lom",
                isFinished:false,
            },
            {
                id:4,
                fullName:"Sharipov Ilyosbek Ilxomovich",
                lastDate:"27-05-2021",
                nextDAte:"27-05-2024",
                status:"10",
                comment:"Sog'lom",
                isFinished:false,
            },
            {
                id:5,
                fullName:"Sharipov Ilyosbek Ilxomovich",
                lastDate:"27-05-2021",
                nextDAte:"27-05-2024",
                status:"605",
                comment:"Sog'lom",
                isFinished:false,
            },

            {
                id:6,
                fullName:"Sharipov Ilyosbek Ilxomovich",
                lastDate:"27-05-2021",
                nextDAte:"27-05-2024",
                status:"Tugagan",
                comment:"Sog'lom",
                isFinished:true,
            },
        ],
        med_cadryList:[],
        med_date1:"",
        med_date2:"",
        med_status:"",
        med_comment:"",
        med_fullName:"",

        med_dialog:false,
        med_dialodType:true,

        }
    },
    methods:{
        addItemMed(){
            this.med_dialodType = true;
            this.med_date1 = ""
            this.med_date2 = ""
            this.med_status = ""
            this.med_comment = ""
            this.med_fullName = ""
            this.controlDialog(true)
        },
        editItemMed(){
            this.med_dialodType = false;
            this.med_date1 = ""
            this.med_date2 = ""
            this.med_status = ""
            this.med_comment = ""
            this.med_fullName = ""
            this.controlDialog(true)
        },
        deleteItemMed(id){
            console.log(id);
        },


        controlDialog(item){
            this.med_dialog = item;
        }
    }
}
</script>
<style lang="">
    
</style>