<template >
  <div class="grid card py-4">
    <div class="col-12 mb-4 py-4 mb-4">
      <div class="grid">
        <div
          class="
            col-12
            text-left text-base
            font-medium
            uppercase
            mb-4
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
                v-model="v$.academic.$model"
                :class="{ 'p-invalid': v$.academic.$invalid && submitted }"
                :options="educationList"
                optionLabel="name"
                placeholder="Malumoti tanlang"
                class="w-full font-semibold"
              />
            </div>
            <div class="col-12">
              <h6 class="mb-2 pl-2 text-500">Ilmiy darajasi</h6>
              <Dropdown
                id="academicDegree"
                v-model="v$.academicDegree.$model"
                :class="{
                  'p-invalid': v$.academicDegree.$invalid && submitted,
                }"
                :options="academikDegreeList"
                optionLabel="name"
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
                v-model="v$.academicTitle.$model"
                :class="{
                  'p-invalid': v$.academicTitle.$invalid && submitted,
                }"
                :options="academicTitle"
                optionLabel="name"
                placeholder="Unvonni tanlang"
                class="w-full font-semibold"
              />
            </div>
            <div class="col-12">
              <h6 class="mb-2 pl-2 text-500">Millati</h6>
              <Dropdown
                id="employeeNation"
                v-model="v$.employeeNation.$model"
                :class="{
                  'p-invalid': v$.employeeNation.$invalid && submitted,
                }"
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
                v-model="v$.employeeMilitaryTitle.$model"
                :class="{
                  'p-invalid': v$.employeeMilitaryTitle.$invalid && submitted,
                }"
              />
            </div>
            <div class="col-12">
              <h6 class="mb-2 pl-2 text-500">Chet tillari</h6>
              <Dropdown
                id="employeeLanguage"
                v-model="v$.employeeLanguage.$model"
                :class="{
                  'p-invalid': v$.employeeLanguage.$invalid && submitted,
                }"
                :options="Languages"
                optionLabel="name"
                placeholder="Tilni tanlang"
                class="w-full font-semibold"
              />
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
                v-model="v$.employeeSelectedOrgan.$model"
                :class="{
                  'p-invalid': v$.employeeSelectedOrgan.$invalid && submitted,
                }"
              />
            </div>
            <div class="col-12">
              <h6 class="mb-2 pl-2 text-500">Partiyaviyligi</h6>
              <Dropdown
                id="employeeParty"
                v-model="v$.employeeParty.$model"
                :class="{
                  'p-invalid': v$.employeeParty.$invalid && submitted,
                }"
                :options="Party"
                optionLabel="name"
                placeholder="Partiyani tanlang"
                class="w-full font-semibold"
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

    <!-- Uneversity table -->
    <div class="col-12 mb-4 py-4 px-0 flex justify-content-center">
      <div class="col-12  px-0">
        <DataTable
          contextMenu
          ref="dt"
          :value="university"
          v-model:selection="selectedProducts"
          dataKey="id"
          :paginator="false"
          :rows="10"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          :rowsPerPageOptions="[5, 10, 25]"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
          responsiveLayout="scroll"
          showGridlines
          class="pb-6 p-datatable-sm"
        >
          <template #header>
            <div class="grid">
              <div class="col-6">
                <h5
                  class="
                    text-base
                    md:m-0
                    p-as-md-center
                    uppercase
                    text-blue-600
                  "
                >
                  Ma'lumotlari
                </h5>
              </div>
              <div class="col-6 flex justify-content-end">
                <Button
                  icon="pi pi-plus-circle"
                  class="p-button-secondary p-button-sm"
                  label="Qo'shish"
                  v-tooltip.bottom="`Bilim yurtini qo'shish`"
                  @click="controlUniversityDialog(true)"
                />
              </div>
            </div>
          </template>
          <Column style="min-width: 2rem">
            <template #header>
              <div class="text-800 font-semibold">Qachondan</div>
            </template>
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
          <Column style="min-width: 2rem">
            <template #header>
              <div class="text-800 font-semibold">
                Qachongacha
              </div>
            </template>
            <template #body="slotProps">
              <div
                class="flex justify-content-center cursor-pointer font-semibold"
              >
                2022
                <div v-show="false">{{ slotProps.data.name }}</div>
              </div>
            </template>
          </Column>

          <Column style="min-width: 20rem">
            <template #header>
              <div class="text-800 font-semibold">
                Bilim yurti nomi
              </div>
            </template>
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
          <Column style="min-width: 10rem">
            <template #header>
              <div class="text-800 font-semibold">
                Mutaxassisligi
              </div>
            </template>
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
            <template #header>
              <div class="text-800 font-semibold">
                Amallar
              </div>
            </template>
            <template #body="slotProps">
              <div class="flex gap-2">
                <div
                  class="
                    flex
                    w-full
                    justify-content-center
                    py-2
                    bg-blue-500
                    cursor-pointer
                    border-1 border-blue-500 border-round
                  "
                  style="max-width: 40px"
                >
                  <i class="pi pi-pencil text-white text-lg"></i>
                </div>
                <delete-button :deleteItem="slotProps.data" @deleteAcceptEvent="deleteItem($event)"></delete-button>
              </div>
            </template>
          </Column>
        </DataTable>
      </div>
      <ContextMenu ref="menu" :model="items" class="font-medium" />
    </div>

    <!-- Foreign table -->
    <div class="col-12 mb-4 py-4 px-0 flex justify-content-center">
      <div class="col-12 xl:col-8 lg:col-10 px-0">
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
          class="pb-6 p-datatable-sm"
        >
          <template #header>
            <div class="grid">
              <div class="col-6">
                <h5
                  class="
                    text-base
                    md:m-0
                    p-as-md-center
                    uppercase
                    text-blue-600
                    mb-0
                  "
                >
                  Xorijda ta'lim olganlar
                </h5>
              </div>
              <div class="col-6 flex justify-content-end align-items-center">
                <Button
                  icon="pi pi-plus-circle"
                  class="p-button-secondary p-button-sm"
                  label="Qo'shish"
                  v-tooltip.bottom="`Bilim yurtini qo'shish`"
                  @click="controlForeignDialog(true)"
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
          <Column
            field="rating"
            header="Mutaxassisligi"
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
    </div>

    <!-- Academy table -->
    <div class="col-12 mb-4 py-4 px-0 flex justify-content-center">
      <div class="col-12 xl:col-8 lg:col-10 px-0">
        <DataTable
          ref="dt"
          :value="academicCampus"
          v-model:selection="selectedProducts"
          dataKey="id"
          :paginator="false"
          :rows="10"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          :rowsPerPageOptions="[5, 10, 25]"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
          responsiveLayout="scroll"
          showGridlines
          class="pb-6 p-datatable-sm"
        >
          <template #header>
            <div class="grid">
              <div class="col-6">
                <h5
                  class="
                    text-base
                    md:m-0
                    p-as-md-center
                    uppercase
                    text-blue-600
                    mb-0
                  "
                >
                  Akademiyada ta'lim olganlar
                </h5>
              </div>
              <div class="col-6 flex justify-content-end align-items-center">
                <Button
                  icon="pi pi-plus-circle"
                  class="p-button-secondary p-button-sm"
                  label="Qo'shish"
                  @click="controlAcademyDialog(true)"
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
            header="	Akademiya nomi"
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
                @click="controlUniversityDialog(false)"
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
  import DeleteButton from '@/components/buttons/DeleteButton'
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

export default {
  components:{
    DeleteButton
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
      employeeGender: null,
      employeePhone: "",
      employeeMilitaryTitle: "",
      employeeSelectedOrgan: "",

      educationList: [],
      academikDegreeList: [],
      academikTitleList: [],
      nationalList: [],

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

      university: [
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

      universityDialog: false,
      academyDialog: false,
      foreignDialog: false,

      items: [
        {
          label: "Tahrirlash",
          icon: "pi pi-pencil",
          command: (event) => {
            console.log(event);
          },
        },
        {
          label: "O'chirish",
          icon: "pi pi-trash",
        },
      ],
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
    },
    goPush() {
      this.$router.push("/admin/partemployee");
    },

    get_Education() {
      organizationsService
        .getEducation()
        .then((res) => {
          this.educationList = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    get_AcademikDegree() {
      organizationsService
        .getacademikDegree()
        .then((res) => {
          this.academikDegreeList = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    get_AcademikTitles() {
      organizationsService
        .getacademikTitles()
        .then((res) => {
          this.academicTitle = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    get_Nationality() {
      organizationsService
        .getNationality()
        .then((res) => {
          this.nationalList = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteItem(event){
      console.log(event);
    },

    onImageRightClick(event) {
      this.$refs.menu.show(event);
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
    this.get_Education();
    this.get_AcademikDegree();
    this.get_AcademikTitles();
    this.get_Nationality();
  },
};
</script>
<style lang="">
</style>