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
          {{
            DialogType
              ? " Yo'nalish qo'shish "
              : "Ma'sul xodim ma'lumotlarini tahrirlash"
          }}
        </h6>
      </template>
      <div class="grid pt-2" v-show="!loading">
        <div class="col-12 flex justify-content-center">
          <Avatar
            :image="admin.photo"
            class="mr-2"
            size="xlarge"
            shape="circle"
          />
        </div>
        <div class="col-12">
          <h6 class="mb-1 pl-2 text-500 font-normal">F.I.SH</h6>
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
          >
            <template #value="slotProps">
              <div v-if="slotProps.value">
                <div class="font-semibold text-blue-500">
                  {{ slotProps.value.name }}
                </div>
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
          <h6 class="mb-1 font-normal pl-2 text-500">Katta korxona</h6>
          <Dropdown
            id="positionPart"
            v-model="railway_value"
            :options="railway_List"
            optionLabel="name"
            :filter="true"
            placeholder="Tanlang"
            class="w-full"
          >
            <template #value="slotProps">
              <div v-if="slotProps.value">
                <div class="font-semibold text-green-500">
                  {{ slotProps.value.name }}
                </div>
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
          <h6 class="mb-1 font-normal pl-2 text-500">Biriktirilgan korxona</h6>
          <Dropdown
            id="positionPart"
            v-model="organization_value"
            :options="organization_List"
            optionLabel="name"
            :filter="true"
            placeholder="Tanlang"
            class="w-full"
          >
            <template #value="slotProps">
              <div v-if="slotProps.value">
                <div class="font-semibold text-green-500">
                  {{ slotProps.value.name }}
                </div>
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

        <div class="col-12 xl:col-6 lg:col-6">
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
        <div class="col-12 xl:col-6 lg:col-6">
          <h6 class="mb-1 pl-2 text-500 font-normal">Telefon</h6>
          <InputText
            type="text"
            class="w-full font-semibold"
            id="admin_phone"
            name="admin_phone"
            placeholder="Kiriting"
            v-model.trim="admin.phone"
            v-maska="'998(##)-###-##-##'"
          />
        </div>
        <div class="col-12">
          <div class="grid p-0">
            <div class="col-6 flex justify-content-start">
              <Button
              label="Bloklash"
              icon="pi pi-hashtag"
              class="p-button-danger p-button-sm"
            />
            </div>
           
            <div class="col-6 flex justify-content-end">
              <Button
                label="Parol"
                icon="pi pi-key"
                class="p-button-danger p-button-sm"
                @click="reset_admin_password()"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="grid pt-2" v-show="loading">
        <progress-bar-loader :min_height="'450px'"></progress-bar-loader>
      </div>

      <template #footer>
        <div class="col-12 pt-2">
          <div class="flex justify-content-end">
            <Button
              label="Saqlash"
              icon="pi pi-save"
              class="p-button-success p-button-sm"
              @click="update_admin_details()"
            />
          </div>
        </div>
      </template>
    </Dialog>
    <div class="col-12">
      <Toast position="top-left" group="tl" />
    </div>
  </div>
</template>
<script>
import ProgressBarLoader from "../../../components/loaders/ProgressBarLoader.vue";
import AdminService from "@/service/servises/AdminService";
import organizationsService from '@/service/servises/organizationsService'
export default {
  components: {
    ProgressBarLoader,
  },

  data() {
    return {
      DialogType: false,
      loading: false,
      dialog: false,
      admin_id:null,
      admin: {
        RoleList: [],
        role: null,
        fullName: null,
        phone: null,
        login: null,
        photo: "",
      },
      railway_List:[],
      railway_value:null,
      organization_List:[],
      organization_value:null,
    };
  },
  methods: {
    controllerModal(id) {
      this.dialog = true;
      this.loading = true;
      this.admin_id = id;
      AdminService.update_get_AdminDetails({ id }).then((res) => {
        console.log(res.data.users);
        this.admin.role = res.data.users.roles;
        this.admin.RoleList = res.data.roles;
        this.organization_value= {
          id :res.data.users.organization.id, 
          name :res.data.users.organization.name, 
          order :res.data.users.organization.order, 
        };
        this.railway_value = res.data.users.organization.railway;
        this.admin.fullName = res.data.users.name;
        this.admin.phone = res.data.users.phone;
        this.admin.login = res.data.users.email;
        this.admin.photo = res.data.users.photo;
        this.loading = false;

        this.get_Organization(res.data.users.organization.railway.id)
      });
    },
    get_Railway(){
      organizationsService.get_Railway().then((res) =>{
        this.railway_List = res.data;
      })
    },
    get_Organization(id){
      organizationsService.get_Organization({railway_id:id}).then((res) =>{
        this.organization_List = res.data;
      })
    },
    update_admin_details(){
      this.dialog = false;
      let params ={
        photo:null,
        name:this.admin.fullName,
        email:this.admin.login,
        password:null,
        role_id:this.admin.role.id,
        organization_id:this.organization_value.id,
        railway_id:this.railway_value.id,
        phone:this.admin.phone,

      }
      AdminService.update_AdminDetails({id:this.admin_id , data:params}).then((res) =>{
        this.$emit('success_update')
        this.$toast.add({severity:'success', summary: "Admin ma'lumotlari", detail:"Ma'lumotlar muvofaqiyatli tahrirlandi", group: 'tl', life: 3000});
      })
    },
    reset_admin_password(){
      this.dialog = false;
      let params ={
        photo:null,
        name:this.admin.fullName,
        email:this.admin.login,
        password:'user123456',
        role_id:this.admin.role.id,
        organization_id:this.organization_value.id,
        railway_id:this.railway_value.id,
        phone:this.admin.phone,
      };
      AdminService.update_AdminDetails({id:this.admin_id , data:params}).then((res) =>{
        this.$toast.add({severity:'success', summary: "Admin parol", detail:"Parrol muvofaqiyatli oldingi holatiga qaytarildi", group: 'tl', life: 3000});
      })
    },
  },
  created(){
    this.get_Railway()
  }
};
</script>
<style lang="scss">
</style>