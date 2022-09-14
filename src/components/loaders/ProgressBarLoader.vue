<template >
  <div
    class="
      w-full
      loader_container
      flex
      justify-content-center
      align-items-center
    "
  >
    <ProgressSpinner style="width:50px;height:50px" />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.loader_container {
  min-height: 600px;
}
</style>