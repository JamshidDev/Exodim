<template >
  <div class="grid card surface-0 shadow-1 py-4 px-3">
    <!-- Page header details -->
    <div class="col-12">
      <div class="grid">
        <div class="col-12 sm:col-12 md:col-6 lg:col-6 xl:col-6 mb-2">
          <h6 class="uppercase pl-2 text-lg font-semibold">
            Yangi xodim ma'lumotlari
          </h6>
        </div>
        <div class="col-12 sm:col-12 md:col-6 lg:col-6 xl:col-6">
          <div class="w-full flex justify-content-end">
            <Button
              icon="pi pi-save"
              @click="handleSubmit(!v$.$invalid)"
              class="p-button-secondary p-button-sm"
              label="Saqlash"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Personal imformation details -->
    <div class="col-12 mb-4">
      <div class="grid xl:px-8 xl:mx-8">
        <div class="col-12 text-left text-lg font-medium uppercase mb-4">
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
                class="w-full"
                placeholder="Familiyani kiriting"
                id="firstName"
                v-model="v$.firstName.$model"
                :class="{ 'p-invalid': v$.firstName.$invalid && submitted }"
              />
            </div>
            <div class="col-12">
              <h6 class="mb-2">Ism</h6>
              <InputText
                type="text"
                class="w-full"
                placeholder="Ismni kiriting"
                id="lastName"
                v-model="v$.lastName.$model"
                :class="{ 'p-invalid': v$.lastName.$invalid && submitted }"
              />
            </div>
            <div class="col-12">
              <h6 class="mb-2">Sharif</h6>
              <InputText
                type="text"
                id="thirdName"
                v-model="v$.thirdName.$model"
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
                class="w-full"
                :manualInput="false"
                id="bornDate"
                v-model="v$.bornDate.$model"
                :class="{ 'p-invalid': v$.bornDate.$invalid && submitted }"
                dateFormat="dd-mm-yy"
                placeholder="Sanani tanlang"
              />
            </div>
            <div class="col-12">
              <h6 class="mb-2">Tug'ilgan viloyati</h6>
              <Dropdown
                id="bornRegion"
                v-model="v$.bornRegion.$model"
                :class="{ 'p-invalid': v$.bornRegion.$invalid && submitted }"
                :options="region"
                optionLabel="name"
                placeholder="Viloyatni tanlang"
                class="w-full"
              />
            </div>
            <div class="col-12 p-fluid">
              <h6 class="mb-2">Tug'ilgan tumani</h6>
              <Dropdown
                id="bornDistric"
                v-model="v$.bornDistric.$model"
                :class="{ 'p-invalid': v$.bornDistric.$invalid && submitted }"
                :options="countries"
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
                :options="region"
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
                :options="countries"
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
    </div>

    <!-- Person pasport details -->
    <div class="col-12 mb-4">
      <div class="grid xl:px-8 xl:mx-8">
        <div class="col-12 text-left text-lg font-medium uppercase mb-4">
          Pasport ma'lumotlari
        </div>

        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
          <h6 class="mb-2 pl-2">Pasport seriyasi</h6>
          <InputNumber
            class="w-full"
            inputId="withoutgrouping"
            v-model="value2"
            mode="decimal"
            placeholder="Seriyasi"
            :useGrouping="false"
          />
        </div>

        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
          <h6 class="mb-2 pl-2">Pasport JSHR</h6>
          <InputNumber
            class="w-full"
            inputId="withoutgrouping"
            v-model="value2"
            mode="decimal"
            placeholder="JSHR raqami"
            :useGrouping="false"
          />
        </div>

        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
          <h6 class="mb-2 pl-2">Berilgan viloyat</h6>
          <Dropdown
            id="bornRegion"
            v-model="v$.bornRegion.$model"
            :class="{ 'p-invalid': v$.bornRegion.$invalid && submitted }"
            :options="region"
            optionLabel="name"
            placeholder="Viloyatni tanlang"
            class="w-full"
          />
        </div>

        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
          <h6 class="mb-2 pl-2">Berilgan tuman</h6>
          <Dropdown
            id="bornDistric"
            v-model="v$.bornDistric.$model"
            :class="{ 'p-invalid': v$.bornDistric.$invalid && submitted }"
            :options="countries"
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
            :manualInput="false"
            id="bornDate"
            v-model="v$.bornDate.$model"
            :class="{ 'p-invalid': v$.bornDate.$invalid && submitted }"
            dateFormat="dd-mm-yy"
            placeholder="Sanani tanlang"
          />
        </div>
      </div>
    </div>

    <!-- Position information details -->
    <div class="col-12 mb-4">
      <div class="grid xl:px-8 xl:mx-8">
        <div class="col-12 text-left text-lg font-medium uppercase mb-4">
          Lavozim ma'lumotlari
        </div>

        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
          <h6 class="mb-2 pl-2">Lavozim sanasi</h6>
          <Calendar
            class="w-full"
            :manualInput="false"
            id="bornDate"
            v-model="v$.bornDate.$model"
            :class="{ 'p-invalid': v$.bornDate.$invalid && submitted }"
            dateFormat="dd-mm-yy"
            placeholder="Sanani tanlang"
          />
        </div>
        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
          <h6 class="mb-2 pl-2">Bo'lim nomi</h6>
          <Dropdown
            id="bornDistric"
            v-model="v$.bornDistric.$model"
            :class="{ 'p-invalid': v$.bornDistric.$invalid && submitted }"
            :options="countries"
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
            id="bornDistric"
            v-model="v$.bornDistric.$model"
            :class="{ 'p-invalid': v$.bornDistric.$invalid && submitted }"
            :options="countries"
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
          <InputNumber
            class="w-full"
            inputId="withoutgrouping"
            v-model="value2"
            mode="decimal"
            placeholder="Stavkani kiriting"
            :useGrouping="false"
          />
        </div>
        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
          <h6 class="mb-2 pl-2">Birinchi lavozim sanasi (O'TY)</h6>
          <Calendar
            class="w-full"
            :manualInput="false"
            id="bornDate"
            v-model="v$.bornDate.$model"
            :class="{ 'p-invalid': v$.bornDate.$invalid && submitted }"
            dateFormat="dd-mm-yy"
            placeholder="Sanani tanlang"
          />
        </div>
        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
             <h6 class="mb-2 pl-2">	Xizmat darajasi</h6>
                <Dropdown
                  id="bornRegion"
                  v-model="v$.bornRegion.$model"
                  :class="{ 'p-invalid': v$.bornRegion.$invalid && submitted }"
                  :options="region"
                  optionLabel="name"
                  placeholder="Darajani tanlang"
                  class="w-full"
                />

        
        </div>
      </div>
    </div>

    <!-- Academic information details -->
    <div class="col-12 mb-4">
      <div class="grid xl:px-8 xl:mx-8">
        <div class="col-12 text-left text-lg font-medium uppercase mb-4">
          Akademik ma'lumotlari
        </div>

        <div class="col-12 sm:col-12 md:col-6 lg:col-3 xl:col-3">
          <div class="grid">
            <div class="col-12">
              <h6 class="mb-2 pl-2">Malumoti</h6>
              <Dropdown
                id="bornRegion"
                v-model="v$.bornRegion.$model"
                :class="{ 'p-invalid': v$.bornRegion.$invalid && submitted }"
                :options="region"
                optionLabel="name"
                placeholder="Malumoti tanlang"
                class="w-full"
              />
            </div>
            <div class="col-12">
              <h6 class="mb-2 pl-2">Ilmiy darajasi</h6>
              <Dropdown
                id="bornRegion"
                v-model="v$.bornRegion.$model"
                :class="{ 'p-invalid': v$.bornRegion.$invalid && submitted }"
                :options="region"
                optionLabel="name"
                placeholder="Darajani tanlang"
                class="w-full"
              />
            </div>

            <div class="col-12">
              <h6 class="mb-2 pl-2">Ilmiy unvoni</h6>
              <Dropdown
                id="bornRegion"
                v-model="v$.bornRegion.$model"
                :class="{ 'p-invalid': v$.bornRegion.$invalid && submitted }"
                :options="region"
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
                  id="bornRegion"
                  v-model="v$.bornRegion.$model"
                  :class="{ 'p-invalid': v$.bornRegion.$invalid && submitted }"
                  :options="region"
                  optionLabel="name"
                  placeholder="Millatni tanlang"
                  class="w-full"
                />
            </div>
             <div class="col-12">
                <h6 class="mb-2 pl-2">Chet tillari</h6>
                <Dropdown
                  id="bornRegion"
                  v-model="v$.bornRegion.$model"
                  :class="{ 'p-invalid': v$.bornRegion.$invalid && submitted }"
                  :options="region"
                  optionLabel="name"
                  placeholder="Millatni tanlang"
                  class="w-full"
                />
            </div>
             <div class="col-12">
                <h6 class="mb-2 pl-2">Partiyaviyligi</h6>
                <Dropdown
                  id="bornRegion"
                  v-model="v$.bornRegion.$model"
                  :class="{ 'p-invalid': v$.bornRegion.$invalid && submitted }"
                  :options="region"
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
            id="bornRegion"
            v-model="v$.bornRegion.$model"
            :class="{ 'p-invalid': v$.bornRegion.$invalid && submitted }"
            :options="region"
            optionLabel="name"
            placeholder="Jinsini tanlang"
            class="w-full"
          />
            </div>
             <div class="col-12">
                <h6 class="mb-2 pl-2">Telefon raqam</h6>
                <InputNumber
            class="w-full"
            inputId="withoutgrouping"
            v-model="value2"
            mode="decimal"
            placeholder="(__)-___-__-__"
            :useGrouping="false"
          />
            </div>
             <div class="col-12">
                <h6 class="mb-2 pl-2">Xarbiy unvoni</h6>
                <InputText
                type="text"
                class="w-full"
                placeholder="Unvonni kiriting"
                id="firstName"
                v-model="v$.firstName.$model"
                :class="{ 'p-invalid': v$.firstName.$invalid && submitted }"
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
                id="firstName"
                v-model="v$.firstName.$model"
                :class="{ 'p-invalid': v$.firstName.$invalid && submitted }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12">
        <div class="grid xl:px-8 xl:mx-8">
            <div class="col-12">
                 <p class="bg-yellow-50 border-1 border-yellow-100 text-yellow-500 px-2 py-2">Kiritilayotgan ma'lumotlar to'g'riligi bo'yicha javobgarlik korxonaning masul xodimi zimmasga yuklangan. </p>
            </div>
        </div>
       
    </div>
  </div>
</template>
<script>
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
export default {
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      firstName: "",
      lastName: "",
      thirdName: "",
      bornDate: "",
      bornRegion: "",
      bornDistric: "",
      adressRegion: "",
      adressDistrict: "",
      adressStreet: "",
      submitted: false,
    };
  },
  countryService: null,
  validations() {
    return {
      firstName: {
        required,
      },
      lastName: {
        required,
      },
      thirdName: {
        required,
      },
      bornDate: {
        required,
      },
      bornRegion: {
        required,
      },
      bornDistric: {
        required,
      },
      adressRegion: {
        required,
      },
      adressDistrict: {
        required,
      },
      adressStreet: {
        required,
      },
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