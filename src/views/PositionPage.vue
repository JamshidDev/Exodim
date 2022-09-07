<template >
  <div class="grid card surface-0 shadow-1 py-2 px-2">
    <h6 class="text-base p-2 uppercase">Shtat lavozimlari jadvali</h6>
    <div class="col-12">
      <DataTable
      contextMenu 
      v-model:contextMenuSelection="selectedProduct"
        ref="dt"
        :value="positionList"
        @rowContextmenu="onRowContextMenu"
        dataKey="positionName"
        :paginator="true"
        :rows="10"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Ko'rish {first} dan {last} gacha {totalRecords} dan"
        responsiveLayout="scroll"
        showGridlines
        class="pb-6 pt-2 p-datatable-sm"
      >
        <template #header>
          <div class="grid">
            <div class="col-12 md:col-6 lg:col-6 xl:col-6">
              <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText
                  type="text"
                  v-model="searchValue"
                  placeholder="Qidiruv"
                  class="p-inputtext-sm "
                />
              </span>
            </div>
            <div
              class="col-12 md:col-6 lg:col-6 xl:col-6 flex xl:justify-content-end lg:justify-content-end md:justify-content-end justify-content-center"
            >
              <SplitButton
                label="Eksport"
                :model="items"
                class="p-button-sm p-button-secondary mr-2"
              ></SplitButton>
              <Button
                icon="pi pi-plus"
                label="Qo'shish"
                class="p-button-secondary p-button-sm"
              ></Button>
            </div>
          </div>
        </template>

        <Column
          field="positionName"
          header="Shtat lavozim nomi"
          style="min-width: 16rem"
        >
          <template #body="slotProps">
            <div
              class="flex font-medium"
            >
              {{ slotProps.data.positionName }}
            </div>
          </template>
        </Column>

        <Column
          field="positionCategory"
          header="Kategoriya"
          style="min-width: 4rem"
        >
          <template #body="slotProps">
            <div class="flex font-medium">
              {{ slotProps.data.positionCategory }}
            </div>
          </template>
        </Column>
        <Column field="positionCount" header="Xodimlar" style="min-width: 4rem">
          <template #body="slotProps">
            <div class="flex font-medium">
              {{ slotProps.data.positionCount }}
            </div>
          </template>
        </Column>
      </DataTable>
      <ContextMenu :model="menuModel" ref="cm" class="font-medium" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchValue: null,
      positionList: [
        {
          positionName: `Boshqaruv raisi`,
          positionCategory: `БХ`,
          positionCount: 1,
          positionFakt: 1,
        },
        {
          positionName: `Boshqarma boshlig'i`,
          positionCategory: `БХ`,
          positionCount: 2,
          positionFakt: 1,
        },
        {
          positionName: `Boshqarma boshlig'i o'rinbosari`,
          positionCategory: `БХ`,
          positionCount: 1,
          positionFakt: 1,
        },
        {
          positionName: `Raxbar kadrlar bo'lim boshlig'i`,
          positionCategory: `М`,
          positionCount: 1,
          positionFakt: 1,
        },
        {
          positionName: `Bosh mutaxasis`,
          positionCategory: `М`,
          positionCount: 1,
          positionFakt: 1,
        },
        {
          positionName: `Boshqaruv raisisning yordamchisi`,
          positionCategory: `М`,
          positionCount: 1,
          positionFakt: 1,
        },
        {
          positionName: `Boshqaruv raisisning 1-o'rinbosari yordamchisi`,
          positionCategory: `М`,
          positionCount: 1,
          positionFakt: 5,
        },
        {
          positionName: `Ishchi kadrlar bo'lim boshlig'i`,
          positionCategory: `БХ`,
          positionCount: 1,
          positionFakt: 1,
        },
        {
          positionName: `Bosh mutaxassis`,
          positionCategory: `БХ`,
          positionCount: 2,
          positionFakt: 1,
        },
        {
          positionName: `Muxandis`,
          positionCategory: `М`,
          positionCount: 1,
          positionFakt: 1,
        },
        {
          positionName: `Muxandis`,
          positionCategory: `М`,
          positionCount: 1,
          positionFakt: 1,
        },
        {
          positionName: `Muxandis`,
          positionCategory: `М`,
          positionCount: 1,
          positionFakt: 1,
        },
        {
          positionName: `Muxandis`,
          positionCategory: `М`,
          positionCount: 1,
          positionFakt: 1,
        },
        {
          positionName: `Muxandis`,
          positionCategory: `М`,
          positionCount: 1,
          positionFakt: 1,
        },
        {
          positionName: `Muxandis`,
          positionCategory: `М`,
          positionCount: 1,
          positionFakt: 1,
        },
        {
          positionName: `Muxandis`,
          positionCategory: `М`,
          positionCount: 1,
          positionFakt: 1,
        },
        {
          positionName: `Muxandis`,
          positionCategory: `М`,
          positionCount: 1,
          positionFakt: 1,
        },
        {
          positionName: `Muxandis`,
          positionCategory: `М`,
          positionCount: 1,
          positionFakt: 1,
        },
      ],
      items: [
        {
          label: "Pdf",
          icon: "pi pi pi-copy",
          command: () => {
            this.$toast.add({
              severity: "success",
              summary: "Updated",
              detail: "Data Updated",
              life: 3000,
            });
          },
        },
        {
          label: "Exel",
          icon: "pi pi pi-copy",
          command: () => {
            this.$toast.add({
              severity: "success",
              summary: "Updated",
              detail: "Data Updated",
              life: 3000,
            });
          },
        },
        {
          label: "Printer",
          icon: "pi pi-print",
          command: () => {
            this.$toast.add({
              severity: "success",
              summary: "Updated",
              detail: "Data Updated",
              life: 3000,
            });
          },
        },
      ],
      selectedProduct: null,
            menuModel: [
            {label: "Xodimlarni ko'rish", icon: 'pi pi-users', command: () => this.logItem(this.selectedProduct) },
                {label: 'Tahrirlash', icon: 'pi pi-pencil', command: () => this.logItem(this.selectedProduct) },
                {label: "O'chirish", icon: 'pi pi-trash', command: () =>  this.logItem(this.selectedProduct)}
            ]
    };
  },
  methods:{
    onRowContextMenu(event) {
            this.$refs.cm.show(event.originalEvent);
        },
        logItem(item){
          console.log(item);
        }
  }
};
</script>
<style lang="scss">
</style>