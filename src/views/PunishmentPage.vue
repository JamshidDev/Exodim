<template >
    <div class="grid card surface-0 shadow-1 py-2 px-2">
    <h6 class="text-base p-2 uppercase">Intizomiy jazolanganlar</h6>
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
                width="20"
                height="20"
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
            {{slotProps.data.disciplinary_count  }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 180px; width: 180px">
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
            {{slotProps.data.disciplinaries[0].number  }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 200px; width: 280px">
          <template #header>
            <div class="text-800 font-semibold">Jazo sababi</div>
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
            {{slotProps.data.disciplinaries[0].reason_action  }}
            </div>
          </template>
        </Column>
        <Column style="min-width: 200px; width: 280px">
          <template #header>
            <div class="text-800 font-semibold">Jazo turi</div>
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
            {{slotProps.data.disciplinaries[0].type_action  }}
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
            {{ formatter.arrowDateFormat(slotProps.data.disciplinaries[0].created_at)  }}
            </div>
          </template>
        </Column>
        <template #footer>
            <table-pagination></table-pagination>
          <!-- <table-pagination
            v-show="totalPage > 10"
            :total_page="totalPage"
            @pagination="changePagination($event)"
          ></table-pagination> -->
        </template>
      </DataTable>
    </div>
    <div class="col-12" v-show="loader">
      <med-loader></med-loader>
    </div>
    <!-- <div class="col-12">
      <Toast position="bottom-right" />

      <Dialog
        v-model:visible="med_dialog"
        :breakpoints="{
          '1960px': '30vw',
          '1600px': '40vw',
          '1200px': '70vw',
          '960px': '80vw',
          '640px': '90vw',
        }"
        :style="{ width: '50vw' }"
        :modal="true"
      >
        <template #header>
          <h6 class="uppercase text-lg text-blue-500 font-medium">
            Tibbiy ko'rik hulosasini qo'shish
          </h6>
        </template>
        <div class="grid pt-2">
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Xodimni tanlang</h6>
            <Dropdown
              id="positionPart"
              v-model="med_fullName"
              :options="med_cadryList"
              optionLabel="fullname"
              :filter="true"
              placeholder="Tanlang"
              class="w-full"
              :class="{ 'p-invalid': cadry_Error && med_submitted }"
            >
              <template #value="slotProps">
                <div class="font-semibold" v-if="slotProps.value">
                  <div>{{ slotProps.value.fullname }}</div>
                </div>
                <span v-else class="font-semibold">
                  {{ slotProps.placeholder }}
                </span>
              </template>
              <template #option="slotProps">
                <div class="country-item">
                  <div>{{ slotProps.option.fullname }}</div>
                </div>
              </template>
            </Dropdown>
          </div>
          <div class="col-6">
            <h6 class="mb-2 pl-2 text-500">Oxirgi o'tgan sanasi</h6>
            <Calendar
              class="w-full font-semibold"
              :manualInput="true"
              id="positionFirstDate"
              v-model="med_date1"
              dateFormat="dd/mm/yy"
              v-maska="'##/##/####'"
              placeholder="Sanani tanlang"
              :class="{ 'p-invalid': cadry_Date1 && med_submitted }"
            />
          </div>
          <div class="col-6">
            <h6 class="mb-2 pl-2 text-500">Keyingi o'tish sanasi</h6>
            <Calendar
              class="w-full font-semibold"
              :manualInput="true"
              v-model="med_date2"
              dateFormat="dd/mm/yy"
              v-maska="'##/##/####'"
              placeholder="Sanani tanlang"
              :class="{ 'p-invalid': cadry_Date2 && med_submitted }"
            />
          </div>
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Izoh</h6>
            <Textarea
              class="w-full font-semibold"
              placeholder="Kiriting"
              id="employeePhone"
              v-model="med_comment"
              :autoResize="true"
              rows="1"
              :class="{ 'p-invalid': cadry_Comment && med_submitted }"
            />
          </div>
        </div>

        <template #footer>
          <div class="col-12 pt-2">
            <div class="flex justify-content-end">
              <Button
                label="Saqlash"
                class="p-button-secondary p-button-sm"
                @click="AddMed()"
              />
            </div>
          </div>
        </template>
      </Dialog>
      <Dialog
        v-model:visible="new_dialog"
        :breakpoints="{
          '1960px': '30vw',
          '1600px': '40vw',
          '1200px': '70vw',
          '960px': '80vw',
          '640px': '90vw',
        }"
        :style="{ width: '50vw' }"
        :modal="true"
      >
        <template #header>
          <h6 class="uppercase text-lg text-green-500 font-medium">
            Tibbiy ko'rik hulosasini yangilash
          </h6>
        </template>
        <div class="grid pt-2">
          <div class="col-6">
            <h6 class="mb-2 pl-2 text-500">Oxirgi o'tgan sanasi</h6>
            <Calendar
              class="w-full font-semibold"
              :manualInput="true"
              id="positionFirstDate"
              v-model="refresh_date1"
              dateFormat="dd/mm/yy"
              v-maska="'##/##/####'"
              placeholder="Sanani tanlang"
              :class="{ 'p-invalid': cadry_ref_date1 && refresh_submitted }"
            />
          </div>
          <div class="col-6">
            <h6 class="mb-2 pl-2 text-500">Keyingi o'tish sanasi</h6>
            <Calendar
              class="w-full font-semibold"
              :manualInput="true"
              v-model="refresh_date2"
              dateFormat="dd/mm/yy"
              v-maska="'##/##/####'"
              placeholder="Sanani tanlang"
              :class="{ 'p-invalid': cadry_ref_date2 && refresh_submitted }"
            />
          </div>
          <div class="col-12">
            <h6 class="mb-2 pl-2 text-500">Izoh</h6>
            <Textarea
              class="w-full font-semibold"
              placeholder="Kiriting"
              id="employeePhone"
              v-model="refresh_comment"
              :autoResize="true"
              rows="1"
              :class="{ 'p-invalid': cadry_ref_comment && refresh_submitted }"
            />
          </div>
        </div>

        <template #footer>
          <div class="col-12 pt-2">
            <div class="flex justify-content-end">
              <Button
                label="Saqlash"
                class="p-button-secondary p-button-sm"
                @click="refreshMed()"
              />
            </div>
          </div>
        </template>
      </Dialog>
    </div> -->
  </div>
</template>
<script>
import punishmentService from '@/service/servises/punishmentService'
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
        get_Punishment(params, loader){
            punishmentService.get_punishment(params).then((res)=>{
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
            this.get_Punishment(this.params, true)
        },
    },
    created(){
        this.get_Punishment(this.params, true)
    }
}
</script>
<style lang="">
    
</style>