<template>
  <div class="grid card surface-0 shadow-1 py-4 px-3">
    <div class="col-12">
      <div class="grid">
        <div class="col-12">
          <div class="w-full flex justify-content-between align-items-center">
            <Button
              icon="pi pi-arrow-circle-left"
              @click="goPush()"
              class="p-button-secondary p-button-rounded p-button-sm"
              v-tooltip.right="`Orqaga`"
            />
            <div
              class="
                uppercase
                pl-2
                text-xl text-center
                font-semibold
                xl:inline-block
                hidden
              "
            >
              Xodim ma'lumotlari tahrirlash
            </div>
            <Button
              icon="pi pi-sync"
              @click="handleSubmit(!v$.$invalid)"
              class="p-button-secondary p-button-sm"
              label="Lotin"
              v-tooltip.bottom="`Ma'lumotlarni lotinchaga o'girish`"
            />
          </div>
        </div>
        <div class="col-12 mb-2 xl:hidden">
          <h6 class="uppercase pl-2 text-xl text-center font-semibold">
            Xodim ma'lumotlari tahrirlash
          </h6>
        </div>

        

        <div class="card pt-0">
          <router-view
            v-slot="{ Component }"
            :formData="formObject"
            @prevPage="prevPage($event)"
            @nextPage="nextPage($event)"
            @complete="complete"
          >
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          label: "Shaxsiy ma'lumotlar",
          to: "/admin/editemployee/1",
        },
        {
          label: "Malumoti",
          to: "/admin/editemployee/1/two",
        },
        {
          label: "Mehnat faoliyati",
          to: "/admin/editemployee/1/three",
        },
        {
          label: "Yaqin qarindoshlari",
          to: "/admin/editemployee/1/four",
        },
        {
          label: "Qo'shimacha ma'lumotlar",
          to: "/admin/editemployee/1/five",
        },
      ],
      formObject: {},
    };
  },
  methods: {
    goPush() {
      this.$router.push("/admin/partemployee");
    },
    nextPage(event) {
      for (let field in event.formData) {
        this.formObject[field] = event.formData[field];
      }

      this.$router.push(this.items[event.pageIndex + 1].to);
    },
    prevPage(event) {
      this.$router.push(this.items[event.pageIndex - 1].to);
    },
    complete() {
      this.$toast.add({
        severity: "success",
        summary: "Order submitted",
        detail:
          "Dear, " +
          this.formObject.firstname +
          " " +
          this.formObject.lastname +
          " your order completed.",
      });
    },
  },
};
</script>
<style lang="">
</style>