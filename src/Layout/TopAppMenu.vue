<template>
  <div class="w-full">
    <Menubar :model="menuBarRouter" class="surface-0 font-medium" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuBarRouter: [
        // {
        // 	label:'Statistika',
        // 	icon:'pi pi-slack'
        // },
        //  {
        // 	label:'Xodimlar',
        // 	icon:'pi pi-search'
        // },
        //  {
        // 	label:"Bo'limlar",
        // 	icon:'pi pi-sitemap'
        // },
        //  {
        // 	label:"Shtat lavozimlari",
        // 	icon:'pi pi-align-center'
        // },
        //  {
        // 	label:"Arxiv",
        // 	icon:'pi pi-shield'
        // },
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
          icon: "pi pi-microsoft",
          items: [
            {
              label: "Statistika",
              icon: "pi pi-slack",
              command: () => {
                this.$router.push("/admin/statistic")
              },
            },
            {
              label: "Xodimlar",
              icon: "pi pi-users",
               command: () => {
                this.$router.push("/admin/partemployee")
              },
            },
            {
              label: "Bo'limlar",
              icon: "pi pi-sitemap",
              command: () => {
                this.$router.push("/admin/partfactory")
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
              label: "Arxiv",
              icon: "pi pi-shield",
              command: () => {
                this.$router.push("/admin/statistic")
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
                this.$router.push("/admin/statistic")
              },
                },
                {
                  label: "Hududlar",
                  icon: "pi pi-map",
                  command: () => {
                this.$router.push("/admin/statistic")
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
    };
  },
};
</script>
<style lang="">
</style>