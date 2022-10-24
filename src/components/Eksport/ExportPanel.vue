<template>
  <div class="grid">
    <div class="col-12">
      <Dialog
        v-model:visible="exportDialog"
        :breakpoints="{
          '640px': '100vw',
        }"
        :style="{ width: '90vw' }"
        :modal="true"
      >
        <template #header>
          <h6 class="uppercase text-base text-blue-500 font-medium">
            Yuklash sozlamalarini
          </h6>
        </template>
        <div class="grid md:px-4 sm:px-6">
          <div class="col-12 xl:col-4 lg:col-4 md:col-6">
            <div class="field-checkbox">
              <Checkbox :value="exporOption[0]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[0].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[0].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[0].id)
                    ? `(${elementNumber(exporOption[0].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[1]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[1].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[1].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[1].id)
                    ? `(${elementNumber(exporOption[1].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[2]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[2].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[2].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[2].id)
                    ? `(${elementNumber(exporOption[2].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[3]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[3].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[3].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[3].id)
                    ? `(${elementNumber(exporOption[3].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[4]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[4].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[4].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[4].id)
                    ? `(${elementNumber(exporOption[4].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[5]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[5].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[5].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[5].id)
                    ? `(${elementNumber(exporOption[5].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[6]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[6].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[6].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[6].id)
                    ? `(${elementNumber(exporOption[6].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[7]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[7].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[7].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[7].id)
                    ? `(${elementNumber(exporOption[7].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[8]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[8].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[8].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[8].id)
                    ? `(${elementNumber(exporOption[8].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[9]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[9].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[9].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[9].id)
                    ? `(${elementNumber(exporOption[9].id)})`
                    : ""
                }}</span></label
              >
            </div>
          </div>

          <div class="col-12 xl:col-4 lg:col-4 md:col-6">
            <div class="field-checkbox">
              <Checkbox :value="exporOption[10]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[10].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[10].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[10].id)
                    ? `(${elementNumber(exporOption[10].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[11]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[11].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[11].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[11].id)
                    ? `(${elementNumber(exporOption[11].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[12]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[12].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[12].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[12].id)
                    ? `(${elementNumber(exporOption[12].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[13]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[13].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[13].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[13].id)
                    ? `(${elementNumber(exporOption[13].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[14]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[14].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[14].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[14].id)
                    ? `(${elementNumber(exporOption[14].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[15]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[15].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[15].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[15].id)
                    ? `(${elementNumber(exporOption[15].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[16]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[16].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[16].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[16].id)
                    ? `(${elementNumber(exporOption[16].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[17]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[17].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[17].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[17].id)
                    ? `(${elementNumber(exporOption[17].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[18]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[18].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[18].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[18].id)
                    ? `(${elementNumber(exporOption[18].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[19]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[19].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[19].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[19].id)
                    ? `(${elementNumber(exporOption[19].id)})`
                    : ""
                }}</span></label
              >
            </div>
          </div>

          <div class="col-12 xl:col-4 lg:col-4 md:col-6">
            <div class="field-checkbox">
              <Checkbox :value="exporOption[20]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[20].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[20].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[20].id)
                    ? `(${elementNumber(exporOption[20].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[21]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[21].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[21].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[21].id)
                    ? `(${elementNumber(exporOption[21].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[22]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[22].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[22].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[22].id)
                    ? `(${elementNumber(exporOption[22].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[23]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[23].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[23].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[23].id)
                    ? `(${elementNumber(exporOption[23].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[24]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[24].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[24].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[24].id)
                    ? `(${elementNumber(exporOption[24].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[25]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[25].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[25].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[25].id)
                    ? `(${elementNumber(exporOption[25].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[26]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[26].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[26].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[26].id)
                    ? `(${elementNumber(exporOption[26].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[27]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[27].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[27].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[27].id)
                    ? `(${elementNumber(exporOption[27].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[28]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[28].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[28].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[28].id)
                    ? `(${elementNumber(exporOption[28].id)})`
                    : ""
                }}</span></label
              >
            </div>
            <div class="field-checkbox">
              <Checkbox :value="exporOption[29]" v-model="exportOptions" />
              <label
                class="font-medium"
                :class="[
                  elementNumber(exporOption[29].id) ? 'text-blue-500' : '',
                ]"
                >{{ exporOption[29].name }}
                <span class="text-blue-600 ml-2">{{
                  elementNumber(exporOption[29].id)
                    ? `(${elementNumber(exporOption[29].id)})`
                    : ""
                }}</span></label
              >
            </div>
          </div>
        </div>

        <template #footer>
          <div class="col-12 pt-2">
            <div class="flex justify-content-center">
              <Button
                label="Export"
                icon="pi pi-cloud-download"
                class="p-button-rounded font-medium px-8"
                :class="[
                  progressActive ? 'p-button-secondary' : 'p-button-success',
                ]"
                @click="filterDetails"
              />
            </div>
          </div>
        </template>
      </Dialog>
    </div>
    <div class="col-12" v-show="false">
      <download-excel
        :data="jsonData"
        :fields="json_fields"
        name="exodim.xls"
        ref="excel_table"
      >
      </download-excel>
    </div>
  </div>
</template>
<script>
import EksportService from "@/service/servises/EksportService";
export default {
  data() {
    return {
      progressActive: true,
      exportDialog: false,
      exportOptions: [],

      jsonData: [],
      json_fields: {},
      exporOption: [
        {
          id: 1,
          name: "F.I.SH",
          key: "fullName",
        },
        {
          id: 2,
          name: "Lavozim",
          key: "position",
        },
        {
          id: 3,
          name: "Bo'lim nomi",
          key: "department",
        },
        {
          id: 4,
          name: "Millati",
          key: "nationality",
        },
        {
          id: 5,
          name: "Tug'ilgan sana",
          key: "passport_date",
        },
        {
          id: 6,
          name: "Telefon raqami",
          key: "passport_date",
        },
        {
          id: 7,
          name: "Yashash (Viloyati)",
          key: "passport_date",
        },
        {
          id: 8,
          name: "Yashash (Tumani)",
          key: "passport_date",
        },
        {
          id: 9,
          name: "Yashash manzili",
          key: "now_position",
        },
        {
          id: 10,
          name: "Pasport (Sana)",
          key: "passport_date",
        },
        {
          id: 11,
          name: "Pasport (JSHR)",
          key: "pinfl",
        },
        {
          id: 12,
          name: "Pasport (Seriya)",
          key: "passport",
        },
        {
          id: 13,
          name: "Pasport (Viloyat)",
          key: "passport_date",
        },
        {
          id: 14,
          name: "Pasport (Tuman)",
          key: "passport_date",
        },
        {
          id: 15,
          name: "Tug'ilgan (Viloyat)",
          key: "passport_date",
        },
        {
          id: 16,
          name: "Tug'ilgan (Tuman)",
          key: "passport_date",
        },
        {
          id: 17,
          name: "Jinsi",
          key: "sex",
        },
        {
          id: 18,
          name: "Ma'lumoti",
          key: "education",
        },
        {
          id: 19,
          name: "Ilmiy unvoni",
          key: "passport_date",
        },
        {
          id: 20,
          name: "Ilmiy darajasi",
          key: "passport_date",
        },
        {
          id: 21,
          name: "Xarbiy unvoni",
          key: "passport_date",
        },
        {
          id: 22,
          name: "Chet tillari",
          key: "passport_date",
        },
        {
          id: 23,
          name: "Ta'til",
          key: "passport_date",
        },
        {
          id: 24,
          name: "Tibbiy ko'rik",
          key: "passport_date",
        },
        {
          id: 25,
          name: "Jazolanganligi",
          key: "passport_date",
        },
        {
          id: 26,
          name: "Rag'batlantirilganligi",
          key: "passport_date",
        },
        {
          id: 27,
          name: "Shtat lavozimi",
          key: "passport_date",
        },
        {
          id: 28,
          name: "Chet tillari",
          key: "passport_date",
        },
        {
          id: 29,
          name: "Chet tillari",
          key: "passport_date",
        },
        {
          id: 30,
          name: "Chet tillari",
          key: "passport_date",
        },
      ],
    };
  },
  methods: {
    controlPanel(item, payload) {
      this.exportDialog = item;
      this.get_exportdetails(payload);
    },

    get_exportdetails(params, loader) {
      this.progressActive = true;
      EksportService.get_exportAnyDetails(params).then((res) => {
        console.log(res.data);
        res.data.forEach((item) => {
          let option = {
            fullName: item.fullname,
            sex: item.sex,
            position: item.department_and_staffs[0]? item.department_and_staffs[0].staff_full : ' ',
            department: item.department,
            education: item.education,
            passport: item.passport,
            pinfl: item.pinfl,
            nationality: item.nationality,
            now_position: item.now_position,
            passport_date: item.passport_date,
          };
          this.jsonData.push(option);
        });
        this.progressActive = false;
      });
    },
    filterDetails() {
      if (this.exportOptions.length > 0 && !this.progressActive) {
        this.exportOptions.forEach((item) => {
          this.exporOption.forEach((option) => {
            if (item.id == option.id) {
              this.json_fields[option.name] = option.key;
            }
          });
        });
        this.$refs.excel_table.generate();
        this.exportDialog = false;
        
      }
    },

    elementNumber(id) {
      if (this.exportOptions.length > 0) {
        return this.exportOptions.findIndex((item) => item.id == id) == -1
          ? ""
          : this.exportOptions.findIndex((item) => item.id == id) + 1;
      } else {
        return "";
      }
    },
  },
  created() {
    this.get_exportdetails();
  },
};
</script>
<style lang="scss" scoped>
</style>