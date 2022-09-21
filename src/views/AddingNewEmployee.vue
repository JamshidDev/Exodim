<template >
  <div class="grid card surface-0 shadow-1 py-4 px-3">
    <!-- Page header details -->
    <div class="col-12">
      <div class="grid">
        <div class="col-12">
          <div class="w-full flex justify-content-between">
            <Button
              icon="pi pi-arrow-circle-left"
              @click="goPush()"
              class="p-button-secondary p-button-rounded p-button-sm"
              v-tooltip.right="`Orqaga`"
            />
            <Button
              icon="pi pi-save"
              @click="addEmployee()"
              class="p-button-secondary p-button-sm"
              label="Saqlash"
            />
          </div>
        </div>
        <div class="col-12 mb-2">
          <h6 class="uppercase pl-2 text-xl text-center font-semibold">
            Yangi xodim ma'lumotlari
          </h6>
        </div>
      </div>
    </div>

    <!-- Personal imformation details -->
    <div class="col-12 mb-4">
      <div class="grid xl:px-4 xl:mx-4 lg:px-2 xl:mx-2">
        <div class="col-12 text-left text-base font-medium uppercase mb-4">
          Shaxsiy ma'lumotlari
        </div>

        <!-- avatar -->
        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
          <div class="employee-avatar-box">
            <div class="img-box">
              <img
                class="employee-avatar"
                src="https://w7.pngwing.com/pngs/577/307/png-transparent-human-with-circle-logo-national-cyber-security-alliance-organization-drupal-association-information-internet-icon-s-customers-free-miscellaneous-company-logo.png"
                alt=""
              />
              <div class="hover-element">
                <i class="pi pi-pencil"></i>
              </div>
            </div>
          </div>
        </div>

        <!-- firstName, lastname, thirdName -->
        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
          <div class="grid">
            <div class="col-12">
              <h6 class="mb-2 pl-2">Familiya</h6>
              <InputText
                type="text"
                class="w-full font-semibold"
                placeholder="Familiyani kiriting"
                id="firstName"
                v-model="v$.lastName.$model"
                :class="{ 'p-invalid': v$.lastName.$invalid && submitted }"
              />
            </div>
            <div class="col-12">
              <h6 class="mb-2">Ism</h6>
              <InputText
                type="text"
                class="w-full font-semibold"
                placeholder="Ismni kiriting"
                id="lastName"
                v-model="v$.firstName.$model"
                :class="{ 'p-invalid': v$.firstName.$invalid && submitted }"
              />
            </div>
            <div class="col-12">
              <h6 class="mb-2">Sharif</h6>
              <InputText
                type="text"
                id="thirdName"
                v-model="v$.thirdName.$model"
                :class="{ 'p-invalid': v$.thirdName.$invalid && submitted }"
                class="w-full font-semibold"
                placeholder="Sharifni kiriting"
              />
            </div>
          </div>
        </div>

        <!-- bornDate, bornRegion, bornDistrict -->
        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
          <div class="grid">
            <div class="col-12">
              <h6 class="mb-2">Tug'ilgan sanasi (kun-oy-yil)</h6>
              <Calendar
                class="w-full font-semibold"
                :manualInput="true"
                id="bornDate"
                v-model="v$.bornDate.$model"
                v-maska="'##/##/####'"
                :class="{ 'p-invalid': v$.bornDate.$invalid && submitted }"
                dateFormat="dd/mm/yy"
                :showButtonBar="true"
                placeholder="Sanani tanlang"
              />
            </div>
            <div class="col-12">
              <h6 class="mb-2">Tug'ilgan viloyati</h6>
              <Dropdown
                id="bornRegion"
                v-model="v$.bornRegion.$model"
                :class="{ 'p-invalid': v$.bornRegion.$invalid && submitted }"
                :options="RegionsList"
                optionLabel="name"
                optionValue="id"
                placeholder="Viloyatni tanlang"
                class="w-full font-semibold"
              />
            </div>
            <div class="col-12 p-fluid">
              <h6 class="mb-2">Tug'ilgan tumani</h6>
              <Dropdown
                id="bornDistric"
                v-model="v$.born_district.$model"
                :class="{ 'p-invalid': v$.born_district.$invalid && submitted }"
                :options="DistrictList"
                optionLabel="name"
                :filter="true"
                placeholder="Tumanni tanlang"
                @change="changeBornDistrict"
                class="w-full font-semibold"
              >
                <template #value="slotProps">
                  <div
                    class="country-item country-item-value"
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
          </div>
        </div>

        <!-- liveRegion, liveDistrict, livestreet -->
        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
          <div class="grid">
            <div class="col-12 p-fluid">
              <h6 class="mb-2">Yashash viloyati</h6>
              <Dropdown
                id="adressRegion"
                v-model="v$.adressRegion.$model"
                :class="{ 'p-invalid': v$.adressRegion.$invalid && submitted }"
                :options="RegionsList"
                optionLabel="name"
                optionValue="id"
                placeholder="Viloyatni tanlang"
                class="w-full"
              />
            </div>
            <div class="col-12 p-fluid">
              <h6 class="mb-2">Yashash tumani</h6>
              <Dropdown
                id="adressDistrict"
                v-model="v$.adress_district.$model"
                :class="{
                  'p-invalid': v$.adress_district.$invalid && submitted,
                }"
                :options="DistrictList"
                optionLabel="name"
                :filter="true"
                placeholder="Tumanni tanlang"
                class="w-full"
                @change="changeAdressDistrict"
              >
                <template #value="slotProps">
                  <div
                    class="country-item country-item-value"
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
              <h6 class="mb-2 pl-2">Qo'shimcha manzil</h6>
              <InputText
                type="text"
                class="w-full"
                placeholder="Ko'cha va uy manzili"
                id="adressStreet"
                v-model="v$.adressStreet.$model"
                :class="{ 'p-invalid': v$.adressStreet.$invalid && submitted }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Person pasport details -->
    <div class="col-12 mb-4">
      <div class="grid xl:px-4 xl:mx-4 lg:px-2 xl:mx-2">
        <div class="col-12 text-left text-lg font-medium uppercase mb-4">
          Pasport ma'lumotlari
        </div>

        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
          <h6 class="mb-2 pl-2">Pasport seriyasi</h6>
          <InputText
            type="text"
            class="w-full"
            placeholder="Seriyani kiriting"
            id="passportSeriya"
            v-model="v$.passportSeriya.$model"
            v-maska="'AA ######'"
            :class="{ 'p-invalid': v$.passportSeriya.$invalid && submitted }"
          />
        </div>

        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
          <h6 class="mb-2 pl-2">Pasport JSHR</h6>
          <InputText
            type="text"
            class="w-full"
            placeholder="JSHR raqami"
            id="passportJSHR"
            v-model="v$.passportJSHR.$model"
            v-maska="'##############'"
            :class="{ 'p-invalid': v$.passportJSHR.$invalid && submitted }"
          />
        </div>

        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
          <h6 class="mb-2 pl-2">Berilgan viloyat</h6>
          <Dropdown
            id="passportRegion"
            v-model="v$.passportRegion.$model"
            :class="{ 'p-invalid': v$.passportRegion.$invalid && submitted }"
            :options="RegionsList"
            optionLabel="name"
            optionValue="id"
            placeholder="Viloyatni tanlang"
            class="w-full"
          />
        </div>

        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
          <h6 class="mb-2 pl-2">Berilgan tuman</h6>
          <Dropdown
            id="passportDistrict"
            v-model="v$.pass_districy.$model"
            :class="{ 'p-invalid': v$.pass_districy.$invalid && submitted }"
            :options="DistrictList"
            optionLabel="name"
            :filter="true"
            placeholder="Tumanni tanlang"
            @change="changePassDistrict"
            class="w-full"
          >
            <template #value="slotProps">
              <div
                class="country-item country-item-value"
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

        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
          <h6 class="mb-2 pl-2">Berilgan sana</h6>
          <Calendar
            class="w-full"
            :manualInput="true"
            id="passportDate"
            v-model="v$.passportDate.$model"
            :class="{ 'p-invalid': v$.passportDate.$invalid && submitted }"
            v-maska="'##/##/####'"
            placeholder="Sanani tanlang"
            dateFormat="dd/mm/yy"
            :showButtonBar="true"
          />
        </div>
      </div>
    </div>

    <!-- Position information details -->
    <div class="col-12 mb-4">
      <div class="grid xl:px-4 xl:mx-4 lg:px-2 xl:mx-2">
        <div class="col-12 text-left text-lg font-medium uppercase mb-4">
          Lavozim ma'lumotlari
        </div>

        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
          <h6 class="mb-2 pl-2">Lavozim sanasi</h6>
          <Calendar
            class="w-full"
            :manualInput="true"
            id="positionDate"
            v-model="v$.positionDate.$model"
            :class="{ 'p-invalid': v$.positionDate.$invalid && submitted }"
            v-maska="'##/##/####'"
            placeholder="Sanani tanlang"
            dateFormat="dd/mm/yy"
            :showButtonBar="true"
          />
        </div>
        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
          <h6 class="mb-2 pl-2">Bo'lim nomi</h6>
          <Dropdown
            id="positionPart"
            v-model="v$.position_department.$model"
            :class="{ 'p-invalid': v$.position_department.$invalid && submitted }"
            :options="DepartmentList"
            optionLabel="name"
            :filter="true"
            placeholder="Bo'limni tanlang"
            class="w-full"
            @change="changeDepartment"
          >
            <template #value="slotProps">
              <div
                class="country-item country-item-value"
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
        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
          <h6 class="mb-2 pl-2">Shtat lavozimi</h6>
          <Dropdown
            id="positionName"
            v-model="v$.position_stuff.$model"
            :class="{ 'p-invalid': v$.position_stuff.$invalid && submitted }"
            :options="StuffList"
            optionLabel="staff_fullname"
            :filter="true"
            placeholder="Shtat lavozimni tanlang"
            class="w-full"
            @change="changeStuff"
          >
            <template #value="slotProps">
              <div
                class="country-item country-item-value"
                v-if="slotProps.value"
              >
                <div>{{ slotProps.value.staff_fullname }}</div>
              </div>
              <span v-else>
                {{ slotProps.placeholder }}
              </span>
            </template>
            <template #option="slotProps">
              <div class="country-item">
                <div>{{ slotProps.option.staff_fullname }}</div>
              </div>
            </template>
          </Dropdown>
        </div>
        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
          <h6 class="mb-2 pl-2">Birinchi lavozim sanasi (O'TY)</h6>
          <Calendar
            class="w-full"
            :manualInput="true"
            id="positionFirstDate"
            v-model="v$.positionFirstDate.$model"
            :class="{ 'p-invalid': v$.positionFirstDate.$invalid && submitted }"
            dateFormat="dd/mm/yy"
            v-maska="'##/##/####'"
            placeholder="Sanani tanlang"
          />
        </div>
        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
          <h6 class="mb-2 pl-2">Xizmat darajasi</h6>
          <Dropdown
            id="positionDegree"
            v-model="v$.positionDegree.$model"
            :class="{ 'p-invalid': v$.positionDegree.$invalid && submitted }"
            :options="PositionDegreeList"
            optionLabel="name"
            optionValue="id"
            placeholder="Darajani tanlang"
            class="w-full"
          />
        </div>
      </div>
    </div>

    <!-- Academic information details -->
    <div class="col-12 mb-4">
      <div class="grid xl:px-4 xl:mx-4 lg:px-2 xl:mx-2">
        <div class="col-12 text-left text-lg font-medium uppercase mb-4">
          Akademik ma'lumotlari
        </div>

        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
          <div class="grid">
            <div class="col-12">
              <h6 class="mb-2 pl-2">Malumoti</h6>
              <Dropdown
                id="academic"
                v-model="v$.academic.$model"
                :class="{ 'p-invalid': v$.academic.$invalid && submitted }"
                :options="EducationList"
                optionLabel="name"
                optionValue="id"
                placeholder="Malumoti tanlang"
                class="w-full"
              />
            </div>
            <div class="col-12">
              <h6 class="mb-2 pl-2">Ilmiy darajasi</h6>
              <Dropdown
                id="academicDegree"
                v-model="v$.academicDegree.$model"
                :class="{
                  'p-invalid': v$.academicDegree.$invalid && submitted,
                }"
                :options="AcademicDegreeList"
                optionLabel="name"
                optionValue="id"
                placeholder="Darajani tanlang"
                class="w-full"
              />
            </div>

            <div class="col-12">
              <h6 class="mb-2 pl-2">Ilmiy unvoni</h6>
              <Dropdown
                id="academicTitle"
                v-model="v$.academicTitle.$model"
                :class="{ 'p-invalid': v$.academicTitle.$invalid && submitted }"
                :options="AcademicList"
                optionLabel="name"
                optionValue="id"
                placeholder="Unvonni tanlang"
                class="w-full"
              />
            </div>
          </div>
        </div>

        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
          <div class="grid">
            <div class="col-12">
              <h6 class="mb-2 pl-2">Millati</h6>
              <Dropdown
                id="employeeNation"
                v-model="v$.employeeNation.$model"
                :class="{
                  'p-invalid': v$.employeeNation.$invalid && submitted,
                }"
                :options="NationalityList"
                optionLabel="name"
                optionValue="id"
                placeholder="Millatni tanlang"
                class="w-full"
              />
            </div>
            <div class="col-12">
              <h6 class="mb-2 pl-2 text-500">Chet tillari</h6>
              <MultiSelect class="w-full font-semibold"  v-model="v$.employeeLanguage.$model"
                :class="{ 'p-invalid': v$.employeeLanguage.$invalid && submitted }" :options="LanguageList"  optionLabel="name" placeholder="Tilni tanlang" />
            </div>
            <div class="col-12">
              <h6 class="mb-2 pl-2">Partiyaviyligi</h6>
              <Dropdown
                id="employeeParty"
                v-model="v$.employeeParty.$model"
                :class="{ 'p-invalid': v$.employeeParty.$invalid && submitted }"
                :options="PartList"
                optionLabel="name"
                optionValue="id"
                placeholder="Partiyani tanlang"
                class="w-full"
              />
            </div>
          </div>
        </div>

        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
          <div class="grid">
            <div class="col-12">
              <h6 class="mb-2 pl-2">Jinsi</h6>
              <Dropdown
                id="employeeGender"
                v-model="v$.employeeGender.$model"
                :class="{
                  'p-invalid': v$.employeeGender.$invalid && submitted,
                }"
                :options="genderList"
                optionLabel="name"
                optionValue="id"
                placeholder="Jinsini tanlang"
                class="w-full"
              />
            </div>
            <div class="col-12">
              <h6 class="mb-2 pl-2">Telefon raqam</h6>
              <InputText
                type="text"
                class="w-full"
                placeholder="Raqamni kiriting"
                id="employeePhone"
                v-model="v$.employeePhone.$model"
                v-maska="'(##)-###-##-##'"
                :class="{ 'p-invalid': v$.employeePhone.$invalid && submitted }"
              />
            </div>
            <div class="col-12">
              <h6 class="mb-2 pl-2">Xarbiy unvoni</h6>
              <InputText
                type="text"
                class="w-full"
                placeholder="Unvonni kiriting"
                id="employeeMilitaryTitle"
                v-model="v$.employeeMilitaryTitle.$model"
                :class="{
                  'p-invalid': v$.employeeMilitaryTitle.$invalid && submitted,
                }"
              />
            </div>
          </div>
        </div>

        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
          <div class="grid">
            <div class="col-12">
              <h6 class="mb-2 pl-2">Saylangan organlarga a'zoligi</h6>
              <InputText
                type="text"
                class="w-full"
                placeholder="Azoligini kiriting"
                id="employeeSelectedOrgan"
                v-model="v$.employeeSelectedOrgan.$model"
                :class="{
                  'p-invalid': v$.employeeSelectedOrgan.$invalid && submitted,
                }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 mb-8">
      <div class="grid xl:px-4 xl:mx-4 lg:px-2 xl:mx-2">
        <div class="col-12">
          <p
            class="
              bg-yellow-50
              font-medium
              border-1 border-yellow-100
              text-yellow-500
              px-4
              py-2
            "
          >
            Kiritilayotgan ma'lumotlar to'g'riligi bo'yicha javobgarlik
            korxonaning masul xodimi zimmasga yuklangan.
          </p>
        </div>
      </div>
    </div>
    <div class="col-12">
      <Button label="Warning" class="p-button-warning" @click="controlDialog()" />
       <Button label="Success" class="p-button-success" @click="controlSuccessDialog()" />

      <Dialog
        :closable="false"
        v-model:visible="displayResponsive"
        :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
        :style="{ width: '50vw' }"
        :modal="true"
      >
        <template #header>
            <div class="col-12">
              <div class="flex justify-content-center">
                <i class="pi pi-shield text-yellow-500 text-6xl mb-2"></i>
              </div>
              <p
                class="
                  text-center
                  uppercase
                  text-yellow-500
                  w-full
                  text-2xl
                  font-semibold
                "
              >
                Mavjud xodim
              </p>
            </div>

        </template>
         <div class="grid">
            <div class="col-12">
              <div class="text-left font-medium text-lg">Korxona nomi - <span class="pl-2 text-yellow-600">Arxiv</span> </div>
            </div>
             <div class="col-12">
              <div class="text-left font-medium text-lg">Xodim F.I.SH - <span class="pl-2 text-yellow-600">Jamshid Raximov Shuxrat o'g'li</span></div>
            </div>
          </div>

        <template #footer>
         <div class="col-12">
         <div class="flex justify-content-center">
            <Button label="Tushunarli" class="p-button-warning" @click="controlDialog()" />
         </div>
         </div>
        </template>
      </Dialog>


      <Dialog
        :closable="false"
        v-model:visible="succesDialog"
        :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
        :style="{ width: '50vw' }"
        :modal="true"
      >
        <template #header>
            <div class="col-12">
              <div class="flex justify-content-center">
                <i class="pi pi-check-circle text-green-500 text-6xl mb-4"></i>
              </div>
              <p
                class="
                  text-center
                  uppercase
                  font-semibold
                  text-green-500
                  w-full
                  text-2xl
                "
              >
                Xodim muvofaqiyatli qo'shildi
              </p>
            </div>

        </template>
         <div class="grid">
            <!-- <div class="col-12">
              <div class="text-left font-medium text-lg">Korxona nomi - <span class="pl-2 text-yellow-600">Arvix</span> </div>
            </div> -->
             <div class="col-12">
              <div class="text-left font-medium text-lg">Xodim F.I.SH - <span class="pl-2 text-green-600">Jamshid Raximov Shuxrat o'g'li</span></div>
            </div>
          </div>

        <template #footer>
         <div class="col-12">
         <div class="flex justify-content-center">
            <Button label="Tushunarli" class="p-button-success" @click="controlSuccessDialog()" />
         </div>
         </div>
        </template>
      </Dialog>
    </div>
  </div>
</template>
<script>
  import employeeAdd from '@/service/servises/employeeAdd'
import { globalValidate } from "../validation/vuevalidate";
import Formatter from "../util/formatter"
import { minLength, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
export default {

  setup() {
    const v$ =useVuelidate()
    return { v$  }
  },

  data() {
    return {

      Formatter,


      firstName: "",
      lastName: "",
      thirdName: "",
      bornDate: "",
      bornRegion: null,
      bornDistric: null,
      adressRegion: null,
      adressDistrict: null,
      adressStreet: "",

      passportSeriya: "",
      passportJSHR: " ",
      passportRegion: null,
      passportDistrict: null,
      passportDate: "",

      positionDate: "",
      positionPart: null,
      positionName: null,
      positionAmount: "",
      positionFirstDate: "",
      positionDegree: null,

      academic: null,
      academicDegree: null,
      academicTitle: null,
      employeeNation: null,
      employeeLanguage: null,
      employeeParty: null,
      employeeGender: null,
      employeePhone: "",
      employeeMilitaryTitle: "",
      employeeSelectedOrgan: "",

      RegionsList:[],
      DistrictList:[],
      DepartmentList:[],
      NationalityList:[],
      LanguageList:[],
      AcademicList:[],
      AcademicDegreeList:[],
      PartList:[],
      EducationDegreeList:[],
      EducationList:[],
      PositionDegreeList:[],
      StuffList:[],
      genderList: [
        {
          name: "Erkak",
          id: 1,
        },
        {
          name: "Ayol",
          id: 0,
        },
      ],


      submitted: false,
      displayResponsive: false,
      succesDialog:false,

      pass_districy:"",
      born_district:"",
      adress_district:"",
      position_department:"",
      position_stuff:"",
    };
  },
  countryService: null,

  validations() {
    return {
      firstName: globalValidate.firtName,
      lastName: globalValidate.lastName,
      thirdName: globalValidate.thirdName,
      bornDate: globalValidate.bornDate,
      bornRegion: globalValidate.bornRegion,
      born_district: globalValidate.bornDistric,
      adressRegion: globalValidate.adressRegion,
      adress_district: globalValidate.adressDistrict,
      adressStreet: globalValidate.adressStreet,

      passportSeriya: globalValidate.passportSeriya,
      passportJSHR: globalValidate.passportJSHR,
      passportRegion: globalValidate.passportRegion,
      pass_districy: globalValidate.passportDistrict,
      passportDate: globalValidate.passportDate,

      positionDate: globalValidate.positionDate,
      position_department: globalValidate.positionPart,
      position_stuff: globalValidate.positionName,
      positionAmount: globalValidate.positionAmount,
      positionFirstDate: globalValidate.positionFirstDate,
      positionDegree: globalValidate.positionDegree,

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
    };
  },
  watch: {
    passportDate(value) {
      console.log(value);
    },
  },

  methods: {

    get_AddInfo(){
      employeeAdd.get_AddInfo().then((res)=>{
        this.RegionsList = res.data.regions;
        this.DistrictList = res.data.cities;
        this.DepartmentList = res.data.departments;
        this.NationalityList = res.data.nationalities;
        this.AcademicDegreeList = res.data.academicdegree;
        this.AcademicList = res.data.academictitlies;
        this.EducationDegreeList = res.data.worklevels;
        this.PartList = res.data.parties;
        this.LanguageList = res.data.languages;
        this.PositionDegreeList = res.data.worklevels
        this.EducationList = res.data.educations

      }).catch((error)=>{
        console.log(error);
      })
    },

    addEmployee(){
      let language_ids = []
     if(this.employeeLanguage){
      this.employeeLanguage.forEach((item)=>{
        language_ids.push(item.id)
      })
     }
      this.submitted = true;
      if(this.v$.$invalid){}
      let data ={
        last_name: this.lastName,
        first_name: this.firstName,
        middle_name: this.thirdName,
        birht_date:Formatter.outDateFormatter(this.bornDate) ,
        birth_city_id:this.bornDistric,
        birth_region_id:this.bornRegion,
        address_region_id:this.adressRegion,
        address_city_id:this.adressDistrict,
        address:this.adressStreet,
        pass_region_id:this.passportRegion,
        pass_city_id:this.passportDistrict,
        jshshir:this.passportJSHR,
        passport:this.passportSeriya,
        pass_date:Formatter.outDateFormatter(this.passportDate),
        job_date: Formatter.outDateFormatter(this.positionFirstDate),
        post_date: Formatter.outDateFormatter(this.positionDate),
        worklevel_id:this.positionDegree,
        department_id:this.positionPart,
        staff_id:this.positionName,

        education_id:this.academic,
        academictitle_id:this.academicTitle,
        academicdegree_id:this.academicDegree,
        nationality_id:this.employeeNation,
        language:language_ids,
        party_id:this.employeeParty,
        military_rank:this.employeeMilitaryTitle,
        deputy:this.employeeSelectedOrgan,
        phone:this.employeePhone,
      }
      console.table(data);


    },

    get_Stuff(id){
      employeeAdd.get_Stuff({department_id:id}).then((res)=>{
        console.log(res.data);
        this.StuffList = res.data
      }).catch((error)=>{
        console.log(error);
      })
    },

    changeBornDistrict(event){
      this.bornDistric = event.value.id
    },

    changeAdressDistrict(event){
      this.adressDistrict = event.value.id
    },

    changePassDistrict(event){
      this.passportDistrict = event.value.id
    },

    changeDepartment(event){
      this.StuffList = []
      this.position_stuff =""

      this.get_Stuff(event.value.id)
      this.positionPart = event.value.id
    },

    changeStuff(event){
      this.positionName = event.value.id
    },




    goPush() {
      this.$router.push("/admin/partemployee");
    },
    controlDialog(){
      this.displayResponsive = !this.displayResponsive
    },
    controlSuccessDialog(){
      this.succesDialog=! this.succesDialog
    },
  },
  created(){
    this.get_AddInfo()
  }
};
</script>
<style lang="scss" scoped>
.employee-avatar-box {
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
  .img-box {
    position: relative;
    margin-top: 20px;
    width: 160px;
    height: 180px;
    overflow: hidden;
    border: 2px solid #767b8338;
    border-radius: 10px;
    box-sizing: border-box;

    &:hover .hover-element {
      opacity: 1;
    }
    .employee-avatar {
      width: 160px;
      height: 100%;
    }
    .hover-element {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 2;
      background: rgba(69, 70, 73, 0.491);
      opacity: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.3s ease;
      top: 0px;
      & > i {
        font-size: 24px;
        color: #ffffffc9;
      }
    }
  }
}
</style>