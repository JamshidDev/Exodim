<template>
    <div>
         <Sidebar v-model:visible="detailstShow" :baseZIndex="10000" position="full">
            <h3 class="text-center">Xodim ma'lumotlari</h3>
        </Sidebar> 
    </div>
</template>
<script>
export default {
    props:{
        detailstShow:{
            type: Boolean,
            defaut:false
        }
    },
    data(){
        return{
            visibleFull: true
        }
    }
}
</script>
<style lang="">
    
</style>