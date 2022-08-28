<template>
  <div class="grid card py-4 px-3">
    <div class="col-12">
      <div class="flex justify-content-end">
        <Button
          icon="pi pi-trash"
          @click="handleSubmit(!v$.$invalid)"
          class="p-button-danger p-button-sm mx-2"
          label="Yakunlash"
          v-tooltip.bottom="`Xodim mehnat faoliyatini yakunlash`"
        />
        <Button
          icon="pi pi-save"
          @click="handleSubmit(!v$.$invalid)"
          class="p-button-secondary p-button-sm"
          label="Saqlash"
          v-tooltip.bottom="`Ma'lumotlarni qayta saqlash`"
        />
      </div>
    </div>

    
    <div class="col-12">
      <div class="grid xl:px-8 lg:px-4  py-4">
        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
          <div class="employee-avatar-box">
            <div class="img-box">
              <img
                class="employee-avatar"
                src="http://exodim.railway.uz/storage/cadry-photos/d83fad83e045f0e3b00bb9924a9f809a.jpg"
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
                v-model="v$.firstName.$model"
                v-maska="'S*'"
                :class="{ 'p-invalid': v$.firstName.$invalid && submitted }"
              />
            </div>
            <div class="col-12">
              <h6 class="mb-2">Ism</h6>
              <InputText
                type="text"
                class="w-full font-semibold"
                placeholder="Ismni kiriting"
                id="lastName"
                v-model="v$.lastName.$model"
                v-maska="'S*'"
                :class="{ 'p-invalid': v$.lastName.$invalid && submitted }"
              />
            </div>
            <div class="col-12">
              <h6 class="mb-2">Sharif</h6>
              <InputText
                type="text"
                id="thirdName"
                v-model="v$.thirdName.$model"
                v-maska="'S*'"
                :class="{ 'p-invalid': v$.thirdName.$invalid && submitted }"
                class="w-full"
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
                :options="Regions"
                optionLabel="name"
                placeholder="Viloyatni tanlang"
                class="w-full font-semibold"
              />
            </div>
            <div class="col-12 p-fluid">
              <h6 class="mb-2">Tug'ilgan tumani</h6>
              <Dropdown
                id="bornDistric"
                v-model="v$.bornDistric.$model"
                :class="{ 'p-invalid': v$.bornDistric.$invalid && submitted }"
                :options="Districts"
                optionLabel="name"
                :filter="true"
                placeholder="Tumanni tanlang"
                :showClear="true"
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
              <h6 class="mb-2">Yashash manzili</h6>
              <Dropdown
                id="adressRegion"
                v-model="v$.adressRegion.$model"
                :class="{ 'p-invalid': v$.adressRegion.$invalid && submitted }"
                :options="Regions"
                optionLabel="name"
                placeholder="Viloyatni tanlang"
                class="w-full"
              />
            </div>
            <div class="col-12 p-fluid">
              <h6 class="mb-2">Yashash manzili</h6>
              <Dropdown
                id="adressDistrict"
                v-model="v$.adressDistrict.$model"
                :class="{
                  'p-invalid': v$.adressDistrict.$invalid && submitted,
                }"
                :options="Districts"
                optionLabel="name"
                :filter="true"
                placeholder="Tumanni tanlang"
                :showClear="true"
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
        <!-- Person pasport details -->
        <div class="col-12 mb-4 border-1 border-300 border-round-sm py-4 ">
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
                :class="{
                  'p-invalid': v$.passportSeriya.$invalid && submitted,
                }"
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
                v-maska="'##-##-##-##-##-##-##'"
                :class="{ 'p-invalid': v$.passportJSHR.$invalid && submitted }"
              />
            </div>

            <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
              <h6 class="mb-2 pl-2">Berilgan viloyat</h6>
              <Dropdown
                id="passportRegion"
                v-model="v$.passportRegion.$model"
                :class="{
                  'p-invalid': v$.passportRegion.$invalid && submitted,
                }"
                :options="Regions"
                optionLabel="name"
                placeholder="Viloyatni tanlang"
                class="w-full"
              />
            </div>

            <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
              <h6 class="mb-2 pl-2">Berilgan tuman</h6>
              <Dropdown
                id="passportDistrict"
                v-model="v$.passportDistrict.$model"
                :class="{
                  'p-invalid': v$.passportDistrict.$invalid && submitted,
                }"
                :options="Districts"
                optionLabel="name"
                :filter="true"
                placeholder="Tumanni tanlang"
                :showClear="true"
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
        <div class="col-12 mb-4 border-1 border-300 border-round-sm py-4">
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
                v-model="v$.positionPart.$model"
                :class="{ 'p-invalid': v$.positionPart.$invalid && submitted }"
                :options="FactoryPart"
                optionLabel="name"
                :filter="true"
                placeholder="Bo'limni tanlang"
                :showClear="true"
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
              <h6 class="mb-2 pl-2">Shtat lavozimi</h6>
              <Dropdown
                id="positionName"
                v-model="v$.positionName.$model"
                :class="{ 'p-invalid': v$.positionName.$invalid && submitted }"
                :options="FactoryTitle"
                optionLabel="name"
                :filter="true"
                placeholder="Shtat lavozimni tanlang"
                :showClear="true"
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
              <h6 class="mb-2 pl-2">Ish stavkasi</h6>
              <Dropdown
                id="positionAmount"
                v-model="v$.positionAmount.$model"
                :class="{
                  'p-invalid': v$.positionAmount.$invalid && submitted,
                }"
                :options="FactoryAmount"
                optionLabel="name"
                placeholder="Stavkani tanlang"
                class="w-full"
              />
            </div>
            <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
              <h6 class="mb-2 pl-2">Birinchi lavozim sanasi (O'TY)</h6>
              <Calendar
                class="w-full"
                :manualInput="true"
                id="positionFirstDate"
                v-model="v$.positionFirstDate.$model"
                :class="{
                  'p-invalid': v$.positionFirstDate.$invalid && submitted,
                }"
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
                :class="{
                  'p-invalid': v$.positionDegree.$invalid && submitted,
                }"
                :options="FactoryDegree"
                optionLabel="name"
                placeholder="Darajani tanlang"
                class="w-full"
              />
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
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

export default {
  setup: () => ({ v$: useVuelidate() }),

  data() {
    return {
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

      submitted: false,
      displayResponsive: false,
      succesDialog: false,
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
    };
  },

  validations() {
    return {
      firstName: globalValidate.firtName,
      lastName: globalValidate.lastName,
      thirdName: globalValidate.thirdName,
      bornDate: globalValidate.bornDate,
      bornRegion: globalValidate.bornRegion,
      bornDistric: globalValidate.bornDistric,
      adressRegion: globalValidate.adressRegion,
      adressDistrict: globalValidate.adressDistrict,
      adressStreet: globalValidate.adressStreet,

      passportSeriya: globalValidate.passportSeriya,
      passportJSHR: globalValidate.passportJSHR,
      passportRegion: globalValidate.passportRegion,
      passportDistrict: globalValidate.passportDistrict,
      passportDate: globalValidate.passportDate,

      positionDate: globalValidate.positionDate,
      positionPart: globalValidate.positionPart,
      positionName: globalValidate.positionName,
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

  methods: {
    handleSubmit(isFormValid) {
      this.submitted = true;
      console.log(isFormValid);
      if (!isFormValid) {
        return;
      }

      this.toggleDialog();
    },
    goPush() {
      this.$router.push("/admin/partemployee");
    },
    controlDialog() {
      this.displayResponsive = !this.displayResponsive;
    },
    controlSuccessDialog() {
      this.succesDialog = !this.succesDialog;
    },
    toggleDialog() {
      this.showMessage = !this.showMessage;

      if (!this.showMessage) {
        this.resetForm();
      }
    },
    resetForm() {
      this.name = "";
      this.email = "";
      this.password = "";
      this.date = null;
      this.country = null;
      this.accept = null;
      this.submitted = false;
    },
  },
};
</script>
<style lang="scss">
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