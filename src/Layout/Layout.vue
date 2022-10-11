<template >
  <div :class="layoutClass">
    <toolbar @controlSidebar="changeNavbar"></toolbar>
    <!-- Layouts container -->
    <div class="layout_main_container">

      <!-- Layout sidebar -->
      <div class="layout_sidebar border-round-xs">
        <app-menu></app-menu>
      </div>

      <!-- Layout main -->
      <div class="layout_main_section xl:px-2 lg:px-2 px-1 pb-2"  >
        <!-- Top breadcrumb -->
        <!-- <div v-if="breadcrumb" class="grid py-1 card surface-0  px-2 pb-3">
          <Breadcrumb
          :home="home"
          :model="items"
          class="border-none border-noround mb-3"
        />
        </div> -->
        <!-- Top menuBar -->

        <div class="pb-2">
         <top-app-menu v-show="get_menuType"></top-app-menu>
        </div>


        <!-- Router main -->
       <div class="pb-2  px-2 mt-1 min_main">
         <router-view ></router-view>
       </div>
       <div class="pb-2 card px-2 mb-3 ">
          <p class="text-center font-medium text-400">Dasturchilar <a href="https://telegram.me/Jamacoder">Jamshid</a> va <a href="https://telegram.me/losemanki6656">Jobir</a> </p>
       </div>
        

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
import TopAppMenu from "./TopAppMenu.vue";
import {mapGetters} from "vuex"
export default {
  components: {
    Toolbar,
    AppMenu,
    TopAppMenu,
  },
  data() {
    return {
      sidebar: false,
      sidebar_statsic: true,
      sidebar_overall: false,
      mobile_active: false,
      breadcrumb: false,
      menuBar:true,

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
    ...mapGetters(["get_menuType"]),
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
    get_menuType(type){
      if(type){
        this.sidebar= false
      }
    }
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
<style lang="scss" >
.min_main{
  min-height: calc(100vh - 176px) !important;
}
</style>