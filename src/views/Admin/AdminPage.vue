<template >
  <div class="grid px-3">
    <div class="col-12">
      <div class="grid">
        <div class="col-12 pb-0">
          <bread-crumb
            :breadCump="[{ name: 'Xodimlar', path: '/admin/partemployee' }]"
          ></bread-crumb>
        </div>
        <div class="col-12 y-0 py-0">
          <span class="text-2xl font-semibold"
            >Ma'sullar
            <span class="text-base text-primary pl-2" v-show="totalCadries > 0">
              ({{ totalCadries }})</span
            >
          </span>
        </div>
      </div>
    </div>
    <div class="col-12" v-show="!loader">
      <DataTable
        ref="dt"
        :value="adminList"
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
                v-model="searchCadryName"
                placeholder="Login yoki Id qidiruv"
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
            </div>
          </template>
        </Column>
        <Column style="min-width: 60px; width: 60px">
          <template #header>
            <div class="text-800 font-semibold">Rasm</div>
          </template>
          <template #body="slotProps">
            <div class="flex justify-content-center">
              <Image
                :src="slotProps.data.photo"
                :alt="slotProps.data.name"
                width="30"
                height="30"
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
              {{ slotProps.data.name }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 200px; width: 250px">
          <template #header>
            <div class="text-800 font-semibold">Korxona nomi</div>
          </template>
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-md
                lg:text-base
                xl:text-base
                font-medium
              "
            >
              {{ slotProps.data.organization.name }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 80px; width: 100px">
          <template #header>
            <div class="text-800 font-semibold">Status</div>
          </template>
          <template #body>
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
              <div class="w-full text-center text-red-500">
                <Tag
                  class="mr-2"
                  icon="pi pi-info-circle"
                  severity="success"
                  value="Active"
                ></Tag>
              </div>
            </div>
          </template>
        </Column>

        <Column style="min-width: 100px; width: 150px">
          <template #header>
            <div class="text-800 font-semibold">Huquqlar</div>
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
              <div class="w-full text-center text-red-500">
                <Tag
                  class="mr-2"
                  icon="pi pi-info-circle"
                  severity="unfo"
                  :value="slotProps.data.roles.name"
                ></Tag>
              </div>
            </div>
          </template>
        </Column>
        <Column style="min-width: 150px; width: 200px">
          <template #header>
            <div class="text-800 font-semibold">Login</div>
          </template>
          <template #body="slotProps">
            <div
              class="
                text-sm
                xl:text-base
                text-left
                font-medium
                flex
                justify-content-between
              "
              :class="[slotProps.data.isFinished ? 'text-red-500' : '']"
            >
              <span id="myLogin"> {{ slotProps.data.email }} </span>
              <span>
                <i
                  @click="copyFunction(slotProps.data.email)"
                  class="pi pi-copy pl-2 cursor-pointer"
                ></i>
              </span>
            </div>
          </template>
        </Column>

        <Column style="min-width: 120px; width: 120px">
          <template #header>
            <div class="text-800 font-semibold">Amallar</div>
          </template>
          <template #body="slotProps">
            <div class="flex gap-2">
              <edit-button
                :editItem="slotProps.data"
                @editEvent="editStuff($event)"
              ></edit-button>
              <delete-button
                :deleteItem="slotProps.data.id"
                @deleteAcceptEvent="deleteItemDepStuff($event)"
              ></delete-button>
            </div>
          </template>
        </Column>
        <template #footer>
          <table-pagination
            v-show="totalPage > 10"
            :total_page="totalPage"
            @pagination="changePagination($event)"
          ></table-pagination>
        </template>
      </DataTable>
    </div>
    <div class="col-12" v-show="loader">
      <med-loader></med-loader>
    </div>
    <div class="col-12">
      <Toast position="bottom-right" />
    </div>
  </div>
</template>
    <script>
import TextButton from "@/components/buttons/TextButton";
import DeleteButton from "@/components/buttons/DeleteButton";
import EditButton from "@/components/buttons/EditButton";
import TablePagination from "@/components/Pagination/TablePagination";
import MedLoader from "@/components/loaders/MedLoader";
import formatter from "@/util/formatter";
import AdminService from "@/service/servises/AdminService";
export default {
  components: {
    TextButton,
    TablePagination,
    MedLoader,
    DeleteButton,
    EditButton,
  },
  data() {
    return {
      loader: false,
      adminList: [],

      totalPage: 0,

      formatter,

      params: {
        page: 1,
        per_page: 10,
        search: null,
      },
      searchCadryName: null,
    };
  },
  methods: {
    get_AdminList(params, loader) {
      this.controlLoader(loader);
      AdminService.get_AdminList(params)
        .then((res) => {
          this.totalPage = res.data.users.pagination.total;
          let number = (this.params.page - 1) * this.params.per_page;
          res.data.users.data.forEach((item) => {
            number++;
            item.number = number;
          });
          this.adminList = res.data.users.data;
          this.controlLoader(false);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    changePagination(event) {
      console.log(event);
      this.params.page = event.page;
      this.params.per_page = event.per_page;
      this.get_AdminList(this.params, true);
    },

    copyFunction(text) {
      // Get the text field
      var copyText = text;
      // Copy the text inside the text field
      navigator.clipboard.writeText(copyText);

      this.$toast.add({
        severity: "success",
        summary: "Muvofaqqiyatli bajarildi",
        detail: "Nusxalandi",
        life: 2000,
      });
    },

    searchByName() {
      this.params.search = this.searchCadryName;
      this.get_AdminList(this.params, true);
    },
    controlLoader(item) {
      this.loader = item;
    },
  },
  created() {
    this.get_AdminList(this.params, true);
  },
};
</script>
    <style lang="">
</style>