<template lang="">
    <div class="grid card surface-0 shadow-1 py-4 px-3">
        <div class="col-12 sm:col-12 md:col-12 lg:col-4 xl:col-4">
            <div class="card border-1 border-300 px-4">
                <div class="col-12 flex justify-content-end px-1">
                    <Button icon="pi pi-pencil" class="p-button-sm p-button-secondary p-button-outlined"  />
                </div>
                <div class="flex justify-content-center pb-2"><Avatar image="https://railwaynok.uz/img/avatar_20.4e17c1b7.jpg" size="xlarge" class="mr-2" shape="circle" /></div>
                <h6  class="text-center xl:text-lg font-medium uppercase mb-6" >Jamshid Raximov Shuxrat o'g'li</h6>
                <h6  class="text-left font-medium text-500 text-base mb-0" >Katta korxona nomi:</h6>
                <h6  class="text-left xl:text-lg font-medium  mb-4 mt-0" >Personalni boshqarish va kadrlar tayorlash boshqarmasi</h6>

                <h6  class="text-left font-medium text-500 text-base mb-0" >Korxona nomi:</h6>
                <h6  class="text-left xl:text-lg font-medium  mb-4 mt-0" >Personalni boshqarish va kadrlar tayorlash boshqarmasi</h6>

                <h6  class="text-left font-medium text-500 text-base mb-0" >Masul xodim:</h6>
                <h6  class="text-left xl:text-lg font-medium  mb-4 mt-0" >Jamshid Raximov Shuxrat o'g'li</h6>

                <h6  class="text-left font-medium text-500 text-base mb-0" >Login:</h6>
                <h6  class="text-left xl:text-lg font-medium  mb-4 mt-0" >raximov@jamshid.ajk</h6>


                <h6  class="text-left font-medium text-500 text-base mb-0" >Parol:</h6>
                <h6  class="text-left xl:text-lg font-medium  mb-4 mt-0" >*********</h6>

                <h6  class="text-left font-medium text-500 text-base mb-0" >Telefon(faks):</h6>
                <h6  class="text-left xl:text-lg font-medium  mb-4 mt-0" >4-11-42</h6>

                <h6  class="text-left font-medium text-500 text-base mb-0" >Telefon (shaxsiy):</h6>
                <h6  class="text-left xl:text-lg font-medium  mb-4 mt-0" >+998 (99) 501-60-04</h6>

                <h6  class="text-left font-medium text-500 text-base mb-0" >E-id:</h6>
                <h6  class="text-left xl:text-lg font-medium  mb-4 mt-0" >123</h6>


            </div>
        </div>
        <div class="col-12 sm:col-12 md:col-12 lg:col-8 xl:col-8">
            <div class="card border-1 border-300 px-4 min-h-full">
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
          items: [
            {
              label: "Seanslar",
              icon: "pi pi-shield",
            },
            {
              label: "Kirishlar",
              icon: "pi pi-shield",
            },
            {
              label: "Amallar",
              icon: "pi pi-shield",
            },
            {
              label: "Adminlar",
              icon: "pi pi-shield",
            },
            {
              label: "Huquqlar",
              icon: "pi pi-shield",
            },
          ],
        },
      ],
    };
  },
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
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