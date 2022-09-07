<template >
  <div class="grid card surface-0 shadow-1 py-4 px-3">

    <div class="col-6 ">
      <h6 class="uppercase pl-2">Umumiy korxonalar</h6>
    </div>

    <div class="col-6">
      <div class="w-full flex justify-content-end">
        <SplitButton
          label="Export"
          :model="items"
          class="p-button-secondary p-button-sm"
        ></SplitButton>
       
      </div>
    </div>
    <!-- Search employee surname -->
    <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
      <h6>Familiya</h6>
      <InputText
        type="text"
        v-model="value1"
        class="w-full"
        placeholder="Familiyani kiriting"
      />
    </div>
    <!-- Search employee name -->
    <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
      <h6>Ism</h6>
      <InputText
        type="text"
        v-model="value1"
        class="w-full"
        placeholder="Ismni kiriting"
      />
    </div>

    <!-- Search employee positionname -->
    <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
      <h6>Sharifi</h6>
      <InputText
        type="text"
        v-model="value1"
        class="w-full font-semibold"
        placeholder="Sharifni kiriting"
      />
    </div>

    <!-- Search btn -->
    <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
      <Button
        label="Qidiruv"
        icon="pi pi-search "
        class="mt-5 w-10 p-button-secondary"
      />
      <Button
        icon="pi pi-filter"
        class="mt-5 w-2 p-button-text p-button-secondary"
        @click="openFilterPanel"
      />
      <!-- Additional filter menu -->
      <OverlayPanel
        ref="op"
        :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
        :style="{ width: '450px' }"
      >
        <div class="grid">
          <div class="col-12">
            <h6 class="text-sm uppercase">Qo'shimcha filter sozlamalari</h6>
          </div>

          <div class="col-6">
            <div class="col-12">
              <h6 class="text-sm mb-0">Katta korxonalar</h6>
            </div>
            <div class="w-full flex">
              <div class="w-full">
                <Dropdown
                  v-model="selectedregion"
                  :options="region"
                  optionLabel="name"
                  placeholder="Viloyati"
                  class="w-full p-inputtext-sm"
                />
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="col-12">
              <h6 class="text-sm mb-0">Korxonalar</h6>
            </div>
            <div class="w-full flex">
              <div class="w-full">
                <Dropdown
                  v-model="selectedregion"
                  :options="region"
                  optionLabel="name"
                  placeholder="Tumani"
                  class="w-full p-inputtext-sm"
                />
              </div>
            </div>
          </div>

          <div class="col-6">
            <div class="col-12">
              <h6 class="text-sm mb-0">Ma'lumoti</h6>
            </div>
            <div class="w-full flex">
              <div class="w-full">
                <Dropdown
                  v-model="selectedregion"
                  :options="region"
                  optionLabel="name"
                  placeholder="Ma'lumoti"
                  class="w-full p-inputtext-sm"
                />
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="col-12">
              <h6 class="text-sm mb-0">Ta'til</h6>
            </div>
            <div class="w-full flex">
              <div class="w-full">
                <Dropdown
                  v-model="selectedregion"
                  :options="region"
                  optionLabel="name"
                  placeholder="Ta'til"
                  class="w-full p-inputtext-sm"
                />
              </div>
            </div>
          </div>

          <div class="col-6">
            <div class="col-12">
              <h6 class="text-sm mb-1">Yosh oralig'i</h6>
              <p class="text-center text-blue-600 font-semibold">
                {{ selectedAge[0] + " -- " + selectedAge[1] }}
              </p>
            </div>
            <div class="w-full flex">
              <div class="w-full">
                <Slider
                  class=""
                  v-model="selectedAge"
                  :step="1"
                  :range="true"
                />
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="col-12">
              <h6 class="text-sm mb-0">Jinsi</h6>
            </div>
            <div class="w-full flex">
              <div class="w-full">
                <Dropdown
                  v-model="selectedregion"
                  :options="region"
                  optionLabel="name"
                  placeholder="Jinsi"
                  class="w-full p-inputtext-sm"
                />
              </div>
            </div>
          </div>
          <div class="col-12">
            <p class="text-left text-600">
              Qo'shimcha filter sozlamalariga e'tibor bilan tanlang
            </p>
          </div>
        </div>
      </OverlayPanel>
    </div>
    <!-- search bar ---end -->

    <!-- Employees table ---start -->
    <div class="col-12 pt-6" v-show="!loadingtable">
      <DataTable
        ref="dt"
        :value="data"
        v-model:selection="selectedProducts"
        dataKey="id"
        :paginator="true"
        :rows="10"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[10, 25, 50]"
        currentPageReportTemplate="Ko'rish {first} dan {last} gacha {totalRecords} dan"
        responsiveLayout="scroll"
        showGridlines
        class="pb-6 p-datatable-sm"
      >
        <template #header>
          <div class="flex w-full">
            <h6 class="mb-2 md:m-0 uppercase">
              Umumiy xodimlar (<span class="text-blue-500">81121</span>
              )
            </h6>
          </div>
        </template>

        <Column
          selectionMode="multiple"
          style="width: 3rem"
          :exportable="false"
        ></Column>
        <Column header="No">
          <template #body="slotProps">
            <div class="flex justify-content-center">
            <div v-show="false">{{slotProps.data.rating}} no </div>
            {{countTable(1)}}
            </div>
            <!-- <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.image" class="product-image" /> -->
          </template>
        </Column>
        <Column header="Fotosurat">
          <template #body="slotProps">
            <div class="flex justify-content-center">
              <Image
                src="https://railwaynok.uz/img/avatar_20.4e17c1b7.jpg"
                :alt="slotProps.data.name"
                width="40"
                height="40"
                preview
              />
            </div>
            <!-- <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.image" class="product-image" /> -->
          </template>
        </Column>
        <Column field="name" header="F.I.SH" style="min-width: 16rem">
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-md
                lg:text-lg
                xl:text-lg
                font-medium
              "
            >
              {{ slotProps.data.name }}
            </div>
          </template>
        </Column>

        <Column field="rating" header="Lavozimi" style="min-width: 20rem">
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-md
                lg:text-base
                xl:text-base
                font-medium
              "
            >
              O'zbekiston temir yo'llari Aksiyadorlik jamiyati Personalni
              boshqarish va kadrlar tayyorlash boshqarmasida ish yurituvchi

              {{ slotProps.data.name }}
            </div>
          </template>
        </Column>
        <Column field="rating" header="Korxona nomi" style="min-width: 16rem">
          <template #body="slotProps">
            <div
              class="
                text-sm
                sm:text-sm
                md:text-md
                lg:text-base
                xl:text-base
                font-medium
              "
            >
              Toshkent mintaqaviy temir yo'l uzeli
              <span v-show="false">{{ slotProps }}}</span>
            </div>
          </template>
        </Column>

        <Column :exportable="false" style="min-width: 6rem">
          <template #body="slotProps">
            <div class="flex w-full">
              <Button
                icon="pi pi-id-card"
                class="p-button-rounded p-button-secondary mr-2"
                v-tooltip.left="`Ma'lumotlarni ko'rish`"
                @click="isShow = !isShow"
              />
              <Button
                icon="pi pi-cloud-download"
                class="p-button-rounded p-button-secondary"
                v-tooltip.left="`Ma'lumotnomani yuklash`"
                @click="confirmDeleteProduct(slotProps.data)"
              />
            </div>
          </template>
        </Column>
      </DataTable>
    </div>
    <div class="col-12 pt-6">
      <employee-loader v-show="loadingtable"></employee-loader>
    </div>
  </div>
</template>
<script>
import EmployeeLoader from "../components/loaders/EmployeeLoader.vue";
export default {
  components: { EmployeeLoader },
  data() {
    return {
      displayBasic: true,
      loadingtable: false,

      selectedProducts: null,
      value1: null,
      selectedCity: null,
      selectedYear: null,
      cities: [
        { name: "Bugun", code: "NY" },
        { name: "Kecha", code: "RM" },
        { name: "1 hafta oldin", code: "LDN" },
        { name: "1 oy oldin", code: "IST" },
        { name: "Tanlash", code: "PRS" },
      ],
      data: [
      {
          id: "1000",
          code: "f230fh0g3",
          name: "Raximov Jamshid Shuxrat o'g'li",
          description: "Product Description",
          image: "bamboo-watch.jpg",
          price: 65,
          category: "Accessories",
          quantity: 24,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1000",
          code: "f230fh0g3",
          name: "Raximov Jamshid Shuxrat o'g'li",
          description: "Product Description",
          image: "bamboo-watch.jpg",
          price: 65,
          category: "Accessories",
          quantity: 24,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1001",
          code: "nvklal433",
          name: "Raximov Jamshid Shuxrat o'g'li",
          description: "Product Description",
          image: "black-watch.jpg",
          price: 72,
          category: "Accessories",
          quantity: 61,
          inventoryStatus: "INSTOCK",
          rating: 4,
        },
        {
          id: "1002",
          code: "zz21cz3c1",
          name: "Blue Band",
          description: "Product Description",
          image: "blue-band.jpg",
          price: 79,
          category: "Fitness",
          quantity: 2,
          inventoryStatus: "LOWSTOCK",
          rating: 3,
        },
        {
          id: "1003",
          code: "244wgerg2",
          name: "Blue T-Shirt",
          description: "Product Description",
          image: "blue-t-shirt.jpg",
          price: 29,
          category: "Clothing",
          quantity: 25,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1004",
          code: "h456wer53",
          name: "Bracelet",
          description: "Product Description",
          image: "bracelet.jpg",
          price: 15,
          category: "Accessories",
          quantity: 73,
          inventoryStatus: "INSTOCK",
          rating: 4,
        },
        {
          id: "1005",
          code: "av2231fwg",
          name: "Brown Purse",
          description: "Product Description",
          image: "brown-purse.jpg",
          price: 120,
          category: "Accessories",
          quantity: 0,
          inventoryStatus: "OUTOFSTOCK",
          rating: 4,
        },
        {
          id: "1006",
          code: "bib36pfvm",
          name: "Chakra Bracelet",
          description: "Product Description",
          image: "chakra-bracelet.jpg",
          price: 32,
          category: "Accessories",
          quantity: 5,
          inventoryStatus: "LOWSTOCK",
          rating: 3,
        },
        {
          id: "1007",
          code: "mbvjkgip5",
          name: "Galaxy Earrings",
          description: "Product Description",
          image: "galaxy-earrings.jpg",
          price: 34,
          category: "Accessories",
          quantity: 23,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1008",
          code: "vbb124btr",
          name: "Game Controller",
          description: "Product Description",
          image: "game-controller.jpg",
          price: 99,
          category: "Electronics",
          quantity: 2,
          inventoryStatus: "LOWSTOCK",
          rating: 4,
        },
        {
          id: "1009",
          code: "cm230f032",
          name: "Gaming Set",
          description: "Product Description",
          image: "gaming-set.jpg",
          price: 299,
          category: "Electronics",
          quantity: 63,
          inventoryStatus: "INSTOCK",
          rating: 3,
        },
        {
          id: "1010",
          code: "plb34234v",
          name: "Gold Phone Case",
          description: "Product Description",
          image: "gold-phone-case.jpg",
          price: 24,
          category: "Accessories",
          quantity: 0,
          inventoryStatus: "OUTOFSTOCK",
          rating: 4,
        },
        {
          id: "1011",
          code: "4920nnc2d",
          name: "Green Earbuds",
          description: "Product Description",
          image: "green-earbuds.jpg",
          price: 89,
          category: "Electronics",
          quantity: 23,
          inventoryStatus: "INSTOCK",
          rating: 4,
        },
        {
          id: "1012",
          code: "250vm23cc",
          name: "Green T-Shirt",
          description: "Product Description",
          image: "green-t-shirt.jpg",
          price: 49,
          category: "Clothing",
          quantity: 74,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1013",
          code: "fldsmn31b",
          name: "Grey T-Shirt",
          description: "Product Description",
          image: "grey-t-shirt.jpg",
          price: 48,
          category: "Clothing",
          quantity: 0,
          inventoryStatus: "OUTOFSTOCK",
          rating: 3,
        },
        {
          id: "1014",
          code: "waas1x2as",
          name: "Headphones",
          description: "Product Description",
          image: "headphones.jpg",
          price: 175,
          category: "Electronics",
          quantity: 8,
          inventoryStatus: "LOWSTOCK",
          rating: 5,
        },
        {
          id: "1015",
          code: "vb34btbg5",
          name: "Light Green T-Shirt",
          description: "Product Description",
          image: "light-green-t-shirt.jpg",
          price: 49,
          category: "Clothing",
          quantity: 34,
          inventoryStatus: "INSTOCK",
          rating: 4,
        },
        {
          id: "1016",
          code: "k8l6j58jl",
          name: "Lime Band",
          description: "Product Description",
          image: "lime-band.jpg",
          price: 79,
          category: "Fitness",
          quantity: 12,
          inventoryStatus: "INSTOCK",
          rating: 3,
        },
        {
          id: "1017",
          code: "v435nn85n",
          name: "Mini Speakers",
          description: "Product Description",
          image: "mini-speakers.jpg",
          price: 85,
          category: "Clothing",
          quantity: 42,
          inventoryStatus: "INSTOCK",
          rating: 4,
        },
        {
          id: "1018",
          code: "09zx9c0zc",
          name: "Painted Phone Case",
          description: "Product Description",
          image: "painted-phone-case.jpg",
          price: 56,
          category: "Accessories",
          quantity: 41,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1019",
          code: "mnb5mb2m5",
          name: "Pink Band",
          description: "Product Description",
          image: "pink-band.jpg",
          price: 79,
          category: "Fitness",
          quantity: 63,
          inventoryStatus: "INSTOCK",
          rating: 4,
        },
        {
          id: "1020",
          code: "r23fwf2w3",
          name: "Pink Purse",
          description: "Product Description",
          image: "pink-purse.jpg",
          price: 110,
          category: "Accessories",
          quantity: 0,
          inventoryStatus: "OUTOFSTOCK",
          rating: 4,
        },
        {
          id: "1021",
          code: "pxpzczo23",
          name: "Purple Band",
          description: "Product Description",
          image: "purple-band.jpg",
          price: 79,
          category: "Fitness",
          quantity: 6,
          inventoryStatus: "LOWSTOCK",
          rating: 3,
        },
        {
          id: "1022",
          code: "2c42cb5cb",
          name: "Purple Gemstone Necklace",
          description: "Product Description",
          image: "purple-gemstone-necklace.jpg",
          price: 45,
          category: "Accessories",
          quantity: 62,
          inventoryStatus: "INSTOCK",
          rating: 4,
        },
        {
          id: "1023",
          code: "5k43kkk23",
          name: "Purple T-Shirt",
          description: "Product Description",
          image: "purple-t-shirt.jpg",
          price: 49,
          category: "Clothing",
          quantity: 2,
          inventoryStatus: "LOWSTOCK",
          rating: 5,
        },
        {
          id: "1024",
          code: "lm2tny2k4",
          name: "Shoes",
          description: "Product Description",
          image: "shoes.jpg",
          price: 64,
          category: "Clothing",
          quantity: 0,
          inventoryStatus: "INSTOCK",
          rating: 4,
        },
        {
          id: "1025",
          code: "nbm5mv45n",
          name: "Sneakers",
          description: "Product Description",
          image: "sneakers.jpg",
          price: 78,
          category: "Clothing",
          quantity: 52,
          inventoryStatus: "INSTOCK",
          rating: 4,
        },
        {
          id: "1026",
          code: "zx23zc42c",
          name: "Teal T-Shirt",
          description: "Product Description",
          image: "teal-t-shirt.jpg",
          price: 49,
          category: "Clothing",
          quantity: 3,
          inventoryStatus: "LOWSTOCK",
          rating: 3,
        },
        {
          id: "1027",
          code: "acvx872gc",
          name: "Yellow Earbuds",
          description: "Product Description",
          image: "yellow-earbuds.jpg",
          price: 89,
          category: "Electronics",
          quantity: 35,
          inventoryStatus: "INSTOCK",
          rating: 3,
        },
        {
          id: "1028",
          code: "tx125ck42",
          name: "Yoga Mat",
          description: "Product Description",
          image: "yoga-mat.jpg",
          price: 20,
          category: "Fitness",
          quantity: 15,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1029",
          code: "gwuby345v",
          name: "Yoga Set",
          description: "Product Description",
          image: "yoga-set.jpg",
          price: 20,
          category: "Fitness",
          quantity: 25,
          inventoryStatus: "INSTOCK",
          rating: 8,
        },
      ],
      images: [
        {
          itemImageSrc: "https://railwaynok.uz/img/avatar_20.4e17c1b7.jpg",
          thumbnailImageSrc: "https://railwaynok.uz/img/avatar_20.4e17c1b7.jpg",
          alt: "Description for Image 1",
          title: "Title 1",
        },
        {
          itemImageSrc: "https://railwaynok.uz/img/avatar_20.4e17c1b7.jpg",
          thumbnailImageSrc: "https://railwaynok.uz/img/avatar_20.4e17c1b7.jpg",
          alt: "Description for Image 2",
          title: "Title 2",
        },
        {
          itemImageSrc: "https://railwaynok.uz/img/avatar_20.4e17c1b7.jpg",
          thumbnailImageSrc: "https://railwaynok.uz/img/avatar_20.4e17c1b7.jpg",
          alt: "Description for Image 2",
          title: "Title 2",
        },
        {
          itemImageSrc: "https://railwaynok.uz/img/avatar_20.4e17c1b7.jpg",
          thumbnailImageSrc: "https://railwaynok.uz/img/avatar_20.4e17c1b7.jpg",
          alt: "Description for Image 2",
          title: "Title 2",
        },
        {
          itemImageSrc: "https://railwaynok.uz/img/avatar_20.4e17c1b7.jpg",
          thumbnailImageSrc: "https://railwaynok.uz/img/avatar_20.4e17c1b7.jpg",
          alt: "Description for Image 2",
          title: "Title 2",
        },
        {
          itemImageSrc: "https://railwaynok.uz/img/avatar_20.4e17c1b7.jpg",
          thumbnailImageSrc: "https://railwaynok.uz/img/avatar_20.4e17c1b7.jpg",
          alt: "Description for Image 2",
          title: "Title 2",
        },
        {
          itemImageSrc: "https://railwaynok.uz/img/avatar_20.4e17c1b7.jpg",
          thumbnailImageSrc: "https://railwaynok.uz/img/avatar_20.4e17c1b7.jpg",
          alt: "Description for Image 2",
          title: "Title 2",
        },
        {
          itemImageSrc: "https://railwaynok.uz/img/avatar_20.4e17c1b7.jpg",
          thumbnailImageSrc: "https://railwaynok.uz/img/avatar_20.4e17c1b7.jpg",
          alt: "Description for Image 2",
          title: "Title 2",
        },
      ],
      items: [
        {
          label: "Pdf",
          icon: "pi pi pi-copy",
          command: () => {
            this.$toast.add({
              severity: "success",
              summary: "Updated",
              detail: "Data Updated",
              life: 3000,
            });
          },
        },
        {
          label: "Exel",
          icon: "pi pi pi-copy",
          command: () => {
            this.$toast.add({
              severity: "success",
              summary: "Updated",
              detail: "Data Updated",
              life: 3000,
            });
          },
        },
        {
          label: "Printer",
          icon: "pi pi-print",
          command: () => {
            this.$toast.add({
              severity: "success",
              summary: "Updated",
              detail: "Data Updated",
              life: 3000,
            });
          },
        },
      ],
      selectedregion: null,
      selectedAge: [10, 80],
      region: [
        {
          id: 1,
          name: "Xorazm",
        },
        {
          id: 2,
          name: "Toshkent",
        },
        {
          id: 3,
          name: "Buxoro",
        },
        {
          id: 4,
          name: "Termiz",
        },
      ],
      currentPage:1,
      
    };
  },
  methods: {
    openFilterPanel(event) {
      this.$refs.op.toggle(event);
    },
    controlLoading() {
      this.loadingtable = true;
      setTimeout(() => {
        this.loadingtable = false;
      }, 2000);
    },
     countTable(item){
      return this.currentPage++
    }
  },
  created() {
    this.controlLoading();
  },
};
</script>
<style lang="scss">
</style>