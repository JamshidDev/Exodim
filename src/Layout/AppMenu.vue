<template >
  <div class="w-full sidebar_box custom_bg">
    <Menu
      :model="item"
      class="w-full sidebar_menu custom_bg px-2 pb-8 border-none border-noround"
    />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      item:[
        {
          label: "Global",
          icon: "pi pi-globe",
          visible: () => this.get_adminPermissions("role-list"),
          items: [
            {
              label: "Statistika",
              icon: "pi pi-slack",
              to: '/admin/statistic',
              visible: () =>this.get_adminPermissions("management_statistics"),
            },
            {
              label: "Korxonalar",
              icon: "pi pi-building",
              visible: () =>this.get_adminPermissions("management_organizations"),
              to: '/admin/employees',
            },
            {
              label: "Analitika",
              icon: "pi pi-slack",
              visible: () =>this.get_adminPermissions("management_organizations"),
              to: '/admin/exel',
            },
          ],
        },
        {
          label: "Asosiy",
          icon: "pi pi-microsoft",
          visible: () =>this.get_adminPermissions("role-list"),
          items: [
            {
              label: "Statistika",
              icon: "pi pi-slack",
              to: '/admin/partstatistic',
              visible: () =>this.get_adminPermissions("role-list"),
            },
            {
              label: "Xodimlar",
              icon: "pi pi-users",
              to: '/admin/partemployee',
              visible: () =>this.get_adminPermissions("organization_cadries"),
            },
            {
              label: "Bo'limlar",
              icon: "pi pi-sitemap",
              to: '/admin/partfactory',
              visible: () =>this.get_adminPermissions("role-list"),
            },
            {
              label: "Shtat lavozimlari",
              icon: "pi pi-align-center",
              to: '/admin/position',
              visible: () =>this.get_adminPermissions("role-list"),
            },
            {
              label: "Arxiv",
              icon: "pi pi-shield",
              to: '/admin/historyemployee',
              visible: () =>this.get_adminPermissions("role-list"),
            },
            {
              label: "Boshqalar",
              icon: "pi pi-box",
              visible: () =>this.get_adminPermissions("role-lists"),
              items: [
                {
                  label: "Rag'batlantirilganlar",
                  icon: "pi pi-star",
                  to: '/admin/position',
              visible: () =>this.get_adminPermissions("role-list"),
                },
                {
                  label: "Hududlar",
                  icon: "pi pi-map",
                  to: '/admin/position',
              visible: () =>this.get_adminPermissions("role-list"),
                },
              ],
            },
          ],
        },
        {
          label: "Monitoring",
          icon: "pi pi-th-large",
          items: [
            {
              label: "Ta'tillar",
              icon: "pi pi-th-large",
              visible: () =>this.get_adminPermissions("management_organizations"),
              to: '/admin/vacation',
            },
            {
              label: "Tibbiy ko'rik",
              icon: "pi pi-th-large",
              visible: () =>this.get_adminPermissions("management_organizations"),
              to: '/admin/meds',
            },
            {
              label: "Jazolanganlar",
              icon: "pi pi-th-large",
              visible: () =>this.get_adminPermissions("management_organizations"),
              to: '/admin/punishment',
            },
            {
              label: "Mukofatlanganlar",
              icon: "pi pi-th-large",
              visible: () =>this.get_adminPermissions("management_organizations"),
              to: '/admin/incentive',
            },
          ],
        },
        {
          label: "Platforma",
          icon: "pi pi-prime",
          items: [
            {
              label: "Qo'shimchalar",
              icon: "pi pi-inbox",
              items: [
                {
                  label: "Masullar",
                  icon: "pi pi-folder",
                },
                {
                  label: "Kirishlar",
                  icon: "pi pi-folder",
                },
                {
                  label: "Amallar",
                  icon: "pi pi-folder",
                },
              ],
            },
            {
              label: "Sozlamalaar",
              icon: "pi pi-cog",
              command: () => {
                this.$router.push("/admin/setting");
              },
            },
            {
              label: "Qo'llanma",
              icon: "pi pi-book",
            },
            {
              label: "Versiya",
              icon: "pi pi-prime",
            },
          ],
        },
        
      ],
      items: [
        {
          label: "Global",
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
          label: "Asosiy",
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
              to: '/admin/partemployee',
             
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
          label: "Xabarlar",
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
  computed:{
    ...mapGetters(["get_adminPermissions",])
  },
};
</script>
<style lang="scss">
.sidebar_box{
  & .p-menu {
    background-color: #313a46 !important;
  }
}

  
  .sidebar_box {
      height:calc(100vh - 58px) ;
    max-height: calc(100vh - 58px);
    overflow-y: auto !important;
  }
  .sidebar_box::-webkit-scrollbar {
    width: 4px;
    scrollbar-color: #6969dd;
  }
  .sidebar_menu {
    min-height: calc(100vh - 58px);
    .p-menuitem {
      font-weight: 500;
      outline-width: 10px;
     
    }
   
    .p-menuitem-icon {
      padding-right: 10px;
    }
    .p-menuitem-text{
      color: #aeb2b5 !important;
      text-transform: uppercase;
      font-weight: 500;
    }
  .p-menuitem-link:hover{
    background: #185491e0 !important;
  }
    .p-submenu-header {
      color: #808c99;
      font-weight: 500;
      background-color: transparent;
    }
    .p-menuitem-link:focus {
      border-radius: 6px;
      background: #185491e0 !important;
    }
    .p-menuitem-link:visited{
      border-radius: 6px;
      background: #185491e0 !important;
    }
    .p-menuitem-link:active{
      border-radius: 6px;
      background: #185491e0 !important;
    }
    .p-menuitem-link:visited{
      border-radius: 6px;
      background: #185491e0 !important;
    }
  }
  
  .sidebar_menu {
    width: 100%;
  }
</style>