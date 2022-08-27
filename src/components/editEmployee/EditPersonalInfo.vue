<template>
     <div class="grid card py-4 px-3">
         <div class="col-12">
            <div class="flex justify-content-end">
                 
             <Button
              icon="pi pi-trash"
              @click="handleSubmit(!v$.$invalid)"
              class="p-button-danger p-button-sm mx-2"
              label="Yakunlash"
              v-tooltip.bottom="`Xodim mehnat faoliyatini yakunlash`"
            />
             <Button
              icon="pi pi-save"
              @click="handleSubmit(!v$.$invalid)"
              class="p-button-secondary p-button-sm "
              label="Saqlash"
              v-tooltip.bottom="`Ma'lumotlarni qayta saqlash`"
            />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>