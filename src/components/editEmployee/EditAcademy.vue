<template >
  <div class="grid card py-4">

    <div class="col-12 pt-1 mb-2">
      <div class="grid">
        <div
          class="
            col-12
            text-left text-base
            font-medium
            uppercase
            mb-2
            text-blue-600
          "
        >
          Akademik ma'lumotlari
        </div>

        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
          <div class="grid">
            <div class="col-12">
              <h6 class="mb-2 pl-2 text-500">Malumoti</h6>
              <Dropdown
                id="academic"
                v-model="academic"
                :options="educationList"
                optionLabel="name"
                optionValue="id"
                placeholder="Malumoti tanlang"
                class="w-full font-semibold"
              />
            </div>
            <div class="col-12">
              <h6 class="mb-2 pl-2 text-500">Ilmiy darajasi</h6>
              <Dropdown
                id="academicDegree"
                v-model="academicDegree"
                :options="academikDegreeList"
                optionLabel="name"
                optionValue="id"
                placeholder="Darajani tanlang"
                class="w-full font-semibold"
              />
            </div>
          </div>
        </div>

        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
          <div class="grid">
            <div class="col-12">
              <h6 class="mb-2 pl-2 text-500">Ilmiy unvoni</h6>
              <Dropdown
                id="academicTitle"
                v-model="academicTitle"
                :options="academikTitleList"
                optionLabel="name"
                optionValue="id"
                placeholder="Unvonni tanlang"
                class="w-full font-semibold"
              />
            </div>
            <div class="col-12">
              <h6 class="mb-2 pl-2 text-500">Millati</h6>
              <Dropdown
                id="employeeNation"
                v-model="employeeNation"
                optionValue="id"
                :options="nationalList"
                optionLabel="name"
                placeholder="Millatni tanlang"
                class="w-full font-semibold"
              />
            </div>
          </div>
        </div>

        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
          <div class="grid">
            <div class="col-12">
              <h6 class="mb-2 pl-2 text-500">Xarbiy unvoni</h6>
              <InputText
                type="text"
                class="w-full font-semibold"
                placeholder="Unvonni kiriting"
                id="employeeMilitaryTitle"
                v-model="employeeMilitaryTitle"
              />
            </div>
            <div class="col-12">
              <h6 class="mb-2 pl-2 text-500">Chet tillari</h6>
              <MultiSelect class="w-full font-semibold" v-model="employeeLanguage" :options="languagesList"  optionLabel="name" placeholder="Tilni tanlang" />
             
            </div>
          </div>
        </div>

        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
          <div class="grid">
            <div class="col-12">
              <h6 class="mb-2 pl-2 text-500">Saylangan organlarga a'zoligi</h6>
              <InputText
                type="text"
                class="w-full font-semibold"
                placeholder="Azoligini kiriting"
                id="employeeSelectedOrgan"
                v-model="employeeSelectedOrgan"
              />
            </div>
            <div class="col-12">
              <h6 class="mb-2 pl-2 text-500">Partiyaviyligi</h6>
              <Dropdown
                id="employeeParty"
                v-model="employeeParty"
                :options="Party"
                optionLabel="name"
                optionValue="id"
                placeholder="Partiyani tanlang"
                class="w-full font-semibold"
              />
            </div>
          </div>
        </div>
        <div class="col-12 flex justify-content-end">
          <Button
            icon="pi pi-save"
            @click="update_Info()"
            class="p-button-secondary p-button-sm"
            label="Saqlash"
            v-tooltip.bottom="`Ma'lumotlarni saqlash`"
          />
        </div>
      </div>
    </div>


    <!-- Uneversity table -->
    <div class="col-12 py-1 px-0">
      <DataTable
        :value="universityList"
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
                Oligoh ma'lumotlari
              </h5>
            </div>
            <div class="col-6 flex justify-content-end align-items-center">
              <Button
                icon="pi pi-plus-circle"
                class="p-button-info p-button-sm"
                label="Qo'shish"
                v-tooltip.bottom="`Bilim yurtini qo'shish`"
                @click="addItemUniversity()"
              />
            </div>
          </div>
        </template>
        <Column style="min-width:100px; width:100px;">
          <template #header>
            <div class="text-800 font-semibold">Qachondan</div>
          </template>
          <template #body="slotProps">
            <div
              class="text-center cursor-pointer font-semibold"
            >
              {{ slotProps.data.date1 }}
            </div>
          </template>
        </Column>
        <Column style="min-width:100px; width:100px;">
          <template #header>
            <div class="text-800 font-semibold">Qachongacha</div>
          </template>
          <template #body="slotProps">
            <div
              class="text-center cursor-pointer font-semibold"
            >
              {{ slotProps.data.date2 }}
            </div>
          </template>
        </Column>

        <Column style="min-width: 20rem">
          <template #header>
            <div class="text-800 font-semibold">Bilim yurti nomi</div>
          </template>
          <template #body="slotProps">
            <div
              class="
                font-semibold
              "
            >
              {{ slotProps.data.name }}
            </div>
          </template>
        </Column>
        <Column style="min-width:300px; width:500px;">
          <template #header>
            <div class="text-800 font-semibold">Mutaxassisligi</div>
          </template>
          <template #body="slotProps">
            <div
              class="
                font-semibold
              "
            >
              {{ slotProps.data.speciality }}
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
                @editEvent="editItemUniversity($event)"
              ></edit-button>
              <delete-button
                :deleteItem="slotProps.data.id"
                @deleteAcceptEvent="deleteCadryUniversity($event)"
              ></delete-button>
            </div>
          </template>
        </Column>
      </DataTable>
    </div>


    <!-- Foreign table -->
    <div class="col-12 py-1 px-0">
      <DataTable
        :value="cadryAbroadList"
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
              XORIJDA TA'LIM OLGANLAR
              </h5>
            </div>
            <div class="col-6 flex justify-content-end align-items-center">
              <Button
                icon="pi pi-plus-circle"
                class="p-button-info p-button-sm"
                label="Qo'shish"
                v-tooltip.bottom="`Bilim yurtini qo'shish`"
              />
            </div>
          </div>
        </template>
        <Column style="min-width:100px; width:100px;">
          <template #header>
            <div class="text-800 font-semibold">Qachondan</div>
          </template>
          <template #body="slotProps">
            <div
              class="text-center cursor-pointer font-semibold"
            >
              {{ slotProps.data.date1 }}
            </div>
          </template>
        </Column>
        <Column style="min-width:100px; width:100px;">
          <template #header>
            <div class="text-800 font-semibold">Qachongacha</div>
          </template>
          <template #body="slotProps">
            <div
              class="text-center cursor-pointer font-semibold"
            >
              {{ slotProps.data.date2 }}
            </div>
          </template>
        </Column>

        <Column style="min-width: 20rem">
          <template #header>
            <div class="text-800 font-semibold">Ta'lim muassasasi</div>
          </template>
          <template #body="slotProps">
            <div
              class="
                font-semibold
              "
            >
              {{ slotProps.data.institute }}
            </div>
          </template>
        </Column>
        <Column style="min-width:100px; width:300px;">
          <template #header>
            <div class="text-800 font-semibold">Mutaxassisligi</div>
          </template>
          <template #body="slotProps">
            <div
              class="
                font-semibold
              "
            >
              {{ slotProps.data.direction }}
            </div>
          </template>
        </Column>
        <Column style="min-width:100px; width:200px;">
          <template #header>
            <div class="text-800 font-semibold">Mablag'lashtirish</div>
          </template>
          <template #body="slotProps">
            <div
              class="
                font-semibold
              "
            >
              {{ slotProps.data.type_abroad.name }}
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
              ></edit-button>
              <delete-button
                :deleteItem="slotProps.data.id"
               
              ></delete-button>
            </div>
          </template>
        </Column>
      </DataTable>
    </div>

    <!-- Academy table -->
    <div class="col-12 py-1 px-0">
      <DataTable
        :value="cadryAcademyList"
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
              AKADEMIYADA TA'LIM OLGANLAR
              </h5>
            </div>
            <div class="col-6 flex justify-content-end align-items-center">
              <Button
                icon="pi pi-plus-circle"
                class="p-button-info p-button-sm"
                label="Qo'shish"
                v-tooltip.bottom="`Bilim yurtini qo'shish`"
              />
            </div>
          </div>
        </template>
        <Column style="min-width:100px; width:100px;">
          <template #header>
            <div class="text-800 font-semibold">Qachondan</div>
          </template>
          <template #body="slotProps">
            <div
              class="text-center cursor-pointer font-semibold"
            >
              {{ slotProps.data.date1 }}
            </div>
          </template>
        </Column>
        <Column style="min-width:100px; width:100px;">
          <template #header>
            <div class="text-800 font-semibold">Qachongacha</div>
          </template>
          <template #body="slotProps">
            <div
              class="text-center cursor-pointer font-semibold"
            >
              {{ slotProps.data.date2 }}
            </div>
          </template>
        </Column>

        <Column style="min-width: 20rem">
          <template #header>
            <div class="text-800 font-semibold">Akademiya nomi</div>
          </template>
          <template #body="slotProps">
            <div
              class="
                font-semibold
              "
            >
              {{ slotProps.data.institute.name }}
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
              ></edit-button>
              <delete-button
                :deleteItem="slotProps.data.id"
               
              ></delete-button>
            </div>
          </template>
        </Column>
      </DataTable>
    </div>

    <!-- University Dialog -->
    <div class="col-12">
      <Dialog
        v-model:visible="universityDialog"
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
              universityDialogType
                ? "Ma'lumot qo'shish"
                : "Ma'lumotni tahrirlash"
            }}
          </h6>
        </template>
        <div class="grid pt-2">
          <div class="col-12 sm:col-6 md:col-6 lg:col-6 xl:col-6">
            <h6 class="mb-2 pl-2 text-500">Qachondan</h6>
            <InputText
              type="text"
              class="w-full font-semibold"
              placeholder="Yilni kiriting"
              id="employeePhone"
              v-model="v$.universityItemdate1.$model"
              :class="{
                'p-invalid': v$.universityItemdate1.$invalid && submitted,
              }"
              v-maska="'####'"
            />
          </div>
          <div class="col-12 sm:col-6 md:col-6 lg:col-6 xl:col-6">
            <h6 class="mb-2 pl-2 text-500">Qachongacha</h6>
            <InputText
              type="text"
              class="w-full font-semibold"
              placeholder="Yilni kiriting"
              id="employeePhone"
              v-model="v$.universityItemdate2.$model"
              :class="{
                'p-invalid': v$.universityItemdate2.$invalid && submitted,
              }"
              v-maska="'####'"
            />
          </div>
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Oligohni tanlang</h6>
            <Dropdown
              id="passportDistrict"
              v-model="selectUniversity"
      
              :options="UniversityList"
              optionLabel="name"
              :filter="true"
              placeholder="Oligohni tanlang"
              class="w-full font-semibold"
              @change="changeUniversityList"
            >
              <template #value="slotProps">
                <div
                  v-if="slotProps.value"
                >
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
            <h6 class="mb-2 pl-2 text-500">Tamomlagan bilim yurti</h6>
            <Textarea
              class="w-full font-semibold"
              placeholder="Bilim yurtini kiriting"
              id="employeePhone"
              v-model="v$.universityItemname.$model"
              :class="{
                'p-invalid': v$.universityItemname.$invalid && submitted,
              }"
              :autoResize="true"
              rows="5"
              cols="30"
            />
          </div>
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Yo'nalishi</h6>
            <Textarea
              placeholder="Yo'nalishni kiriting"
              class="w-full font-semibold"
              id="employeePhone"
              v-model="v$.universityItemspeciality.$model"
              :class="{
                'p-invalid': v$.universityItemspeciality.$invalid && submitted,
              }"
              :autoResize="true"
              rows="5"
              cols="30"
            />
          </div>
        </div>

        <template #footer>
          <div class="col-12 pt-2">
            <div class="flex justify-content-end">
              <Button
                label="Saqlash"
                class="p-button-secondary p-button-sm"
                @click="updateAndAddItems(v$)"
              />
            </div>
          </div>
        </template>
      </Dialog>
    </div>

    <!-- Foreign Dialog -->
    <div class="col-12">
      <Dialog
        v-model:visible="foreignDialog"
        :breakpoints="{
          '1960px': '30vw',
          '1600px': '40vw',
          '1200px': '70vw',
          '960px': '80vw',
          '640px': '90vw',
        }"
        :style="{ width: '50vw' }"
        :modal="true"
        header="Ma'lumot qo'shish"
      >
        <div class="grid pt-2">
          <div class="col-12 sm:col-6 md:col-6 lg:col-6 xl:col-6">
            <h6 class="mb-2 pl-2">Qachondan</h6>
            <InputText
              type="text"
              class="w-full"
              placeholder="Yilni kiriting"
              id="employeePhone"
              v-model="v$.employeePhone.$model"
              v-maska="'####'"
              :class="{
                'p-invalid': v$.employeePhone.$invalid && submitted,
              }"
            />
          </div>
          <div class="col-12 sm:col-6 md:col-6 lg:col-6 xl:col-6">
            <h6 class="mb-2 pl-2">Qachongacha</h6>
            <InputText
              type="text"
              class="w-full"
              placeholder="Yilni kiriting"
              id="employeePhone"
              v-model="v$.employeePhone.$model"
              v-maska="'####'"
              :class="{
                'p-invalid': v$.employeePhone.$invalid && submitted,
              }"
            />
          </div>

          <div class="col-12">
            <h6 class="mb-2 pl-2">Tamomlagan bilim yurti</h6>
            <Textarea
              class="w-full"
              placeholder="Bilim yurtini kiriting"
              id="employeePhone"
              v-model="v$.employeePhone.$model"
              :class="{
                'p-invalid': v$.employeePhone.$invalid && submitted,
              }"
              :autoResize="true"
              rows="5"
              cols="30"
            />
          </div>
          <div class="col-12">
            <h6 class="mb-2 pl-2">Yo'nalishi</h6>
            <Textarea
              placeholder="Yo'nalishni kiriting"
              class="w-full"
              id="employeePhone"
              v-model="v$.employeePhone.$model"
              :class="{
                'p-invalid': v$.employeePhone.$invalid && submitted,
              }"
              :autoResize="true"
              rows="5"
              cols="30"
            />
          </div>
          <div class="col-12">
            <h6 class="mb-2 pl-2">Mablag'lashtirish</h6>
            <Dropdown
              id="employeeLanguage"
              v-model="v$.employeeLanguage.$model"
              :class="{
                'p-invalid': v$.employeeLanguage.$invalid && submitted,
              }"
              :options="Languages"
              optionLabel="name"
              placeholder="Oligohni tanlang"
              class="w-full"
            />
          </div>
        </div>

        <template #footer>
          <div class="col-12 pt-2">
            <div class="flex justify-content-end">
              <Button
                label="Saqlash"
                class="p-button-secondary p-button-sm"
                @click="controlForeignDialog(false)"
              />
            </div>
          </div>
        </template>
      </Dialog>
    </div>

    <!-- Academy Dialog -->
    <div class="col-12">
      <Dialog
        v-model:visible="academyDialog"
        :breakpoints="{
          '1960px': '30vw',
          '1600px': '40vw',
          '1200px': '70vw',
          '960px': '80vw',
          '640px': '90vw',
        }"
        :style="{ width: '50vw' }"
        :modal="true"
        header="Ma'lumot qo'shish"
      >
        <div class="grid pt-2">
          <div class="col-12 sm:col-6 md:col-6 lg:col-6 xl:col-6">
            <h6 class="mb-2 pl-2">Qachondan</h6>
            <InputText
              type="text"
              class="w-full"
              placeholder="Yilni kiriting"
              id="employeePhone"
              v-model="v$.employeePhone.$model"
              v-maska="'####'"
              :class="{
                'p-invalid': v$.employeePhone.$invalid && submitted,
              }"
            />
          </div>
          <div class="col-12 sm:col-6 md:col-6 lg:col-6 xl:col-6">
            <h6 class="mb-2 pl-2">Qachongacha</h6>
            <InputText
              type="text"
              class="w-full"
              placeholder="Yilni kiriting"
              id="employeePhone"
              v-model="v$.employeePhone.$model"
              v-maska="'####'"
              :class="{
                'p-invalid': v$.employeePhone.$invalid && submitted,
              }"
            />
          </div>
          <div class="col-12">
            <h6 class="mb-2 pl-2">Akademiya nomi</h6>
            <Dropdown
              id="employeeLanguage"
              v-model="v$.employeeLanguage.$model"
              :class="{
                'p-invalid': v$.employeeLanguage.$invalid && submitted,
              }"
              :options="Languages"
              optionLabel="name"
              placeholder="Oligohni tanlang"
              class="w-full"
            />
          </div>
        </div>

        <template #footer>
          <div class="col-12 pt-2">
            <div class="flex justify-content-end">
              <Button
                label="Saqlash"
                class="p-button-secondary p-button-sm"
                @click="controlAcademyDialog(false)"
              />
            </div>
          </div>
        </template>
      </Dialog>
    </div>
  </div>
</template>
<script>
import DeleteButton from "@/components/buttons/DeleteButton";
import organizationsService from "../../service/servises/organizationsService";
import { globalValidate } from "../../validation/vuevalidate";
import {
  Regions,
  Districts,
  Genders,
  Nations,
  Languages,
  FactoryPart,
  FactoryTitle,
  FactoryDegree,
  FactoryAmount,
  AcademicDegree,
  Party,
} from "../../enum/enums.js";
import { minLength, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import employeeService from "../../service/servises/employeeService";
import EditButton from "../buttons/EditButton.vue";

export default {
  components: {
    DeleteButton,
    EditButton,
  },
  setup: () => ({ v$: useVuelidate() }),

  data() {
    return {
      academic: null,
      academicDegree: null,
      academicTitle: null,
      employeeNation: null,
      employeeLanguage: null,
      employeeParty: null,
      employeeMilitaryTitle: "",
      employeeSelectedOrgan: "",


      educationList: [],
      academikDegreeList: [],
      academikTitleList: [],
      nationalList: [],
      languagesList:[],
      partyList:[],

     
      cadryAbroadList:[],


      universityDialogType: true,
      universityDialog: false,
      universityList: [],
      UniversityList:[],
      universityId:null,
      selectUniversity:null,
      universityItemdate1: "",
      universityItemdate2: "",
      universityItemname: "",
      universityItemspeciality: "",

      academyDialogType:true,
      academyDialog:false,
      AcademyList: [],
      academydate1:"",
      academydate2:"",
      academyname:"",
      academyspeciality:"",
      submitted: false,
     
      submitted: false,

      foreignCampus: null,
      academicCampus: null,

      academyDialog: false,
      foreignDialog: false,
    };
  },

  validations() {
    return {
      academic: globalValidate.academic,
      academicDegree: globalValidate.academicDegree,
      academicTitle: globalValidate.academicTitle,
      employeeNation: globalValidate.employeeNation,
      employeeLanguage: globalValidate.employeeLanguage,
      employeeParty: globalValidate.employeeParty,
      employeeGender: globalValidate.employeeGender,
      employeePhone: globalValidate.employeePhone,
      employeeMilitaryTitle: globalValidate.employeeMilitaryTitle,
      employeeSelectedOrgan: globalValidate.employeeSelectedOrgan,
      universityItemdate1: globalValidate.universityItemdate1,
      universityItemdate2: globalValidate.universityItemdate2,
      universityItemname: globalValidate.universityItemname,
      universityItemspeciality: globalValidate.universityItemname,
    };
  },

  methods: {
    goPush() {
      this.$router.push("/admin/partemployee");
    },

    getCadry(id) {
      employeeService
        .get_CadryInfo({ id: id })
        .then((res) => {
          this.academic = res.data.cadry.education_id.id;
          this.academicDegree = res.data.cadry.academicdegree_id.id
          this.academicTitle = res.data.cadry.academictitle_id.id
          this.employeeNation = res.data.cadry.nationality_id.id
          this.employeeLanguage = res.data.cadry.languages
          this.employeeMilitaryTitle = res.data.cadry.military_rank
          this.employeeSelectedOrgan = res.data.cadry.deputy;
          this.employeeParty = res.data.cadry.party_id.id   
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // Cadry university Action
    get_universityList(){
      employeeService.get_universityList().then((res)=>{
        this.UniversityList = res.data
      })
    },

    getCadryUniversity(id) {
      employeeService.get_CadryUniversity({ cadry_id: id }).then((res) => {
        this.universityList = res.data.infoeducations;
      });
    },

    updateCadryUniversity(id, data){
      employeeService.update_CadryUniversity({id, data }).then((res) => {
        this.getCadryUniversity(this.$route.params.id);
        this.submitted = false;
      }).catch((error)=>{
        console.log(error);
      })
    },

    addingCadryUniversity(id, data){
      employeeService.adding_CadryUniversity({id, data }).then((res) => {
        this.getCadryUniversity(this.$route.params.id);
      });
    },

    deleteCadryUniversity(id){
      employeeService.delete_CadryUniversity({id }).then((res) => {
        this.getCadryUniversity(this.$route.params.id);
      });
    },





    get_CadryAcademy(id) {
      employeeService.get_CadryAcademy({ cadry_id: id }).then((res) => {
        this.cadryAcademyList = res.data;
      });
    },

    get_CadryAbroad(id) {
      employeeService.get_CadryAbroad({cadry_id: id}).then((res) => {
        console.log(res.data);
        this.cadryAbroadList = res.data;
      });
    },

    

    get_Info(){
      employeeService.get_Info().then((res)=>{
        console.log(res.data);
        this.educationList = res.data.educations;
        this.academikTitleList = res.data.academicTitlies;
        this.academikDegreeList = res.data.academicDegree;
        this.nationalList = res.data.nationalities;
        this.Party = res.data.parties;
        this.languagesList = res.data.languages;
      }).catch((error)=>{
        console.log(error);
      })
    },

    update_Info(){
      let langIds = [];
      this.employeeLanguage.forEach((item)=>{
        langIds.push(item.id)
      })

      let data = {
        education_id: this.academic,
        academictitle_id:this.academicTitle,
        academicdegree_id: this.academicDegree,
        nationality_id:this.employeeNation,
        party_id: this.employeeParty,
        military_rank : this.employeeMilitaryTitle,
        deputy:this.employeeSelectedOrgan,
        languages:langIds,


      }
      console.log(data);
      employeeService.update_Info({id:this.$route.params.id, data,}).then((res)=>{
        console.log(res.data);
        this.get_Info();
      }).catch((error)=>{
        console.log(error);
      })
      
    },




    addItemUniversity() {
      this.universityItemdate1 = "";
      this.universityItemdate2 = "";
      this.universityItemname = "";
      this.universityItemspeciality = "";

      this.universityDialogType = true;
      this.controlUniversityDialog(true);
    },

    editItemUniversity(event) {
      console.log(event);
      this.universityId = event.id
      this.universityItemdate1 = event.date1;
      this.universityItemdate2 = event.date2;
      this.universityItemname = event.name;
      this.universityItemspeciality = event.speciality;

      this.universityDialogType = false;
      this.controlUniversityDialog(true);
    },

    updateAndAddItems(valid) {
      this.submitted = true;
      let data = {
          date1:this.universityItemdate1,
          date2: this.universityItemdate2,
          institut:  this.universityItemname,
          speciality: this.universityItemspeciality,
        };
      if(this.universityDialogType){
        this.controlUniversityDialog(false)
        this.addingCadryUniversity(this.$route.params.id, data)
      }else{ 
        this.controlUniversityDialog(false)
        this.updateCadryUniversity(this.universityId, data)
      }
      

      // this.updateCadryUniversity()
      console.log(valid);
    },

    onImageRightClick(event) {
      this.$refs.menu.show(event);
    },

    changeUniversityList(event){
      this.universityItemname = event.value.name
    },



    controlUniversityDialog(item) {
      this.universityDialog = item;
    },
    controlAcademyDialog(item) {
      this.academyDialog = item;
    },
    controlForeignDialog(item) {
      this.foreignDialog = item;
    },
  },
  created() {
    this.getCadryUniversity(this.$route.params.id);
    this.get_CadryAcademy(this.$route.params.id);
    this.get_CadryAbroad(this.$route.params.id)
    this.get_universityList()
    this.get_Info()

    this.getCadry(this.$route.params.id);
   
  },
};
</script>
<style lang="">
</style>