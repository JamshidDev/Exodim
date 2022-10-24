<template>
  <div>
    <router-view> </router-view>
    <!-- <layout-vue></layout-vue> -->
  </div>
</template>

<script>
import LayoutVue from "./Layout/Layout.vue";
import EventBus from "./util/appEventBus.js";
export default {
  components: {
    LayoutVue,
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
};
</script>

<style lang="scss">
@import "./App.scss";
</style>