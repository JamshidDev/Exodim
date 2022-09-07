<template >
  <div class="grid card surface-0 shadow-1 p-4">
    <div class="col-12">
            <h6 class="text-base font-medium uppercase">
            Arxiv bo'limi
          </h6>
        </div>
    <div class="col-12 md:col-8 md:col-offset-2 lg:col-4 lg:col-offset-4 xl:col-4 xl:col-offset-4 pt-4 mb-8">
      <div class="grid">
       
        <div class="col-12 pb-0">
          <h6 class=" font-medium uppercase mb-0">
            Arxivdan xodimni izlash
          </h6>
        </div>
        <div class="col-12">
          <div class="flex">
            <span class="p-input-icon-left p-fluid w-full">
              <i class="pi pi-search" />
              <InputText
                type="text"
                v-model="searchValue"
                placeholder="JSHR orqali izlash"
                class="p-inputtext-sm font-medium w-full"
              />
            </span>
            <Button
                icon="pi pi-search"
                label="Izlash"
                class="p-button-secondary p-button-sm ml-1"
              ></Button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 mt-8">
        <history-empty></history-empty>
    </div>
        
  </div>
</template>
<script>
import HistoryEmpty from '../components/EmptyComponent/HistoryEmpty.vue';
export default {
    components:{
        HistoryEmpty,
    },
};
</script>
<style lang="">
</style>