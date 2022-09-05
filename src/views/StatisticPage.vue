<template >
  <div class="grid">
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
        <div class="col-12 md:col-6 lg:col-3 xl:col-3">
          <Button
            icon="pi pi-sitemap"
            label="Tashkiliy tuzilma"
            class="p-button-info w-full mt-5"
          />
        </div>
      </div>
    </div>

    <!-- Header statistic box -->
    <div class="col-12">
      <div class="grid">
        <!-- All users -->
        <div class="col-12 sm:col-6 md:col-4 lg:col-2 xl:col-2">
          <div class="card surface-0 shadow-1 p-4">
            <div class="w-full flex justify-content-center">
              <i class="pi pi-slack text-5xl text-blue-600"></i>
            </div>
            <h2 class="text-center text-6xl text-blue-400 font-bold mb-0">
              12043
            </h2>
            <h6 class="text-center text-blue-400 mt-1">Barcha xodimlar</h6>
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
            <h2 class="text-center text-6xl text-red-400 font-bold mb-0">34</h2>
            <h6 class="text-center text-red-400 mt-1">Sverx</h6>
          </div>
        </div>

         <!-- All position -->
         <div class="col-12 sm:col-6 md:col-4 lg:col-2 xl:col-2">
          <div class="card surface-0 shadow-1 p-4">
            <div class="w-full flex justify-content-center">
              <i class="pi pi-slack text-5xl text-blue-600"></i>
            </div>
            <h2 class="text-center text-6xl text-600 font-bold mb-0">12000</h2>
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
        <div class="card p-4">
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
            <div class="font-semibold text-lg pl-1">
              Ishga qabul qilinganlar
            </div>
            <div class="text-xl text-blue-600 font-semibold pr-1">
              <span class="text-yellow-500">0</span>/10
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
            <div class="font-semibold text-lg pl-1">Tu'gilgan kunlar</div>
            <div class="text-xl text-blue-600 font-semibold pr-1">
              <span class="text-yellow-500">2</span>/23
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
            <div class="font-semibold text-lg pl-1">
              Faoliyati yakunlangan xodimlar
            </div>
            <div class="text-xl text-blue-600 font-semibold pr-1">
              <span class="text-yellow-500">2</span>/10
            </div>
          </div>
        </div>

        <div class="card p-4 mb-4">
          <Divider align="center" type="dashed">
            <div class="font-medium text-500">Ma'lumoti xodimlarning</div>
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
            <div class="font-semibold text-lg pl-1">Oliy ma'lumotli</div>
            <div class="text-xl text-blue-600 font-semibold pr-1">
              <span class="text-yellow-500">9000</span>/12043
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
            <div class="font-semibold text-lg pl-1">O'rta maxsus</div>
            <div class="text-xl text-blue-600 font-semibold pr-1">
              <span class="text-yellow-500">0</span>/12043
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
            <div class="font-semibold text-lg pl-1">O'rta</div>
            <div class="text-xl text-blue-600 font-semibold pr-1">
              <span class="text-yellow-500">2</span>/12043
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
            <div class="font-semibold text-lg pl-1">
              Tugallanmagan oliy (kunduzgi)
            </div>
            <div class="text-xl text-blue-600 font-semibold pr-1">
              <span class="text-yellow-500">2</span>/12043
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
            <div class="font-semibold text-lg pl-1">
              Tugallanmagan oliy (sirtqi)
            </div>
            <div class="text-xl text-blue-600 font-semibold pr-1">
              <span class="text-yellow-500">0</span>/12043
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
            <div class="font-semibold text-lg pl-1">
              Tugallanmagan oliy (kechki)
            </div>
            <div class="text-xl text-blue-600 font-semibold pr-1">
              <span class="text-yellow-500">0</span>/12043
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
            <div class="font-semibold text-lg pl-1">
              Tugallanmagan oliy (masofaviy)
            </div>
            <div class="text-xl text-blue-600 font-semibold pr-1">
              <span class="text-yellow-500">0</span>/12043
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
            <div class="font-semibold text-lg pl-1">
              Tugallanmagan o'rta (11 ni tugatmagan)
            </div>
            <div class="text-xl text-blue-600 font-semibold pr-1">
              <span class="text-yellow-500">0</span>/12043
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
            <div class="font-semibold text-lg pl-1">
              Tugalanmagan tayanch(9 ni tugatmagan)
            </div>
            <div class="text-xl text-blue-600 font-semibold pr-1">
              <span class="text-yellow-500">0</span>/12043
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Second section information -->
    <div class="col-12 md:col-6 lg:col-4 xl:col-4">
      <div class="card surface-0 shadow-1">
        <div class="card p-4">
          <Divider align="center" type="dashed">
            <div class="font-medium text-blue-600">Umumiy</div>
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
            <div class="font-semibold text-blue-500 text-lg pl-1">
              Erkaklar
            </div>
            <div class="text-xl text-600 font-semibold pr-1">
              <span class="text-green-500">10000</span>/12043
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
            <div class="font-semibold text-blue-500 text-lg pl-1">
              Ayollar
            </div>
            <div class="text-xl text-600 font-semibold pr-1">
              <span class="text-yellow-500">2043</span>/12043
            </div>
          </div>
        </div>

        <div class="card p-4 ">
          <Divider align="center" type="dashed">
            <div class="font-medium text-500">Umumiy</div>
          </Divider>
          <div
            class="
              flex
              justify-content-between
              border-bottom-1 border-300
              pb-2
              mb-5
            "
          >
            <div class="font-semibold text-lg pl-1">Rag'batlantirilganlar</div>
            <div class="text-xl text-blue-600 font-semibold pr-1">
              <span class="text-green-500">2456</span>/12043
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
            <div class="font-semibold text-lg pl-1">
              Intizomiy jazolanganlar
            </div>
            <div class="text-xl text-blue-600 font-semibold pr-1">
              <span class="text-red-500">0</span>/12043
            </div>
          </div>
        </div>

        <div class="card p-4 mb-6">
          <Divider align="center" type="dashed">
            <div class="font-medium text-500">Umumiy</div>
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
            <div class="font-semibold text-lg pl-1">Ta'tildagi xodimlar</div>
            <div class="text-xl text-blue-600 font-semibold pr-1">
              <span class="text-yellow-500">0</span>/12043
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
            <div class="font-semibold text-lg pl-1">
              Qora ro'yxatdagi xodimlar
            </div>
            <div class="text-xl text-blue-600 font-semibold pr-1">
              <span class="text-yellow-500">0</span>/12043
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
            <div class="font-semibold text-lg pl-1">
              Ishga safaridagi xodimlar
            </div>
            <div class="text-xl text-blue-600 font-semibold pr-1">
              <span class="text-yellow-500">0</span>/12043
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
            <div class="font-semibold text-lg pl-1">
              Ishga safaridagi xodimlar
            </div>
            <div class="text-xl text-blue-600 font-semibold pr-1">
              <span class="text-yellow-500">0</span>/12043
            </div>
          </div>
          
        </div>
      </div>
    </div>

     <!-- Third section information -->
     <div class="col-12 md:col-6 lg:col-4 xl:col-4">
      <div class="card surface-0 shadow-1">
        <div class="card p-4">
          <Divider align="center" type="dashed">
            <div class="font-medium text-blue-600">Bugungacha</div>
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
            <div class="font-semibold text-blue-500 text-lg pl-1">
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
            <div class="font-semibold text-blue-500 text-lg pl-1">
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
            <div class="font-semibold text-blue-500 text-lg pl-1">
              Tibbiy ko'rik (o'tmaganlar)
            </div>
            <div class="text-xl text-600 font-semibold pr-1">
              <span class="text-yellow-500">1000</span>/12043
            </div>
          </div>
        </div>

        <div class="card p-4 ">
          <Divider align="center" type="dashed">
            <div class="font-medium text-500">Umumiy</div>
          </Divider>
          <div
            class="
              flex
              justify-content-between
              border-bottom-1 border-300
              pb-2
              mb-5
            "
          >
            <div class="font-semibold text-lg pl-1">Rag'batlantirilganlar</div>
            <div class="text-xl text-blue-600 font-semibold pr-1">
              <span class="text-green-500">2456</span>/12043
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
            <div class="font-semibold text-lg pl-1">
              Intizomiy jazolanganlar
            </div>
            <div class="text-xl text-blue-600 font-semibold pr-1">
              <span class="text-red-500">0</span>/12043
            </div>
          </div>
        </div>

        <div class="card p-4 mb-6">
          <Divider align="center" type="dashed">
            <div class="font-medium text-500">Umumiy</div>
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
            <div class="font-semibold text-lg pl-1">Ta'tildagi xodimlar</div>
            <div class="text-xl text-blue-600 font-semibold pr-1">
              <span class="text-yellow-500">0</span>/12043
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
            <div class="font-semibold text-lg pl-1">
              Qora ro'yxatdagi xodimlar
            </div>
            <div class="text-xl text-blue-600 font-semibold pr-1">
              <span class="text-yellow-500">0</span>/12043
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
            <div class="font-semibold text-lg pl-1">
              Ishga safaridagi xodimlar
            </div>
            <div class="text-xl text-blue-600 font-semibold pr-1">
              <span class="text-yellow-500">0</span>/12043
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
            <div class="font-semibold text-lg pl-1">
              Ishga safaridagi xodimlar
            </div>
            <div class="text-xl text-blue-600 font-semibold pr-1">
              <span class="text-yellow-500">0</span>/12043
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chartData: {
        labels: ["Erkaklar", "Ayollar"],
        datasets: [
          {
            data: [300, 50],
            backgroundColor: ["#42A5F5", "#F59E0B"],
            hoverBackgroundColor: ["#64B5F6", "#F59E0B"],
          },
        ],
      },
      lightOptions: {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
      },

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
    };
  },
};
</script>
<style lang="scss">
</style>