<template>
    <Dialog
        :closable="false"
        v-model:visible="dialog"
        :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
        :style="{ width: '50vw' }"
        :modal="true"
      >
        <template #header>
          <div class="col-12">
            <div class="flex justify-content-center">
              <i class="pi pi-shield text-yellow-500 text-6xl mb-2"></i>
            </div>
            <p
              class="
                text-center
                uppercase
                text-yellow-500
                w-full
                text-2xl
                font-semibold
              "
            >
              Mavjud xodim
            </p>
          </div>
        </template>
        <div class="grid">
          <div class="col-12">
            <div class="text-left font-medium text-lg">
              Korxona nomi - <span class="pl-2 text-yellow-600">Arxiv</span>
            </div>
          </div>
          <div class="col-12">
            <div class="text-left font-medium text-lg">
              Xodim F.I.SH -
              <span class="pl-2 text-yellow-600"
                >Jamshid Raximov Shuxrat o'g'li</span
              >
            </div>
          </div>
        </div>

        <template #footer>
          <div class="col-12">
            <div class="flex justify-content-center">
              <Button
                label="Tushunarli"
                class="p-button-warning"
                @click="controlDialog(item)"
              />
            </div>
          </div>
        </template>
      </Dialog>
</template>
<script>
export default {
    data(){
        return{
            dialog:false
        }
    },
    methods:{
        controlDialog(item){
            this.dialog = item
        }
    }
}
</script>
<style lang="">
    
</style>