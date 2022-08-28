<template >
  <div class="grid card py-4 px-3">
    <div class="col-12 mb-4 border-1 border-300 border-round-sm py-4">
      <DataTable
        ref="dt"
        :value="data"
        v-model:selection="selectedProducts"
        dataKey="id"
        :paginator="false"
        :rows="10"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
        responsiveLayout="scroll"
        showGridlines
        class="pb-6"
      >
        <template #header>
          <div class="grid">
            <div class="col-6">
              <h5 class="text-base md:m-0 p-as-md-center uppercase">
                Ma'lumotlari
              </h5>
            </div>
            <div class="col-6 flex justify-content-end">
              <Button
                icon="pi pi-plus-circle"
                class="p-button-secondary p-button-sm"
                label="Qo'shish"
                v-tooltip.bottom="`Bilim yurtini qo'shish`"
                @click="controlAcademyDialog()"
              />
            </div>
          </div>
        </template>
        <Column header="Qachondan" style="min-width: 2rem">
          <template #body="slotProps">
            <div
              class="flex justify-content-center cursor-pointer font-semibold"
            >
              2022
              <div v-show="false">{{ slotProps.data.name }}</div>
            </div>
            <!-- <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.image" class="product-image" /> -->
          </template>
        </Column>
        <Column field="name" header="Qachondan" style="min-width: 2rem">
          <template #body="slotProps">
            <div
              class="flex justify-content-center cursor-pointer font-semibold"
            >
              2022
              <div v-show="false">{{ slotProps.data.name }}</div>
            </div>
          </template>
        </Column>

        <Column
          field="rating"
          header="Bilim yurti nomi"
          style="min-width: 20rem"
        >
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-md
                lg:text-lg
                xl:text-lg
                font-semibold
              "
            >
              Toshkent temir yo'l transporti muhandislari instituti
              <div v-show="false">{{ slotProps.data.name }}</div>
            </div>
          </template>
        </Column>
        <Column field="rating" header="Mutaxassisligi" style="min-width: 10rem">
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-md
                lg:text-lg
                xl:text-lg
                font-semibold
              "
            >
              Biznesni boshqarish magistri
              <div v-show="false">{{ slotProps.data.name }}</div>
            </div>
          </template>
        </Column>
        <Column :exportable="false" style="min-width: 8rem">
          <template #body="slotProps">
            <div class="flex w-full justify-content-center">
              <Button
                icon="pi pi-pencil"
                class="p-button-rounded p-button-secondary mr-4 p-button-sm"
                v-tooltip.left="`Tahrirlash`"
                @click="isShow = !isShow"
              />
              <Button
                icon="pi pi-trash"
                class="p-button-rounded p-button-danger p-button-sm"
                v-tooltip.left="`O'chirish`"
                @click="confirmDeleteProduct(slotProps.data)"
              />
            </div>
          </template>
        </Column>
      </DataTable>
    </div>

    <div class="col-12 mb-4 border-1 border-300 border-round-sm py-4 mb-4">
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
                :options="AcademicDegree"
                optionLabel="name"
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
                :options="FactoryDegree"
                optionLabel="name"
                placeholder="Darajani tanlang"
                class="w-full"
              />
            </div>

            <div class="col-12">
              <h6 class="mb-2 pl-2">Ilmiy unvoni</h6>
              <Dropdown
                id="academicTitle"
                v-model="v$.academicTitle.$model"
                :class="{
                  'p-invalid': v$.academicTitle.$invalid && submitted,
                }"
                :options="AcademicDegree"
                optionLabel="name"
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
                :options="Nations"
                optionLabel="name"
                placeholder="Millatni tanlang"
                class="w-full"
              />
            </div>
            <div class="col-12">
              <h6 class="mb-2 pl-2">Chet tillari</h6>
              <Dropdown
                id="employeeLanguage"
                v-model="v$.employeeLanguage.$model"
                :class="{
                  'p-invalid': v$.employeeLanguage.$invalid && submitted,
                }"
                :options="Languages"
                optionLabel="name"
                placeholder="Tilni tanlang"
                class="w-full"
              />
            </div>
            <div class="col-12">
              <h6 class="mb-2 pl-2">Partiyaviyligi</h6>
              <Dropdown
                id="employeeParty"
                v-model="v$.employeeParty.$model"
                :class="{
                  'p-invalid': v$.employeeParty.$invalid && submitted,
                }"
                :options="Party"
                optionLabel="name"
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
                :options="Genders"
                optionLabel="name"
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
                :class="{
                  'p-invalid': v$.employeePhone.$invalid && submitted,
                }"
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
        <div class="col-12 flex justify-content-end">
          <Button
            icon="pi pi-save"
            @click="handleSubmit(!v$.$invalid)"
            class="p-button-secondary p-button-sm"
            label="Saqlash"
            v-tooltip.bottom="`Ma'lumotlarni saqlash`"
          />
        </div>
      </div>
    </div>

    <div class="col-12 mb-4 border-1 border-300 border-round-sm py-4 mb-4">
      <DataTable
        ref="dt"
        :value="foreignCampus"
        v-model:selection="selectedProducts"
        dataKey="id"
        :paginator="false"
        :rows="10"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
        responsiveLayout="scroll"
        showGridlines
        class="pb-6"
      >
        <template #header>
          <div class="grid">
            <div class="col-6">
              <h5 class="text-base md:m-0 p-as-md-center uppercase mb-0">
                Xorijda ta'lim olganlar
              </h5>
            </div>
            <div class="col-6 flex justify-content-end align-items-center">
              <Button
                icon="pi pi-plus-circle"
                class="p-button-secondary p-button-sm"
                label="Qo'shish"
                v-tooltip.bottom="`Bilim yurtini qo'shish`"
              />
            </div>
          </div>
        </template>
        <Column header="Qachondan" style="min-width: 2rem">
          <template #body="slotProps">
            <div
              class="flex justify-content-center cursor-pointer font-semibold"
            >
              2022
              <div v-show="false">{{ slotProps.data.name }}</div>
            </div>
          </template>
        </Column>
        <Column field="name" header="Qachondan" style="min-width: 2rem">
          <template #body="slotProps">
            <div
              class="flex justify-content-center cursor-pointer font-semibold"
            >
              2022
              <div v-show="false">{{ slotProps.data.name }}</div>
            </div>
          </template>
        </Column>

        <Column
          field="rating"
          header="Ta'lim muassasasi"
          style="min-width: 20rem"
        >
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-md
                lg:text-lg
                xl:text-lg
                font-semibold
              "
            >
              Toshkent temir yo'l transporti muhandislari instituti
              <div v-show="false">{{ slotProps.data.name }}</div>
            </div>
          </template>
        </Column>
        <Column field="rating" header="Mutaxassisligi" style="min-width: 10rem">
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-md
                lg:text-lg
                xl:text-lg
                font-semibold
              "
            >
              Biznesni boshqarish magistri
              <div v-show="false">{{ slotProps.data.name }}</div>
            </div>
          </template>
        </Column>
        <Column
          field="rating"
          header="	Mablag'lashtirish"
          style="min-width: 10rem"
        >
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-md
                lg:text-lg
                xl:text-lg
                font-semibold
              "
            >
              Biznesni boshqarish magistri
              <div v-show="false">{{ slotProps.data.name }}</div>
            </div>
          </template>
        </Column>
        <Column :exportable="false" style="min-width: 8rem">
          <template #body="slotProps">
            <div class="flex w-full justify-content-center">
              <Button
                icon="pi pi-pencil"
                class="p-button-rounded p-button-secondary p-button-sm mr-4"
                v-tooltip.left="`Tahrirlash`"
                @click="isShow = !isShow"
              />
              <Button
                icon="pi pi-trash"
                class="p-button-rounded p-button-danger p-button-sm"
                v-tooltip.left="`O'chirish`"
                @click="confirmDeleteProduct(slotProps.data)"
              />
            </div>
          </template>
        </Column>
      </DataTable>
    </div>

    <div class="col-12 mb-4 border-1 border-300 border-round-sm py-4 mb-4">
      <DataTable
        ref="dt"
        :value="foreignCampus"
        v-model:selection="selectedProducts"
        dataKey="id"
        :paginator="false"
        :rows="10"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
        responsiveLayout="scroll"
        showGridlines
        class="pb-6"
      >
        <template #header>
          <div class="grid">
            <div class="col-6">
              <h5 class="text-base md:m-0 p-as-md-center uppercase mb-0">
                Akademiyada ta'lim olganlar
              </h5>
            </div>
            <div class="col-6 flex justify-content-end align-items-center">
              <Button
                icon="pi pi-plus-circle"
                class="p-button-secondary p-button-sm"
                label="Qo'shish"
                @click="controlAcademyDialog()"
                v-tooltip.bottom="`Bilim yurtini qo'shish`"
              />
            </div>
          </div>
        </template>
        <Column header="Qachondan" style="min-width: 2rem">
          <template #body="slotProps">
            <div
              class="flex justify-content-center cursor-pointer font-semibold"
            >
              2022
              <div v-show="false">{{ slotProps.data.name }}</div>
            </div>
          </template>
        </Column>
        <Column field="name" header="Qachondan" style="min-width: 2rem">
          <template #body="slotProps">
            <div
              class="flex justify-content-center cursor-pointer font-semibold"
            >
              2022
              <div v-show="false">{{ slotProps.data.name }}</div>
            </div>
          </template>
        </Column>

        <Column field="rating" header="	Akademiya nomi" style="min-width: 20rem">
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-md
                lg:text-lg
                xl:text-lg
                font-semibold
              "
            >
              Toshkent temir yo'l transporti muhandislari instituti
              <div v-show="false">{{ slotProps.data.name }}</div>
            </div>
          </template>
        </Column>
        <Column :exportable="false" style="min-width: 8rem">
          <template #body="slotProps">
            <div class="flex w-full justify-content-center">
              <Button
                icon="pi pi-pencil"
                class="p-button-rounded p-button-secondary p-button-sm mr-4"
                v-tooltip.left="`Tahrirlash`"
                @click="isShow = !isShow"
              />
              <Button
                icon="pi pi-trash"
                class="p-button-rounded p-button-danger p-button-sm"
                v-tooltip.left="`O'chirish`"
                @click="confirmDeleteProduct(slotProps.data)"
              />
            </div>
          </template>
        </Column>
      </DataTable>
    </div>

    <div class="col-12">
      <Dialog
        v-model:visible="academyDialog"
        :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
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
              <h6 class="mb-2 pl-2">Oligohni tanlang</h6>
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
        </div>

        <template #footer>
          <div class="col-12 pt-2">
            <div class="flex justify-content-end">
              <Button
                label="Saqlash"
                class="p-button-secondary p-button-sm"
                @click="controlAcademyDialog()"
              />
            </div>
          </div>
        </template>
      </Dialog>
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

      data: [
        {
          id: "1000",
          code: "f230fh0g3",
          name: "Raximov Jamshid Shuxrat o'g'li",
          description: "Product Description",
          image: "bamboo-watch.jpg",
          price: 65,
          category: "Accessories",
          quantity: 24,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
      ],
      foreignCampus: null,
      academicCampus: null,

      academyDialog: false,
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
    controlAcademyDialog() {
      this.academyDialog = !this.academyDialog;
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
<style lang="">
</style>