<template lang="">
    <div class="grid card surface-0 shadow-1 py-4 px-3">
        <div class="col-12 sm:col-12 md:col-12 lg:col-4 xl:col-3">
            <div class="grid">
              <div class="col-12">
                <div class="flex justify-content-center pb-2"><Avatar :image="admin_avatar()" size="xlarge" class="mr-2" shape="circle" /></div>
                <h6  class="text-center xl:text-lg font-medium uppercase mb-6" >Jamshid Raximov Shuxrat o'g'li</h6>
              </div>
               
                <div class="col-12">
                  <PanelMenu :model="items" />
                </div>
            </div>
        </div>

        <div class="col-12 sm:col-12 md:col-12 lg:col-8 xl:col-9">
            <!-- <div class="card border-1 border-300 px-4 min-h-full">
                <div class="col-12 flex justify-content-between px-1">
                    <h5>Kirishlar</h5>
                    <div>
                        <Button icon="pi pi-bars" class="p-button-sm p-button-secondary p-button-outlined"  @click="toggle"  />
                    <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" class="font-medium" />
                    </div>
                </div>
                <ScrollPanel style="width: 100%; height:700px"  class="custombar1">
                   <active-seans style="min-width:500px" ></active-seans>
                </ScrollPanel>
            </div>
            -->
               
            
        </div>
    </div>
</template>
<script>
 import ActiveSeans from '../components/ProfilComponent/ActiveSeans.vue';

export default {
    components:{
        ActiveSeans,
    },
  data() {
    return {
      items: [
        {
          label: "Profil menyu",
          icon: "pi pi-shield",
        },
        {
          label: "Profil menyu",
          icon: "pi pi-shield",
        },
        {
          label: "Profil menyu",
          icon: "pi pi-shield",
        },
      ],
    };
  },
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
    admin_avatar(){
      return localStorage.getItem("admin_avatar")? localStorage.getItem("admin_avatar") : 'https://railwaynok.uz/img/avatar_20.4e17c1b7.jpg'
    }
  },
};
</script>
<style lang="scss" scoped>
.p-avatar-xl {
  width: 180px;
  height: 180px;
}
.p-button-icon {
  font-size: 1.6rem !important;
}


::v-deep(.p-scrollpanel) {
    p {
        padding: .5rem;
        line-height: 1.5;
        margin: 0;
    }

    &.custombar1 {
        .p-scrollpanel-wrapper {
            border-right: 9px solid var(--surface-ground);
        }

        .p-scrollpanel-bar {
            background-color: var(--primary-color);
            opacity: 1;
            transition: background-color .2s;

            &:hover {
                background-color: #007ad9;
            }
        }
    } 
}
</style>