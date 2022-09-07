<template >
  <div class="grid card surface-0 shadow-1 py-2 px-2">
    <h6 class="text-base p-2 uppercase">Bo'limlar</h6>
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
                  class="p-inputtext-sm"
                />
              </span>
            </div>
            <div
              class="
                col-12
                md:col-6
                lg:col-6
                xl:col-6
                flex
                xl:justify-content-end
                lg:justify-content-end
                md:justify-content-end
                justify-content-center
              "
            >
              <SplitButton
                label="Saralash"
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
          header="Bo'lim nomi"
          style="min-width: 16rem"
        >
          <template #body="slotProps">
            <div class="flex text-base font-medium" :class="[slotProps.data.positionFakt >slotProps.data.positionCount? 'text-green-500' : slotProps.data.positionFakt <slotProps.data.positionCount? 'text-red-500': '' ]">
              {{ slotProps.data.positionName }}
            </div>
          </template>
        </Column>
        <Column field="positionCount" header="Ish o'rinlari (Plan)" style="min-width: 8rem">
          <template #body="slotProps">
            <div class="flex font-medium text-base">
              {{ slotProps.data.positionFakt }}
            </div>
          </template>
        </Column>

        <Column
          field="positionCategory"
          header="Vakant / Sverx"
          style="min-width: 8rem"
        >
          <template #body="slotProps">
            <div class="flex font-medium">

              <span class="text-medium text-base pr-1" :class="[slotProps.data.positionFakt >slotProps.data.positionCount? 'text-green-500' : ' ']"> {{slotProps.data.positionFakt >slotProps.data.positionCount ? slotProps.data.positionFakt - slotProps.data.positionCount : '0'  }}</span> /
              <span class="text-medium text-base pl-1" :class="[slotProps.data.positionCount >slotProps.data.positionFakt? 'text-red-500' : ' ']" > {{slotProps.data.positionCount >slotProps.data.positionFakt ? slotProps.data.positionCount - slotProps.data.positionFakt : '0'  }}</span> 
            </div>
          </template>
        </Column>
        <Column field="positionCount" header="Xodimlar" style="min-width: 4rem">
          <template #body="slotProps">
            <div class="flex font-medium text-base">
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
          label: "Vakant",
          icon: "pi pi-sort-amount-down",
          command: () => {

          },
        },
        {
          label: "Sverx",
          icon: "pi pi-sort-amount-down",
          command: () => {
            
          },
        },
      ],
      selectedProduct: null,
      menuModel: [
      {
          label: "Shtat lavozimlari",
          icon: "pi pi-align-center",
          command: () => this.logItem(this.selectedProduct),
        },
        {
          label: "Xodimlarni ko'rish",
          icon: "pi pi-users",
          command: () => this.logItem(this.selectedProduct),
        },
        {
          label: "Tahrirlash",
          icon: "pi pi-pencil",
          command: () => this.logItem(this.selectedProduct),
        },
        {
          label: "O'chirish",
          icon: "pi pi-trash",
          command: () => this.logItem(this.selectedProduct),
        },
      ],
    };
  },
  methods: {
    onRowContextMenu(event) {
      this.$refs.cm.show(event.originalEvent);
    },
    logItem(item) {
      console.log(item);
    },
  },
};
</script>
<style lang="scss">
</style>