<template >
  <div class="grid card py-4 px-3">
    <div class="col-12 mb-4 border-1 border-300 border-round-sm py-4 ">
      <DataTable
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
        class="pb-6"
        :reorderableColumns="true"  @rowReorder="onRowReorder"
      >
        <template #header>
          <div class="grid">
            <div class="col-6">
              <h5 class="text-base md:m-0 p-as-md-center uppercase text-blue-600">
                Mehnat faoliyati
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
        <Column
          :rowReorder="true"
          headerStyle="width: 3rem"
          :reorderableColumn="false"
        />
        <Column header="Qachondan" style="min-width: 1rem">
          <template #body="slotProps">
            <div
              class="flex justify-content-center cursor-pointer font-semibold"
            >
              2022
              <div v-show="false">{{ slotProps.data.name }}</div>
            </div>
           
          </template>
        </Column>
        <Column field="name" header="Qachongacha" style="min-width: 1rem">
          <template #body="slotProps">
            <div
              class="flex justify-content-center cursor-pointer font-semibold"
            >
              2022
              <div v-show="false">{{ slotProps.data.name }}</div>
            </div>
          </template>
        </Column>

        <Column field="rating" header="Lavozim" style="min-width: 20rem">
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
              <!-- Toshkent temir yo'l transporti muhandislari instituti -->
              <div v-show="true">{{ slotProps.data.name }}</div>
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
                @click="controlUniversityDialog(true)"
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

       <!-- University Dialog -->
       <div class="col-12">
      <Dialog
        v-model:visible="universityDialog"
        :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
        :style="{ width: '50vw' }"
        :modal="true"
        header="Mehnat faoliyatini qo'shish"
      >
        <div class="grid pt-2">
          <div class="col-12 sm:col-6 md:col-6 lg:col-6 xl:col-6">
            <h6 class="mb-2 pl-2">Qachondan</h6>
            <InputText
              type="text"
              class="w-full"
              placeholder="Yilni kiriting"
              id="employeePhone"
              v-model="workStartDate"
              v-maska="'####'"
            />
          </div>
          <div class="col-12 sm:col-6 md:col-6 lg:col-6 xl:col-6">
            <h6 class="mb-2 pl-2">Qachongacha</h6>
            <InputText
              type="text"
              class="w-full"
              placeholder="Yilni kiriting"
              id="employeePhone"
              v-model="workEndDate"
              v-maska="'####'"
            />
          </div>
        
          <div class="col-12">
            <h6 class="mb-2 pl-2">Lavozimi</h6>
            <Textarea
              class="w-full"
              placeholder="Lavozim to'liq nomi kiriting"
              id="employeePhone"
              v-model="workTitle"
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

    .
  </div>
</template>
<script>
export default {
  data() {
    return {
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
        {
          id: "1000",
          code: "f230fh0g3",
          name: "Raximov" ,
          description: "Product Description",
          image: "bamboo-watch.jpg",
          price: 65,
          category: "Accessories",
          quantity: 24,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1000",
          code: "f230fh0g3",
          name: "Raximov Jamshid",
          description: "Product Description",
          image: "bamboo-watch.jpg",
          price: 65,
          category: "Accessories",
          quantity: 24,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
      ],

      universityDialog: false,
      selectedProducts:null,

      workStartDate:null,
      workEndDate:null,
      workTitle:null,



    };
  },

  methods: {
    controlUniversityDialog(item) {
      this.universityDialog = item;
    },
    onRowReorder(event) {
        console.log(event.value);
      this.university = event.value;
    },
  },
};
</script>
<style lang="">
</style>