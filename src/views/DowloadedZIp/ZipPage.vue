<template >
  <div class="grid px-3">
    <div class="col-12">
      <div class="grid">
        <div class="col-12 pb-0">
          <bread-crumb
            :breadCump="[{ name: 'Yuklamalar', path: '' }]"
          ></bread-crumb>
        </div>
        <div class="col-12 y-0 py-0">
          <span class="text-2xl font-semibold"
            >Yuklamalar
            <span class="text-base text-primary pl-2"> ({{ 0 }})</span>
          </span>
        </div>
      </div>
    </div>

    <div class="col-12">
       
        <no-data-component></no-data-component>

    </div>
  </div>
</template>
<script>
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb.vue";
import NoDataComponent from "../../components/EmptyComponent/NoDataComponent.vue";
export default {
  components: {
    BreadCrumb,
    NoDataComponent,
  },
};
</script>
<style lang="">
</style>