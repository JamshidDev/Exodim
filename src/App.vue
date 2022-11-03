<template>
  <div>
    <router-view> </router-view>
    <!-- <layout-vue></layout-vue> -->
  </div>
</template>

<script>
import LayoutVue from "./Layout/Layout.vue";
import EventBus from "./util/appEventBus.js";
import { mapActions } from "vuex";
export default {
  components: {
    LayoutVue,
  },
  methods:{
    ...mapActions(["set_appScrollX", "set_appScrollY", "set_screenWidth", "set_screenHeight"]),
    handleScroll() {
      this.set_appScrollX(window.scrollX);
      this.set_appScrollY(window.scrollY);
    },
    reportWindowSize(event) {
      this.set_screenWidth(event.currentTarget.innerWidth);
      this.set_screenHeight(event.currentTarget.innerHeight);
    },
  },
  themeChangeListener: null,
  mounted() {
    this.themeChangeListener = (event) => {
      const elementId = "theme-link";
      const linkElement = document.getElementById(elementId);
      const cloneLinkElement = linkElement.cloneNode(true);
      const newThemeUrl = linkElement
        .getAttribute("href")
        .replace(this.$appState.theme, event.theme);

      cloneLinkElement.setAttribute("id", elementId + "-clone");
      cloneLinkElement.setAttribute("href", newThemeUrl);
      cloneLinkElement.addEventListener("load", () => {
        linkElement.remove();
        cloneLinkElement.setAttribute("id", elementId);
      });
      linkElement.parentNode.insertBefore(
        cloneLinkElement,
        linkElement.nextSibling
      );

      

      this.$appState.theme = event.theme;
      this.$appState.darkTheme = event.dark;
    };

    document.documentElement.style.fontSize = localStorage.getItem("fontSize")+'px'

    EventBus.on("theme-change", this.themeChangeListener);
  },
  beforeUnmount() {
    EventBus.off("theme-change", this.themeChangeListener);
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.reportWindowSize);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.reportWindowSize);
  },
};
</script>

<style lang="scss">
@import "./App.scss";
</style>