<template>
    <div class="grid">
        <div class="col-12">
            <DataTable :value="products" responsiveLayout="scroll" showGridlines>
                <Column field="code"  style="width: 3rem">
                    <template #body>
                        <Skeleton size="2rem" class="mr-2"></Skeleton>
                    </template>
                </Column>
                <Column field="avatar" header="Rasm" style="min-width: 4rem">
                    <template #body>
                        <Skeleton size="5rem"></Skeleton>
                    </template>
                </Column>
                <Column field="fullname" header="F.I.SH" style="min-width: 16rem">
                    <template #body>
                        <Skeleton></Skeleton>
                    </template>
                </Column>
                <Column field="factory" header="Lavozimi" style="min-width: 20rem">
                    <template #body>
                        <Skeleton></Skeleton>
                    </template>
                </Column>
                <Column field="factory" header="Korxona nomi" style="min-width: 16rem">
                    <template #body>
                        <Skeleton></Skeleton>
                    </template>
                </Column>
                <Column field="action "  style="width: 3rem">
                    <template #body>
                        <Skeleton shape="circle" size="3rem" class="mr-2"></Skeleton>
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            products:new Array(10),
      selectedProducts: null,
        }
    }
}
</script>
<style lang="">
    
</style>