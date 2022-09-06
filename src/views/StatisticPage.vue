<template >
  <div class="grid" >
    <!-- header search dropdown -->
    <div class="col-12">
      <div class="grid card surface-0 shadow-1 py-2 px-2">
        <div class="col-12 md:col-6 lg:col-3 xl:col-3">
          <h6>Katta Korxonalar - 48</h6>
          <Dropdown
            v-model="selectedCountry"
            :options="countries"
            optionLabel="name"
            :filter="true"
            placeholder="Korxona tanlang"
            :showClear="true"
            class="w-full"
          >
            <template #value="slotProps">
              <div
                class="country-item country-item-value"
                v-if="slotProps.value"
              >
                <div>{{ slotProps.value.name }}</div>
              </div>
              <span v-else>
                {{ slotProps.placeholder }}
              </span>
            </template>
            <template #option="slotProps">
              <div class="country-item">
                <div>{{ slotProps.option.name }}</div>
              </div>
            </template>
          </Dropdown>
        </div>
        <div class="col-12 md:col-6 lg:col-3 xl:col-3">
          <h6>Korxonalar - 0</h6>
          <Dropdown
            v-model="selectedCountry"
            :options="countries"
            optionLabel="name"
            :filter="true"
            placeholder="Korxona tanlang"
            :showClear="true"
            class="w-full"
          >
            <template #value="slotProps">
              <div
                class="country-item country-item-value"
                v-if="slotProps.value"
              >
                <div>{{ slotProps.value.name }}</div>
              </div>
              <span v-else>
                {{ slotProps.placeholder }}
              </span>
            </template>
            <template #option="slotProps">
              <div class="country-item">
                <div>{{ slotProps.option.name }}</div>
              </div>
            </template>
          </Dropdown>
        </div>
        <div class="col-12 md:col-6 lg:col-3 xl:col-3">
          <h6>Bo'limlar va bekatlar-0</h6>
          <Dropdown
            v-model="selectedCountry"
            :options="countries"
            optionLabel="name"
            :filter="true"
            placeholder="Bo'lim tanlang"
            :showClear="true"
            class="w-full"
          >
            <template #value="slotProps">
              <div
                class="country-item country-item-value"
                v-if="slotProps.value"
              >
                <div>{{ slotProps.value.name }}</div>
              </div>
              <span v-else>
                {{ slotProps.placeholder }}
              </span>
            </template>
            <template #option="slotProps">
              <div class="country-item">
                <div>{{ slotProps.option.name }}</div>
              </div>
            </template>
          </Dropdown>
        </div>
        <div class="col-12 md:col-6 lg:col-3 xl:col-3 flex">
          <div class="w-10">
            <Button
              icon="pi pi-search"
              label="Qidiruv"
              class="p-button-secondary w-full mt-5"
            />
          </div>
          <div class="w-2">
            <Button
              icon="pi pi-align-center"
              class="p-button-text w-full mt-5 p-button-sm p-button-secondary"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="col-12" v-show="!loading">
      <div class="grid">
        <!-- Header statistic box -->
        <div class="col-12">
          <div class="grid">
            <!-- All users -->
            <div class="col-12 sm:col-6 md:col-4 lg:col-2 xl:col-2">
              <div
                class="card surface-0 shadow-1 p-4"
                @contextmenu="onImageRightClick"
              >
                <div class="w-full flex justify-content-center">
                  <i class="pi pi-slack text-5xl text-blue-600"></i>
                </div>
                <h2 class="text-center text-6xl text-blue-400 font-bold mb-0">
                  12043
                </h2>
                <h6 class="text-center text-blue-400 mt-1">Barcha xodimlar</h6>
                <ContextMenu ref="menu" :model="items" />
              </div>
            </div>

            <!-- All vakant -->
            <div class="col-12 sm:col-6 md:col-4 lg:col-2 xl:col-2">
              <div class="card surface-0 shadow-1 p-4">
                <div class="w-full flex justify-content-center">
                  <i class="pi pi-slack text-5xl text-blue-600"></i>
                </div>
                <h2 class="text-center text-6xl text-green-400 font-bold mb-0">
                  25
                </h2>
                <h6 class="text-center text-green-400 mt-1">Vakansiya</h6>
              </div>
            </div>

            <!-- All sverx -->
            <div class="col-12 sm:col-6 md:col-4 lg:col-2 xl:col-2">
              <div class="card surface-0 shadow-1 p-4">
                <div class="w-full flex justify-content-center">
                  <i class="pi pi-slack text-5xl text-blue-600"></i>
                </div>
                <h2 class="text-center text-6xl text-red-400 font-bold mb-0">
                  34
                </h2>
                <h6 class="text-center text-red-400 mt-1">Sverx</h6>
              </div>
            </div>

            <!-- All position -->
            <div class="col-12 sm:col-6 md:col-4 lg:col-2 xl:col-2">
              <div class="card surface-0 shadow-1 p-4">
                <div class="w-full flex justify-content-center">
                  <i class="pi pi-slack text-5xl text-blue-600"></i>
                </div>
                <h2 class="text-center text-6xl text-600 font-bold mb-0">
                  12000
                </h2>
                <h6 class="text-center text-500 mt-1">Shtat lavozimlari</h6>
              </div>
            </div>

            <!-- All kasanachi -->
            <div class="col-12 sm:col-6 md:col-4 lg:col-2 xl:col-2">
              <div class="card surface-0 shadow-1 p-4">
                <div class="w-full flex justify-content-center">
                  <i class="pi pi-slack text-5xl text-blue-600"></i>
                </div>
                <h2 class="text-center text-6xl text-600 font-bold mb-0">47</h2>
                <h6 class="text-center text-500 mt-1">Kasanachilar</h6>
              </div>
            </div>

            <!-- All notebook -->
            <div class="col-12 sm:col-6 md:col-4 lg:col-2 xl:col-2">
              <div class="card surface-0 shadow-1 p-4">
                <div class="w-full flex justify-content-center">
                  <i class="pi pi-slack text-5xl text-blue-600"></i>
                </div>
                <h2 class="text-center text-6xl text-600 font-bold mb-0">7</h2>
                <h6 class="text-center text-500 mt-1">Temir daftar</h6>
              </div>
            </div>
          </div>
        </div>

        <!-- First section information -->
        <div class="col-12 md:col-6 lg:col-4 xl:col-4">
          <div class="card surface-0 shadow-1">
            <div class="card p-4 pb-0">
              <Divider align="center" type="dashed">
                <div class="font-medium text-blue-600">Bugun</div>
              </Divider>
              <div
                class="
                  flex
                  justify-content-between
                  border-bottom-1 border-300
                  pb-2
                  mb-2
                "
              >
                <div class="font-semibold text-base pl-1">
                  Ishga qabul qilinganlar
                </div>
                <div class="text-xl text-600 font-semibold pr-1">
                  <span class="text-green-500">0</span>/12043
                </div>
              </div>
              <div
                class="
                  flex
                  justify-content-between
                  border-bottom-1 border-300
                  pb-2
                  mb-2
                "
              >
                <div class="font-semibold text-base pl-1">
                  Faoliyati yakunlangan xodimlar
                </div>
                <div class="text-xl text-600 font-semibold pr-1">
                  <span class="text-red-500">2</span>/12043
                </div>
              </div>
              <div
                class="
                  flex
                  justify-content-between
                  border-bottom-1 border-300
                  pb-2
                  mb-2
                "
              >
                <div class="font-semibold text-base pl-1">Tug'ulgan kunlar</div>
                <div class="text-xl text-600 font-semibold pr-1">
                  <span class="text-yellow-500">23</span>/12043
                </div>
              </div>
            </div>

            <div class="card p-4 py-0">
              <Divider align="center" type="dashed">
                <div class="font-medium text-600">Umumiy</div>
              </Divider>
              <div
                class="
                  flex
                  justify-content-between
                  border-bottom-1 border-300
                  pb-2
                  mb-2
                "
              >
                <div
                  class="
                    font-semibold
                    text-700
                    hover:text-blue-500
                    cursor-pointer
                    text-base
                    pl-1
                  "
                >
                  Tibbiy ko'rik (yaroqli)
                </div>
                <div class="text-xl text-600 font-semibold pr-1">
                  <span class="text-green-500">11000</span>/12043
                </div>
              </div>

              <div
                class="
                  flex
                  justify-content-between
                  border-bottom-1 border-300
                  pb-2
                  mb-2
                "
              >
                <div
                  class="
                    font-semibold
                    text-600
                    hover:text-blue-500
                    cursor-pointer
                    text-base
                    pl-1
                  "
                >
                  Tibbiy ko'rik (yaroqsiz)
                </div>
                <div class="text-xl text-600 font-semibold pr-1">
                  <span class="text-red-500">43</span>/12043
                </div>
              </div>

              <div
                class="
                  flex
                  justify-content-between
                  border-bottom-1 border-300
                  pb-2
                  mb-2
                "
              >
                <div
                  class="
                    font-semibold
                    text-600
                    hover:text-blue-500
                    cursor-pointer
                    text-base
                    pl-1
                  "
                >
                  Tibbiy ko'rik (o'tmaganlar)
                </div>
                <div class="text-xl text-600 font-semibold pr-1">
                  <span class="text-yellow-500">1000</span>/12043
                </div>
              </div>

              <div
                class="
                  flex
                  justify-content-between
                  border-bottom-1 border-300
                  pb-2
                  mb-2
                "
              >
                <div
                  class="
                    font-semibold
                    text-600
                    hover:text-blue-500
                    cursor-pointer
                    text-base
                    pl-1
                  "
                >
                  Mehnat ta'tilidagi xodimlar
                </div>
                <div class="text-xl text-600 font-semibold pr-1">
                  <span class="text-yellow-500">124</span>/12043
                </div>
              </div>
              <div
                class="
                  flex
                  justify-content-between
                  border-bottom-1 border-300
                  pb-2
                  mb-2
                "
              >
                <div
                  class="
                    font-semibold
                    text-600
                    hover:text-blue-500
                    cursor-pointer
                    text-base
                    pl-1
                  "
                >
                  Bola parvarishidagi xodimlar
                </div>
                <div class="text-xl text-600 font-semibold pr-1">
                  <span class="text-yellow-500">324</span>/12043
                </div>
              </div>
              <div
                class="
                  flex
                  justify-content-between
                  border-bottom-1 border-300
                  pb-2
                  mb-2
                "
              >
                <div
                  class="
                    font-semibold
                    text-600
                    hover:text-blue-500
                    cursor-pointer
                    text-base
                    pl-1
                  "
                >
                  Intizomiy jazolanganlar
                </div>
                <div class="text-xl text-600 font-semibold pr-1">
                  <span class="text-red-500">24</span>/12043
                </div>
              </div>
              <div
                class="
                  flex
                  justify-content-between
                  border-bottom-1 border-300
                  pb-2
                  mb-2
                "
              >
                <div
                  class="
                    font-semibold
                    text-600
                    hover:text-blue-500
                    cursor-pointer
                    text-base
                    pl-1
                  "
                >
                  Rag'batlantirilganlar
                </div>
                <div class="text-xl text-600 font-semibold pr-1">
                  <span class="text-yellow-500">624</span>/12043
                </div>
              </div>
              <div
                class="
                  flex
                  justify-content-between
                  border-bottom-1 border-300
                  pb-2
                  mb-2
                "
              >
                <div
                  class="
                    font-semibold
                    text-600
                    hover:text-blue-500
                    cursor-pointer
                    text-base
                    pl-1
                  "
                >
                  Rag'batlantirilganlar
                </div>
                <div class="text-xl text-600 font-semibold pr-1">
                  <span class="text-yellow-500">624</span>/12043
                </div>
              </div>
              <div
                class="
                  flex
                  justify-content-between
                  border-bottom-1 border-300
                  pb-2
                  mb-2
                "
              >
                <div
                  class="
                    font-semibold
                    text-600
                    hover:text-blue-500
                    cursor-pointer
                    text-base
                    pl-1
                  "
                >
                  Rag'batlantirilganlar
                </div>
                <div class="text-xl text-600 font-semibold pr-1">
                  <span class="text-yellow-500">624</span>/12043
                </div>
              </div>
              <div
                class="
                  flex
                  justify-content-between
                  border-bottom-1 border-300
                  pb-2
                  mb-2
                "
              >
                <div
                  class="
                    font-semibold
                    text-600
                    hover:text-blue-500
                    cursor-pointer
                    text-base
                    pl-1
                  "
                >
                  Qora ro'yhatdagilar
                </div>
                <div class="text-xl text-600 font-semibold pr-1">
                  <span class="text-red-500">24</span>/12043
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Second section information -->
        <div class="col-12 md:col-6 lg:col-4 xl:col-4">
          <div class="card surface-0 shadow-1">
            <div class="card p-4 pb-6">
              <Divider align="center" type="dashed">
                <div class="font-medium text-500">Diagrammalar orqali</div>
              </Divider>
              <div class="grid">
                <div class="col-12 xl:col-6">
                  <div class="flex justify-content-center">
                    <Knob
                      size="180"
                      v-model="man"
                      valueTemplate="{value}%"
                      readonly
                      valueColor="MediumTurquoise"
                      rangeColor="SlateGray"
                      textColor="MediumTurquoise"
                    />
                  </div>
                  <h5 class="text-center my-0">10000</h5>
                  <h6 class="text-center mt-0">Erkaklar soni</h6>
                </div>
                <div class="col-12 xl:col-6">
                  <div class="flex justify-content-center">
                    <Knob
                      size="180"
                      v-model="woman"
                      valueTemplate="{value}%"
                      readonly
                      valueColor="MediumTurquoise"
                      rangeColor="SlateGray"
                      textColor="MediumTurquoise"
                    />
                  </div>
                  <h5 class="text-center my-0">3043</h5>
                  <h6 class="text-center mt-0">Ayollar soni</h6>
                </div>
                <div class="col-12 xl:col-6">
                  <div class="flex justify-content-center">
                    <Knob
                      size="180"
                      v-model="man"
                      valueTemplate="{value}%"
                      readonly
                      valueColor="MediumTurquoise"
                      rangeColor="SlateGray"
                      textColor="MediumTurquoise"
                    />
                  </div>
                  <h5 class="text-center my-0">10000</h5>
                  <h6 class="text-center mt-0">Nafaqa yoshidagi erkaklar</h6>
                </div>
                <div class="col-12 xl:col-6">
                  <div class="flex justify-content-center">
                    <Knob
                      size="180"
                      v-model="woman"
                      valueTemplate="{value}%"
                      readonly
                      valueColor="MediumTurquoise"
                      rangeColor="SlateGray"
                      textColor="MediumTurquoise"
                    />
                  </div>
                  <h5 class="text-center my-0">3043</h5>
                  <h6 class="text-center mt-0">Nafaqa yoshidagi ayollar</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Third section information -->
        <div class="col-12 md:col-6 lg:col-4 xl:col-4">
          <div class="card surface-0 shadow-1">
            <div class="card p-4 pb-6">
              <Divider align="center" type="dashed">
                <div class="font-medium text-500">Diagrammalar orqali</div>
              </Divider>
              <div class="grid">
                <div class="col-12 xl:col-6">
                  <div class="flex justify-content-center">
                    <Knob
                      size="180"
                      v-model="man"
                      valueTemplate="{value}%"
                      readonly
                      valueColor="MediumTurquoise"
                      rangeColor="SlateGray"
                      textColor="MediumTurquoise"
                    />
                  </div>
                  <h5 class="text-center my-0">10000</h5>
                  <h6 class="text-center mt-0">Erkaklar soni</h6>
                </div>
                <div class="col-12 xl:col-6">
                  <div class="flex justify-content-center">
                    <Knob
                      size="180"
                      v-model="woman"
                      valueTemplate="{value}%"
                      readonly
                      valueColor="MediumTurquoise"
                      rangeColor="SlateGray"
                      textColor="MediumTurquoise"
                    />
                  </div>
                  <h5 class="text-center my-0">3043</h5>
                  <h6 class="text-center mt-0">Ayollar soni</h6>
                </div>
                <div class="col-12 xl:col-6">
                  <div class="flex justify-content-center">
                    <Knob
                      size="180"
                      v-model="man"
                      valueTemplate="{value}%"
                      readonly
                      valueColor="MediumTurquoise"
                      rangeColor="SlateGray"
                      textColor="MediumTurquoise"
                    />
                  </div>
                  <h5 class="text-center my-0">10000</h5>
                  <h6 class="text-center mt-0">Nafaqa yoshidagi erkaklar</h6>
                </div>
                <div class="col-12 xl:col-6">
                  <div class="flex justify-content-center">
                    <Knob
                      size="180"
                      v-model="woman"
                      valueTemplate="{value}%"
                      readonly
                      valueColor="MediumTurquoise"
                      rangeColor="SlateGray"
                      textColor="MediumTurquoise"
                    />
                  </div>
                  <h5 class="text-center my-0">3043</h5>
                  <h6 class="text-center mt-0">Nafaqa yoshidagi ayollar</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
    <div class="col-12" v-show="loading">
        <statistic-skeleton ></statistic-skeleton>
      </div>
  </div>
</template>
<script>
import StatisticSkeleton from "../components/loaders/StatisticSkeleton.vue";

export default {
  components: { StatisticSkeleton },

  data() {
    return {
      loading: false,

      countries: [
        { name: "Australia", code: "AU" },
        { name: "Brazil", code: "BR" },
        { name: "China", code: "CN" },
        { name: "Egypt", code: "EG" },
        { name: "France", code: "FR" },
        { name: "Germany", code: "DE" },
        { name: "India", code: "IN" },
        { name: "Japan", code: "JP" },
        { name: "Spain", code: "ES" },
        { name: "United States", code: "US" },
      ],
      selectedCountry: null,
      man: Math.floor((10000 / 12043) * 100),
      woman: Math.floor((3043 / 12043) * 100),
      items: [
        {
          label: "Ko'rish",
          icon: "pi pi-eye",
        },
        {
          label: "Yopish",
          icon: "pi pi-eye-slash",
        },
      ],
    };
  },
  methods: {
    controlLoader() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
    onImageRightClick(event) {
      this.$refs.menu.show(event);
    },
  },
  created() {
    this.controlLoader();
  },
};
</script>
<style lang="scss">
</style>