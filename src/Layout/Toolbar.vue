<template >
  <div class="fixed top-0 w-full z_index_top">
    <Toolbar class="border-noround p-3">
      <template #start>
         <Button icon="pi pi-bars" class="p-button-rounded p-button-outlined " @click="controlNavbar()" />
        <!-- <div class="px-4 text-2xl text-blue-500 font-medium">CRM SYSTEM</div> -->
         
      </template>

      <template #end>
        <Avatar
          icon="pi pi-bell"
          v-badge.success="4"
          shape="circle"
          size="large"
          class="mr-4"
          @click="toggle2"
        />
        <Menu
          id="overlay_menu"
          ref="notefication"
          :model="items"
          :popup="true"
          class=" scalein animation-duration-200 animation-iteration-count: 1"
        />
        <Avatar
          image="https://railwaynok.uz/img/avatar_20.4e17c1b7.jpg"
          shape="circle"
          size="large"
          @click="toggle"
          class=" mr-2 scalein animation-duration-200 animation-iteration-count: 1"
        />
        <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />
      </template>
    </Toolbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          label: "Profile",
          items: [
            {
              label: "Profile",
              icon: "pi pi-external-link",
              url: "https://vuejs.org/",
            },
            {
              label: "Chiqish",
              icon: "pi pi-upload",
              command: () => {
               this.$router.push("/login")
              },
            },
          ],
        },
      ],
    };
  },
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
    toggle2(event) {
      this.$refs.notefication.toggle(event);
    },
    controlNavbar(){
      this.$emit("controlSidebar")
    }
  },
};
</script>
<style lang="scss">
.z_index_top{
  z-index: 998 !important;
}
</style>