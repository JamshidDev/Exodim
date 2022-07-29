<template >
  <div class="w-full sidebar_box surface-1">
    <Menu
      :model="items"
      class="w-full sidebar_menu  px-2 pb-4 border-none border-noround"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          label: "Super Admin",
          items: [
            {
              label: "Statistika",
              icon: "pi pi-slack",
              command: () => {
              this.$router.push("/admin/statistic");
              },
            },
            {
              label: "Xodimlar",
              icon: "pi pi-search",
              command: () => {
              this.$router.push("/admin/employees")
              },
            },
            {
              label: "Korxonalar",
              icon: "pi pi-building",
              command: () => {
                this.$router.push("/admin/companies")
              },
            },
          ],
        },
        {
          label: "Admin",
          items: [
            {
              label: "Statistika",
              icon: "pi pi-slack",
             command:()=>{
              this.$router.push("/admin/statistic");
             }
            },
            {
              label: "Xodimlar",
              icon: "pi pi-users",
              command: () => {
                window.location.hash = "/fileupload";
              },
            },
            {
              label: "Shtat lavozimlari",
              icon: "pi pi-align-center",
              command: () => {
               this.$router.push("/admin/position")
              },
            },
            {
              label: `Bo'limlar`,
              icon: "pi pi-sitemap",
              command: () => {
                window.location.hash = "/fileupload";
              },
            },
            {
              label: "Hududlar",
              icon: "pi pi-map",
              command: () => {
                this.$router.push("/admin/map");
              },
            },
            {
              label: "Taklif va murojatlar",
              icon: "pi pi-upload",
              command: () => {
                window.location.hash = "/fileupload";
              },
            },
            {
              label: "Arxiv",
              icon: "pi pi-shield",
              command: () => {
                window.location.hash = "/fileupload";
              },
            },
          ],
        },
        {
          label: "Xat va xabarlar",
          items: [
            {
              label: "Chiquvchi xatlar",
              icon: "pi pi-comment",
              command: () => {
                window.location.hash = "/fileupload";
              },
            },
            {
              label: "Kiruvchi xatlar",
              icon: "pi pi-comments",
              command: () => {
                window.location.hash = "/fileupload";
              },
            },
          ],
        },

        {
          label: "Dastur haqida",
          items: [
            {
              label: "Sozlamalar",
              icon: "pi pi-comments",
              command: () => {
                this.$router.push("/admin/setting");
              },
            },
            {
              label: "Qo'llanma",
              icon: "pi pi-comment",
              command: () => {
                window.location.hash = "/fileupload";
              },
            },
            {
              label: "Dastur versiyasi",
              icon: "pi pi-comments",
              command: () => {
                window.location.hash = "/fileupload";
              },
            },
          ],
        },
      ],
    };
  },
};
</script>
<style lang="scss" >
.sidebar_box {
    height:calc(100vh - 72px) ;
  max-height: calc(100vh - 72px);
  overflow-y: auto !important;
  ::-webkit-scrollbar{
    width: 1px !important;
  }
}
.sidebar_menu {
  min-height: calc(100vh - 72px);
  .p-menuitem {
    font-weight: 500;
    font-size: 16px !important;
    outline-width: 10px;
  }
  .p-menuitem-icon {
    font-size: 18px;
    padding-right: 10px;
  }
  .p-submenu-header {
    color: #808c99;
    font-weight: 500;
  }
  .p-menuitem-link:focus {
    border-radius: 6px;
  }
}

.sidebar_menu {
  width: 100%;
}
</style>