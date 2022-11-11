<template>
  <div class="grid px-3">
    <div class="col-12">
      <div class="grid">
        <div class="col-12 pb-0">
          <bread-crumb
            :breadCump="[{ name: 'Profile', path: '' }]"
          ></bread-crumb>
        </div>
        <div class="col-12 y-0 py-0">
          <span class="text-2xl font-semibold">Profile </span>
        </div>
      </div>
    </div>
    <div class="col-12 card surface-0 shadow-1 py-4">
      <div class="grid">
        <div class="col-12 xl:col-4 lg:col-4">
          <div class="flex justify-content-center pb-2">
            <Avatar
              :image="admin_avatar()"
              size="xlarge"
              class="mr-2"
              shape="circle"
            />
          </div>
          <h6 class="text-center xl:text-lg font-medium mb-6">
            {{ get_Name() }}
          </h6>
        </div>
        <div class="col-4">
          <!-- <div class="grid">
            <div class="col-12">
              <h6 class="mb-2 pl-2 text-base">Katta korxona</h6>
              <InputText
                type="text"
                class="w-full font-bold p-inputtext-sm"
                placeholder="Kiriting"
                v-model="bigOrganizationName"
              />
            </div>
            <div class="col-12">
              <h6 class="mb-2 pl-2 text-base">Korxona</h6>
              <InputText
                type="text"
                class="w-full font-bold p-inputtext-sm"
                placeholder="Kiriting"
                v-model="organizationName"
              />
            </div>
            <div class="col-12">
              <h6 class="mb-2 pl-2 text-base">Korxona STIR</h6>
              <InputText
                type="text"
                class="w-full font-bold p-inputtext-sm"
                placeholder="Kiriting"
                v-model="organizationSTIR"
              />
            </div>
          </div> -->
        </div>
      </div>
    </div>

    <div class="col-12 sm:col-12 md:col-12 lg:col-8 xl:col-9"></div>
  </div>
</template>
<script>
import ActiveSeans from "../components/ProfilComponent/ActiveSeans.vue";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb.vue";

export default {
  components: {
    ActiveSeans,
    BreadCrumb,
  },
  data() {
    return {
      bigOrganizationName: "Markaziy apparat",
      organizationName: "NOK",
      organizationSTIR:'213123213'
    };
  },
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
    admin_avatar() {
      return localStorage.getItem("admin_avatar")
        ? localStorage.getItem("admin_avatar")
        : "https://railwaynok.uz/img/avatar_20.4e17c1b7.jpg";
    },
    get_Name() {
      let profile = JSON.parse(localStorage.getItem("profil"));
      return profile.name;
    },
  },
};
</script>
<style lang="scss" scoped>
.p-avatar-xl {
  width: 180px;
  height: 180px;
}
</style>
