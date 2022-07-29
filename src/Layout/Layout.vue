<template >
  <div :class="layoutClass">
    <toolbar @controlSidebar="changeNavbar"></toolbar>
    <div class="layout_main_container">
      <div class="layout_sidebar card">
        <app-menu></app-menu>
      </div>
      <div class="layout_main_section p-3">
        <Breadcrumb
          v-if="breadcrumb"
          :home="home"
          :model="items"
          class="border-none border-noround mb-3"
        />
        <router-view ></router-view>
        <!-- <AppFooter /> -->
      </div>
      <transition name="layout-mask" @click="changeNavbar()">
        <div class="layout-mask p-component-overlay" v-if="mobile_active"></div>
      </transition>
    </div>
  </div>
</template>
<script>
import AppMenu from "./AppMenu.vue";
import Toolbar from "./Toolbar.vue";
export default {
  components: {
    Toolbar,
    AppMenu,
  },
  data() {
    return {
      sidebar: false,
      sidebar_statsic: true,
      sidebar_overall: false,
      mobile_active: false,
      breadcrumb: false,

      home: {
        icon: "pi pi-home",
        to: "/",
      },
      items: [{ label: "Statistika" }],
    };
  },
  created() {
    if (this.SCREEN_WIDTH > 991) {
      this.sidebar = false;
    }
  },
  computed: {
    layoutClass() {
      return [
        "layout-wrapper",
        {
          close_sidebar: this.sidebar,
          sidebar_static: this.sidebar_statsic,
          sidebar_overall: this.SCREEN_WIDTH > 991 && this.sidebar,
        },
      ];
    },
    sidebar_bg() {
      if (this.sidebar && this.sidebar_overall) {
        return true;
      }
    },
  },
  watch: {
    SCREEN_WIDTH(width) {
      if (width < 991) {
        this.sidebar = true;
      }
    },
  },

  methods: {
    changeNavbar() {
      if (this.SCREEN_WIDTH < 991) {
        this.mobile_active = !this.sidebar;
      }
      this.sidebar = !this.sidebar;
    },
  },
};
</script>
<style lang="">
</style>