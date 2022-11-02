<template>
    <div class="grid">
        <div class="col-12 flex justify-content-end ">
          <span class="text-base text-primary cursor-pointer"><i class="pi pi-home"></i> Asosiy </span> <span class="text-base cursor-pointer"><span class="px-2 cursor-pointer">/</span> Xodimlar </span>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            matchPath:[
                {
                    name:"Admin",
                    path:"/admin"
                },
                {
                    name:"Xodimlar",
                    path:"/employee"
                },
            ]
        }
    }
}
</script>
<style lang="">
    
</style>