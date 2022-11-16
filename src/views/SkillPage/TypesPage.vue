<template>
  <div class="grid px-3">
    <div class="col-12">
      <div class="grid">
        <div class="col-12 pb-0">
          <bread-crumb
            :breadCump="[{ name: 'Xo\'jaliklar', path: '' }]"
          ></bread-crumb>
        </div>
        <div class="col-12 y-0 py-0">
          <span class="text-2xl font-semibold"
            >Xo'jaliklar
            <span class="text-base text-primary pl-2"> ({{ totalItem }})</span>
          </span>
        </div>
      </div>
    </div>
    <div class="col-12 py-0">
      <div class="grid">
        <div class="col-12 xl:col-6 lg:col-6 md:col-6 sm:col-6">
          <InputText
            type="text"
            v-model="params.search"
            placeholder="Nomi orqali qidiruv"
            class="p-inputtext-sm"
            @keyup.enter="searchByName()"
          />
        </div>

        <div
          class="
            col-12
            xl:col-6
            lg:col-6
            md:col-6
            sm:col-6
            flex
            justify-content-end
            align-items-center
          "
        >
          <Button
            icon="pi pi-plus"
            label="Qo'shish"
            class="p-button-info p-button-sm"
            @click="addItem()"
            v-tooltip.bottom="`Xo'jalik qo'shish`"
          ></Button>
        </div>
      </div>
    </div>
    <div class="col-12 py-0">
      <DataTable
        ref="dt"
        :value="List"
        dataKey="id"
        responsiveLayout="scroll"
        showGridlines
        class="p-datatable-sm"
        v-show="totalItem"
        v-model:selection="selectitem"
        selectionMode="single"
      >
        <Column style="min-width: 30px; width: 36px">
          <template #header>
            <div class="text-800 text-sm font-medium">No</div>
          </template>
          <template #body="slotProps">
            <div class="w-full text-center text-base font-medium">
              {{ slotProps.data.number }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 100px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Nomi
            </div>
          </template>
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-sm
                lg:text-base
                xl:text-base
                font-medium
                hover:text-blue-500
                cursor-pointer
              "
              v-tooltip.bottom="`Tahrirlash`"
              @click="goPush(slotProps.data.id)"
            >
              <div>{{ slotProps.data.name }}</div>
            </div>
          </template>
        </Column>

        <Column style="min-width: 100px; width: 100px">
          <template #header>
            <div class="text-800 font-semibold">Yo'nalishlar</div>
          </template>
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-sm
                lg:text-base
                xl:text-base
                font-medium
                text-center
              "
            >
              {{ slotProps.data.directions }}
            </div>
          </template>
        </Column>
        <Column :exportable="false" style="min-width: 100px; width: 100px">
          <template #header>
            <div class="text-800 text-sm lg:text-base xl:text-base font-medium">
              Amallar
            </div>
          </template>
          <template #body="slotProps">
            <div class="flex gap-2">
              <edit-button
                :editItem="slotProps.data"
                @editEvent="editItem($event)"
              ></edit-button>
              <delete-button
                :deleteItem="slotProps.data.id"
                @deleteAcceptEvent="deleteItem($event)"
              ></delete-button>
            </div>
          </template>
        </Column>
        <template #footer>
          <table-pagination
            v-show="totalItem > 10"
            :total_page="totalItem"
            :page="params.page"
            :per_page="params.per_page"
            @pagination="changePagination($event)"
          ></table-pagination>
        </template>
      </DataTable>
    </div>
    <div class="col-12">
      <Dialog
        v-model:visible="dialog"
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
              apparatDialogtype
                ? " Xo'jalik qo'shish "
                : "Xo'jalikni tahrirlash"
            }}
          </h6>
        </template>
        <div class="grid pt-2">
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Nomi</h6>
            <InputText
              type="text"
              class="w-full"
              placeholder="Kiriting"
              v-model.trim="apparatName"
              :class="{ 'p-invalid': apparatName_Error && submitted }"
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
    <div class="col-12" v-show="false">
        <Toast position="bottom-right" />
    </div>
  </div>
</template>
<script>
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb.vue";
import TablePagination from "@/components/Pagination/TablePagination";
import SkillService from "@/service/servises/SkillService";
import DeleteButton from "../../components/buttons/DeleteButton.vue";
import EditButton from "../../components/buttons/EditButton.vue";
import NoDataComponent from "../../components/EmptyComponent/NoDataComponent.vue";
export default {
  components: {
    BreadCrumb,
    TablePagination,
    DeleteButton,
    EditButton,
    NoDataComponent,
  },

  data() {
    return {
      List: [],
      selectitem: null,
      apparatDialogtype: true,
      submitted: false,
      dialog: false,

      params: {
        page: 1,
        per_page: 10,
        search: null,
      },

      totalItem: 0,
      apparatName: null,
      apparat_id:null,
    };
  },
  methods: {
    get_skill_Types(params, loader) {
      SkillService.get_Skill_Apparats({ params: params }).then((res) => {
        let number = (this.params.page - 1) * this.params.per_page;
        res.data.apparats.data.forEach((item) => {
          number++;
          item.number = number;
        });
        console.log(res.data.apparats);
        this.List = res.data.apparats.data;
        this.totalItem = res.data.apparats.pagination.total;
      });
    },

    addItem() {
      this.submitted = false;
      this.apparatDialogtype = true;
      this.apparatName = null;
      this.controlDialog(true);
    },
    editItem(event){
        this.submitted = false;
      this.apparatDialogtype = false;
      this.apparatName = event.name;
      this.apparat_id = event.id;
      this.controlDialog(true);
    },

    addAndEdit() {
      this.submitted = true;
      if (!this.apparatName_Error) {
        this.controlDialog(false);
        let data = {
          name: this.apparatName,
        };
        if (this.apparatDialogtype) {
            SkillService.create_Skill_Apparats({data }).then(
            (res) => {
              this.get_skill_Types(this.params, true);
              this.$toast.add({
                severity: "success",
                summary: "Muvofaqqiyatli bajarildi",
                detail: "Qo'shildi",
                life: 2000,
              });
            }
          );
        } else {
          SkillService.update_Skill_Apparats({ apparat_id: this.apparat_id , data }).then(
            (res) => {
              this.get_skill_Types(this.params, true);
              this.$toast.add({
                severity: "success",
                summary: "Muvofaqqiyatli bajarildi",
                detail: "Tahrirlandi",
                life: 2000,
              });
            }
          );
        }
      }
    },
    deleteItem(id) {
      SkillService.delete_Skill_Apparats({ apparat_id: id }).then((res) => {
        this.get_skill_Types(this.params, true);
        this.$toast.add({
            severity: "success",
            summary: "Muvofaqqiyatli bajarildi",
            detail: "O'chirildi",
            life: 2000,
          });
      });
    },
    searchByName() {
      this.get_skill_Types(this.params, true);
    },
    controlDialog(item) {
      this.dialog = item;
    },
  },
  computed: {
    apparatName_Error() {
      if (!this.apparatName) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    this.get_skill_Types(this.params, true);
  },
};
</script>
<style lang="">
</style>