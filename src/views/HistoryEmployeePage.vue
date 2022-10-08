<template >
  <div class="grid card surface-0 shadow-1 py-2 px-2">
    <div class="col-12">
      <div class="grid">
        <div class="col-6">
          <h6 class="text-base font-medium uppercase">Arxiv bo'limi</h6>
        </div>
       
      </div>
    </div>
    <div
      class="
        col-12
        md:col-10 md:col-offset-1
        lg:col-10 lg:col-offset-1
        xl:col-6 xl:col-offset-3
        pt-4
        mb-4
      "
    >
      <div class="grid">
        <div class="col-12">
          <div class="flex">
            <span class="p-input-icon-left p-fluid w-full">
              <i class="pi pi-search" />
              <InputText
                type="text"
                v-model="searchValue"
                placeholder="JSHR orqali izlash"
                class=" font-medium w-full"
                @keyup.enter="searchFromArchive"
              />
            </span>
            <Button
              icon="pi pi-search"
              label="Izlash"
              class="p-button-info"
              @click="searchFromArchive"
            ></Button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12" v-if="!archiveCadry">
      <history-empty class="mt-8 pt-8"></history-empty>
    </div>
    <div class="col-12 mb-8" v-show="archiveCadry">
      <div class="grid flex justify-content-center">
        <div class="col-12 xl:col-5 lg:col-10 md:col-10 sm:col-12 pb-0">
          <div class="grid w-full">
            <div class="col-12">
              <Message :closable="false" severity="warn" class="my-0">{{archiveCadry?.comment}}</Message>
            </div>
            <div class="col-12 xl:col-5 lg:col-6 md:col-8 sm:col-12 flex xl:justify-content-start lg:justify-content-start justify-content-center" >
              <Image
                :src="archiveCadry? archiveCadry.photo : ''"
                width="200"
                preview
              />
            </div>
            <div class="col-12 xl:col-7 lg:col-6 md:col-6 sm:col-12">
              <h5 class="text-center uppercase font-medium xl:mb-4">{{archiveCadry?.fullname}}</h5>
              <h5 class="text-yellow-600"> <i class="pi pi-map-marker text-yellow-600 text-lg px-2"></i>
                Xorazm viloyati, Shovot tumani, Beglar ko'chasi 51-uy
              </h5>
              <Button
              icon="pi pi-check-circle"
              label="Ishga qabul qilish"
              class="p-button-success w-full mt-4"
              @click="searchFromArchive"
            ></Button>


            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HistoryEmpty from "../components/EmptyComponent/HistoryEmpty.vue";
import Archive from "../service/servises/Archive"
export default {
  components: {
    HistoryEmpty,
  },
  data(){
    return{
      searchValue:null,
      archiveCadry:null,
      loader:false,
    }
  },
  methods:{
    searchFromArchive(){
      Archive.findCadryByJSHR({pinfl: this.searchValue}).then((res)=>{
        this.archiveCadry = res.data.cadries?.data[0]
      })
    }
  }
};
</script>
<style lang="">
</style>