<template>
  <div class="grid card surface-0 shadow-1 py-2 px-2">
    <!-- Header button -->
    <div class="col-12">
      <herader-button></herader-button>
    </div>
    <!-- Header search -->
    <div class="col-12">
      <header-search></header-search>
    </div>
    <div class="col-12">
      <!-- Body table -->
      <body-table @editEmployee="goPush()"></body-table>
    </div>
  </div>
</template>
<script>
import HeraderButton from "../components/partEmployee/HeraderButton.vue";
import HeaderSearch from "../components/partEmployee/HeaderSearch.vue";
import BodyTable from '../components/partEmployee/BodyTable.vue';


export default {
  components: {
    HeraderButton,
    HeaderSearch,
    BodyTable,
  },
  methods:{
    goPush(){
      this.$router.push("/admin")
    }
  }
};
</script>
<style lang="scss">
</style>