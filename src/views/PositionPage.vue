<template >
  <div class="grid card surface-0 shadow-1 py-2 px-2">
    <h6 class="text-lg p-2">Shtat lavozimlari ro'yhati</h6>
    <div class="col-12">
      <DataTable
        ref="dt"
        :value="positionList"
        v-model:selection="selectedProducts"
        dataKey="positionName"
        :paginator="true"
        :rows="10"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
        responsiveLayout="scroll"
        showGridlines
        class="pb-6 pt-2"
      >
        <template #header>
          <div class="flex justify-content-between w-full">
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText
                type="text"
                v-model="searchValue"
                placeholder="Qidiruv"
                class="p-inputtext-sm"
              />
            </span>
            <div>
              <SplitButton
                label="Saralash"
                icon="pi pi-filter"
                @click="save"
                :model="nestedItems"
                class="p-button-secondary p-button-sm mr-3"
              ></SplitButton>
              <Button icon="pi pi-plus" label="Qo'shish" class="p-button-secondary p-button-sm"></Button>
            </div>
          </div>
        </template>

        <Column
          field="positionName"
          header="Lavozim nomi"
          style="min-width: 16rem"
        >
          <template #body="slotProps">
            <div
              class="flex font-medium"
              :class="[
                slotProps.data.positionCount > slotProps.data.positionFakt &&
                  'text-green-500',
                slotProps.data.positionCount < slotProps.data.positionFakt &&
                  'text-red-500',
              ]"
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
        <Column field="positionCount" header="Soni" style="min-width: 4rem">
          <template #body="slotProps">
            <div class="flex font-medium">
              {{ slotProps.data.positionCount }}
            </div>
          </template>
        </Column>
        <Column :exportable="false" style="min-width: 10rem">
          <template #body="slotProps">
            <div class="flex justify-content-center">
              <Button
                icon="pi pi-user"
                class="p-button-rounded p-button-secondary"
                v-tooltip="`Xodimlarni ko'rish`"
                @click="confirmDeleteProduct(slotProps.data)"
              />
              <Button
                icon="pi pi-pencil"
                class="p-button-rounded p-button-secondary mx-4"
                v-tooltip="`Tahrirlash`"
                @click="confirmDeleteProduct(slotProps.data)"
              />
              <Button
                icon="pi pi-trash"
                class="p-button-rounded p-button-danger"
                v-tooltip="`O'chirish`"
                @click="confirmDeleteProduct(slotProps.data)"
              />
            </div>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchValue: null,
      nestedItems: [
        {
          label: "Vakansiya",
          icon: "pi pi-sort-amount-down",
        },
          {
          label: "Sverx",
          icon: "pi pi-sort-amount-down",
        },
      ],
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
    };
  },
};
</script>
<style lang="scss">
</style>