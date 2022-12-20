<template>
    <div class="grid">
        <Dialog
        v-model:visible="dialog"
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
            {{ DialogType ? " Yo'nalish qo'shish " : "Ma'sul xodim ma'lumotlarini tahrirlash" }}
          </h6>
        </template>
        <div class="grid pt-2">
            <div class="col-12 flex justify-content-center">
                <Avatar :image="admin.photo"  class="mr-2" size="xlarge" shape="circle" />
            </div>
            <div class="col-12">
            <h6 class="mb-2 pl-2 text-500 font-normal">F.I.SH</h6>
            <InputText
              type="text"
              class="w-full font-semibold"
              id="admin_fullName"
              name="admin_fullName"
              placeholder="Kiriting"
              v-model.trim="admin.fullName"
            />
          </div>

          <div class="col-12">
            <h6 class="mb-1 pl-2 text-500 font-normal">Role</h6>
            <Dropdown
              id="positionPart"
              v-model="admin.role"
              :options="admin.RoleList"
              optionLabel="name"
              :filter="true"
              placeholder="Tanlang"
              class="w-full"
              :class="{ 'p-invalid': apparat_Error && submitted }"
              @change="changeActivity"
            >
              <template #value="slotProps">
                <div v-if="slotProps.value">
                  <div class="font-semibold text-blue-500">{{ slotProps.value.name }}</div>
                </div>
                <span v-else>
                  {{ slotProps.placeholder }}
                </span>
              </template>
              <template #option="slotProps">
                <div class="country-item font-semibold">
                  <div>{{ slotProps.option.name }}</div>
                </div>
              </template>
            </Dropdown>
          </div>

          <div class="col-12">
            <h6 class="mb-1 font-normal pl-2 text-500">Biriktirilgan korxona</h6>
            <Dropdown
              id="positionPart"
              v-model="admin.organization"
              :options="admin.OrganizationList"
              optionLabel="name"
              :filter="true"
              placeholder="Tanlang"
              class="w-full "
              @change="changeActivity"
            >
              <template #value="slotProps">
                <div v-if="slotProps.value">
                  <div class="font-semibold text-green-500">{{ slotProps.value.name }}</div>
                </div>
                <span v-else>
                  {{ slotProps.placeholder }}
                </span>
              </template>
              <template #option="slotProps">
                <div class="country-item">
                  <div>{{ slotProps.option.name }}</div>
                </div>
              </template>
            </Dropdown>
          </div>

          <div class="col-12">
            <h6 class="mb-1 pl-2 text-500 font-normal">Login</h6>
            <InputText
              type="text"
              id="admin_login"
              name="admin_login"
              class="w-full font-semibold"
              placeholder="Kiriting"
              v-model.trim="admin.login"
            />
          </div>
          <div class="col-12">
            <h6 class="mb-1 pl-2 text-500 font-normal">Telefon</h6>
            <InputText
              type="text"
              class="w-full font-semibold"
              id="admin_phone"
              name="admin_phone"
              placeholder="Kiriting"
              v-model.trim="admin.phone"
            />
          </div>
        </div>

        <template #footer>
          <div class="col-12 pt-2">
            <div class="flex justify-content-end">
              <Button
                label="Saqlash"
                class="p-button-secondary p-button-sm"
                @click="addAndEdit()"
              />
            </div>
          </div>
        </template>
      </Dialog>
    </div>
</template>
<script>
import AdminService from '@/service/servises/AdminService'
export default {
    data(){
        return{
            DialogType:false,
            dialog:false,
            admin:{
                RoleList:[],
            role:null,
            OrganizationList:[],
            organization:null,
            fullName:null,
            phone:null,
            login:null,
            photo:''
            },
           
        }
    },
    methods:{
        controllerModal(id){
            this.dialog = true;
            AdminService.update_get_AdminDetails({id}).then((res) =>{
                console.log(res.data.users);
                this.admin.role = res.data.users.roles;
                this.admin.RoleList = res.data.roles;
                this.admin.OrganizationList = res.data.organizations;
                this.admin.organization = res.data.users.organization;
                this.admin.fullName = res.data.users.name;
                this.admin.phone = res.data.users.phone;
                this.admin.login = res.data.users.email;
                this.admin.photo = res.data.users.photo;
            })
        }
    }
}
</script>
<style lang="scss">
    
</style>