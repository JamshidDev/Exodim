<template>
  <div class="w-full">
    <Menubar :model="customBarRouter" class="surface-0 font-medium" />
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      permissionList: [
        // super admin
        {
          name: "role-list",
          permissions: {
            label: "Global",
            icon: "pi pi-globe",
            items: [],
          },
        },
        // basic admin
        {
          name: "role-list",
          permissions: {
            label: "Asosiy",
            icon: "pi pi-microsoft",
            items: [],
          },
        },
        // message admin
        {
          name: "message_admin",
          permissions: {
            label: "Xabarlar",
            icon: "pi pi-th-large",
            items: [],
          },
        },
        // control admin
        {
          name: "control_admin",
          permissions: {
            label: "Platforma",
            icon: "pi pi-prime",
            items: [],
          },
        },
      ],

      // Child permissions
      childPermissions: [
        // global menu items
        [
          {
            name: "role-list",
            permission: {
              label: "Statistika",
              icon: "pi pi-slack",
              command: () => {
                this.$router.push("/admin/statistic");
              },
            },
          },
          {
            name: "role-list",
            permission: {
              label: "Korxonalar",
              icon: "pi pi-search",
              command: () => {
                this.$router.push("/admin/employees");
              },
            },
          },
          // {
          //   name: "global_factory",
          //   permission: {
          //     label: "Sms tizimi",
          //     icon: "pi pi-envelope",
          //     command: () => {
          //       this.$router.push("/admin/companies");
          //     },
          //   },
          // },
        ],
        // basic menu items
        [
          {
            name: "role-list",
            permission: {
              label: "Statistika",
              icon: "pi pi-slack",
              command: () => {
                this.$router.push("/admin/statistic");
              },
            },
          },
          {
            name: "role-list",
            permission: {
              label: "Xodimlar",
              icon: "pi pi-users",
              command: () => {
                this.$router.push("/admin/partemployee");
              },
            },
          },
          {
            name: "role-list",
            permission: {
              label: "Bo'limlar",
              icon: "pi pi-sitemap",
              command: () => {
                this.$router.push("/admin/partfactory");
              },
            },
          },
          {
            name: "role-list",
            permission: {
              label: "Shtat lavozimlari",
              icon: "pi pi-align-center",
              command: () => {
                this.$router.push("/admin/position");
              },
            },
          },
          {
            name: "role-list",
            permission: {
              label: "Tibbiy ko'rik",
              icon: "pi pi-box",
              command: () => {
                this.$router.push("/admin/statistic");
              },
            },
          },
          {
            name: "role-list",
            permission: {
              label: "Ta'tillar",
              icon: "pi pi-briefcase",
              command: () => {
                this.$router.push("/admin/statistic");
              },
            },
          },
          {
            name: "role-list",
            permission: {
              label: "Arxiv",
              icon: "pi pi-shield",
              command: () => {
                this.$router.push("/admin/historyemployee");
              },
            },
          },
          {
            name: "role-list",
            permission: {
              label: "Rag'batlantirilganlar",
              icon: "pi pi-star",
              command: () => {
                this.$router.push("/admin/statistic");
              },
            },
          },
          {
            name: "role-list",
            permission: {
              label: "Hududlar",
              icon: "pi pi-map",
              command: () => {
                this.$router.push("/admin/statistic");
              },
            },
          },
        ],
         //  message menu items
        [
         
          {
            name: "message_offer",
            permission: {
              label: "Takliflar",
              icon: "pi pi-comment",
              command: () => {
                this.$router.push("/admin/statistic");
              },
            },
          },
          {
            name: "message_enter_msg",
            permission: {
              label: "Kiruvchi xatlar",
                  icon: "pi pi-envelope",
              command: () => {
                this.$router.push("/admin/statistic");
              },
            },
          },
          {
            name: "message_out_msg",
            permission: {
              label: "Chiquvchi xatlar",
                  icon: "pi pi-envelope",
              command: () => {
                this.$router.push("/admin/statistic");
              },
            },
          },
        ],
         //  control menu items
         [
         
         {
           name: "control_login",
           permission: {
            label: "Masullar",
                  icon: "pi pi-folder",
             command: () => {
               this.$router.push("/admin/statistic");
             },
           },
         },
         {
           name: "control_action",
           permission: {
            label: "Amallar",
                  icon: "pi pi-folder",
             command: () => {
               this.$router.push("/admin/statistic");
             },
           },
         },
         {
           name: "control_history",
           permission: {
            label: "Tarix",
                  icon: "pi pi-folder",
             command: () => {
               this.$router.push("/admin/statistic");
             },
           },
         },
       ],
      ],
      menuBarRouter: [
        {
          label: "Global",
          icon: "pi pi-globe",
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
                this.$router.push("/admin/employees");
              },
            },
            {
              label: "Korxonalar",
              icon: "pi pi-building",
              command: () => {
                this.$router.push("/admin/companies");
              },
            },
          ],
        },
        {
          label: "Asosiy",
          icon: "pi pi-microsoft",
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
              icon: "pi pi-users",
              command: () => {
                this.$router.push("/admin/partemployee");
              },
            },
            {
              label: "Bo'limlar",
              icon: "pi pi-sitemap",
              command: () => {
                this.$router.push("/admin/partfactory");
              },
            },
            {
              label: "Shtat lavozimlari",
              icon: "pi pi-align-center",
              command: () => {
                this.$router.push("/admin/position");
              },
            },
            {
              label: "Arxiv",
              icon: "pi pi-shield",
              command: () => {
                this.$router.push("/admin/statistic");
              },
            },
            {
              label: "Boshqalar",
              icon: "pi pi-box",
              items: [
                {
                  label: "Rag'batlantirilganlar",
                  icon: "pi pi-star",
                  command: () => {
                    this.$router.push("/admin/statistic");
                  },
                },
                {
                  label: "Hududlar",
                  icon: "pi pi-map",
                  command: () => {
                    this.$router.push("/admin/statistic");
                  },
                },
              ],
            },
          ],
        },
        {
          label: "Xabarlar",
          icon: "pi pi-th-large",
          items: [
            {
              label: "Takliflar",
              icon: "pi pi-comment",
            },
            {
              label: "Murojatlar",
              icon: "pi pi-comment",
            },
            {
              label: "Xatlar",
              icon: "pi pi-fw pi-users",
              items: [
                {
                  label: "Kiruvchi xatlar",
                  icon: "pi pi-envelope",
                },
                {
                  label: "Chiquvchi xatlar",
                  icon: "pi pi-envelope",
                },
              ],
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
      customBarRouter: [],
    };
  },
  computed:{
    ...mapGetters(["get_adminPermissions"])
  },
  methods: {
   async generateBarRouter() {
     await this.permissionList.forEach((item, index) => {
        if (this.get_adminPermissions(item.name)) {
          this.childPermissions[index].forEach((childItem, childIndex) => {
            if (this.get_adminPermissions(childItem.name)) {
              item.permissions.items.push(childItem.permission);
            }
          });
          this.customBarRouter.push(item.permissions);
          console.log(this.customBarRouter);
        }
      });

      // console.log(this.customBarRouter);
    },
    get_Permission(arrey, permission) {
      if (arrey.length > 0) {
        return arrey.includes(permission);
      } else {
        return false;
      }
    },
  },
  created() {
    this.generateBarRouter();
    console.log(localStorage.getItem('Adminpermissions'));
  },
};
</script>
<style lang="">
</style>