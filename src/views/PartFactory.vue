<template >
    <div class="grid card surface-0 shadow-1 py-2 px-2">
      <h6 class="text-lg p-2">Bo'limlar</h6>
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
              
                <Button icon="pi pi-plus" label="Qo'shish" class="p-button-secondary p-button-sm"></Button>
              </div>
            </div>
          </template>
  
          <Column
            field="positionName"
            header="Bo'lim nomi"
            style="min-width:20rem"
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
            header="Shtat birligi (Plan)"
            style="min-width: 4rem"
          >
            <template #body="slotProps">
              <div class="flex justify-content-center text-lg font-semibold">
                {{ slotProps.data.positionCategory }}
              </div>
            </template>
          </Column>
          <Column field="positionCount" header="Vakant va Sverx" style="min-width: 4rem">
            <template #body="slotProps">
              <div class="flex justify-content-center text-lg font-semibold">
                {{ slotProps.data.positionCount }} / 0
              </div>
            </template>
          </Column>
          <Column field="positionCount" header="Xodimlar soni" style="min-width: 4rem">
            <template #body="slotProps">
              <div class="flex justify-content-center text-lg font-semibold">
                {{ slotProps.data.positionCount }}
              </div>
            </template>
          </Column>
          <Column field="positionCount" header="Shtatlar" style="min-width: 4rem">
            <template #body="slotProps">
              <div class="flex justify-content-center font-medium">
                <Button
                  icon="pi pi-align-center"
                  class="p-button-rounded p-button-secondary"
                  v-tooltip.bottom="`Biriktirilgan shtat lavozimlari`"
                  @click="confirmDeleteProduct(slotProps.data)"
                />
               <div v-show="false"> {{ slotProps.data.positionCount }}</div>
              </div>
            </template>
          </Column>
          <Column :exportable="false" style="min-width: 4rem">
            <template #body="slotProps">
              <div class="flex justify-content-center">
                <Button
                  icon="pi pi-user"
                  class="p-button-rounded p-button-secondary"
                  v-tooltip.left="`Xodimlarni ko'rish`"
                  @click="confirmDeleteProduct(slotProps.data)"
                />
                <Button
                  icon="pi pi-pencil"
                  class="p-button-rounded p-button-secondary mx-4"
                  v-tooltip.left="`Tahrirlash`"
                  @click="confirmDeleteProduct(slotProps.data)"
                />
                <Button
                  icon="pi pi-trash"
                  class="p-button-rounded p-button-danger"
                  v-tooltip.left="`O'chirish`"
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
        positionList: [
          {
            positionName: `NOK`,
            positionCategory: `2`,
            positionCount: 1,
            positionFakt: 1,
          },
          {
            positionName: `NGK`,
            positionCategory: `6`,
            positionCount: 2,
            positionFakt: 1,
          },
          
        ],
      };
    },
  };
  </script>
  <style lang="scss">
  </style>