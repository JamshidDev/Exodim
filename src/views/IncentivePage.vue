<template >
    <div class="grid card surface-0 shadow-1 py-2 px-2">
    <h6 class="text-base p-2 uppercase">Rag'batlantirilgan xodimlar</h6>
    <div class="col-12" v-show="!loader">
      <DataTable
        ref="dt"
        :value="punishmentList"
        dataKey="id"
        responsiveLayout="scroll"
        showGridlines
        class="p-datatable-sm"
        stripedRows
      >
        <template #header>
          <div class="grid">
            <div class="col-6">
              <InputText
                type="text"
                v-model="searchCadryName"
                placeholder="Ism orqali qidiruv"
                class="p-inputtext-sm"
                @keyup.enter="searchByName()"
              />
            </div>
            <div class="col-6 flex justify-content-end">
            </div>
          </div>
        </template>
        <Column header="" style="min-width: 30px; width: 40px">
          <template #body="slotProps">
            <div class="w-full text-center text-lg font-semibold">
              {{ slotProps.data.number }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 60px; width: 60px">
          <template #header>
            <div class="text-800 font-semibold">Rasm</div>
          </template>
          <template #body="slotProps">
            <div class="flex justify-content-center">
              <Image
                :src="slotProps.data.photo"
                :alt="slotProps.data.fullname"
                width="30"
                height="30"
                preview
              />
            </div>
          </template>
        </Column>
        <Column style="min-width: 16rem">
          <template #header>
            <div class="text-800 font-semibold">F.I.SH</div>
          </template>
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-md
                lg:text-lg
                xl:text-lg
                font-medium
              "
            >
              {{ slotProps.data.fullname }}
            </div>
          </template>
        </Column>

        <Column style="min-width: 80px; width: 80px">
          <template #header>
            <div class="text-800 font-semibold">Soni</div>
          </template>
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-md
                lg:text-lg
                xl:text-lg
                font-medium
                text-center
              "
            >
            {{slotProps.data.incentives_count  }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 120px; width: 120px">
          <template #header>
            <div class="text-800 font-semibold">Prikaz raqami</div>
          </template>
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-md
                lg:text-lg
                xl:text-lg
                text-center
                font-medium
              "
          
            >
            {{slotProps.data.incentives[0].number  }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 200px; width: 280px">
          <template #header>
            <div class="text-800 font-semibold">Rag'batlantirish sababi</div>
          </template>
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-md
                lg:text-lg
                xl:text-lg
                text-left
                font-medium
              "
              
            >
            {{slotProps.data.incentives[0].type_reason  }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 200px; width: 280px">
          <template #header>
            <div class="text-800 font-semibold">Rag'batlantirish turi</div>
          </template>
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-md
                lg:text-lg
                xl:text-lg
                text-center
                font-medium
              "
              
            >
            {{slotProps.data.incentives[0].type_action  }}
            </div>
          </template>
        </Column>

        <Column style="min-width: 120px; width: 120px">
          <template #header>
            <div class="text-800 font-semibold">Sanasi</div>
          </template>
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-md
                lg:text-lg
                xl:text-lg
                text-center
                font-medium
              "
              
            >
            {{ formatter.arrowDateFormat(slotProps.data.incentives[0].created_at)  }}
            </div>
          </template>
        </Column>
        <template #footer>
        </template>
      </DataTable>
    </div>
    <div class="col-12" v-show="loader">
      <med-loader></med-loader>
    </div>
  
      <Toast position="bottom-right" />

      
    
  </div>
</template>
<script>
import IncentiveService from '@/service/servises/IncentiveService'
import formatter from '@/util/formatter'
import TablePagination from '@/components/Pagination/TablePagination'
export default {
    components:{
        TablePagination,
    },
    data(){
        return{
            loader:false,
            punishmentList:[],
            params:{
                page:1,
                per_page:10,
                search:null,
            },
            searchCadryName:null,
            formatter,
            totalPage:0,
        }
    },
    methods:{
        get_Incentive(params, loader){
            IncentiveService.get_Incentive(params).then((res)=>{
                console.log(res.data);
                this.totalPage = res.data.cadries.pagination.total
                let number = (this.params.page - 1) * this.params.per_page;
          res.data.cadries.data.forEach((item) => {
            number++;
            item.number = number;
          });

                this.punishmentList = res.data.cadries.data
            }).catch((error)=>{
                console.log(error);
            })
        },
        searchByName(){
            this.params.search = this.searchCadryName;
            this.get_Incentive(this.params, true)
        },
    },
    created(){
        this.get_Incentive(this.params, true)
    }
}
</script>
<style lang="">
    
</style>