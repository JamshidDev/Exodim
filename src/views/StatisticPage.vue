<template >
  <div class="grid">
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

    <div class="col-12 md:col-6 lg:col-4 xl:col-4">
      <div class="card surface-0 shadow-1 p-4">
        <div class="grid">
          <div class="col-8 text-xl font-medium">Nafaqa yoshidagi xodimlar</div>
          <div class="col-4">
            <Button label="Ko'rish" class="p-button-sm p-button-outlined" />
          </div>
          <div class="col-12 xl:px-8 lg:px-6 md:px-4 sm:px-2 pt-2">
            <Chart type="doughnut" :data="chartData" :options="lightOptions" />
          </div>
          <div class="col-12">
            <Divider align="center" type="dashed">
              <div class="font-medium">Hisobotlar</div>
            </Divider>
            <div class="flex">
              <div class="font-medium">Umumiy xodimlardan</div>
              <Tag class="mx-2" value="11.1%"></Tag>
              <Tag class="mx-2" severity="info" value="121"></Tag
              ><Tag class="mx-2" severity="success" value="754"></Tag>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-6 lg:col-4 xl:col-4">
      <div class="card surface-0 shadow-1 p-4">
        <div class="grid">
          <div class="col-8 text-xl font-medium">
            Xodimlarning yoshi bo'yicha
          </div>
          <div class="col-4">
            <Button label="Ko'rish" class="p-button-sm p-button-outlined" />
          </div>
          <div class="col-12 xl:px-8 lg:px-6 md:px-4 sm:px-2 pt-2">
            <Chart type="pie" :data="secondtData" :options="lightOptions" />
          </div>
          <div class="col-12">
            <Divider align="center" type="dashed">
              <div class="font-medium">Hisobotlar</div>
            </Divider>
            <div class="flex">
              <div class="font-medium">Umumiy xodimlardan</div>
              <Tag class="mx-2" severity="warning" value="30 yosh 26.9%"></Tag>
              <Tag class="mx-2" severity="info" value="30-45 yosh 46.5%"></Tag
              ><Tag
                class="mx-2"
                severity="danger"
                value="45 yoshdan 26.6%"
              ></Tag>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-6 lg:col-4 xl:col-4">
      <div class="card surface-0 shadow-1 p-4">
        <div class="grid">
          <div class="col-8 text-xl font-medium">
            Xodimlarning ma'lumoti bo'yicha
          </div>
          <div class="col-4">
            <Button label="Ko'rish" class="p-button-sm p-button-outlined" />
          </div>
          <div class="col-12 xl:px-8 lg:px-6 md:px-4 sm:px-2 pt-2">
            <Chart
              type="polarArea"
              :data="polarData"
              :options="polarchartOptions"
            />
          </div>
          <div class="col-12">
            <Divider align="center" type="dashed">
              <div class="font-medium">Hisobotlar</div>
            </Divider>
            <div class="flex">
              <div class="font-medium">Umumiy xodimlardan</div>
              <Tag class="mx-2" value="11.1%"></Tag>
              <Tag class="mx-2" severity="info" value="121"></Tag
              ><Tag class="mx-2" severity="success" value="754"></Tag>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
      <div class="card surface-0 shadow-1 p-4">
        <div class="grid">
          <div class="col-12">
            <div class="text-xl font-medium">Erkak va ayollar soni</div>
          </div>
          <div class="col-12 px-8">
            <Chart
              type="doughnut"
              :data="genderchartData"
              :options="lightOptions"
            />
          </div>
          <Divider align="center" type="dashed">
            <div class="font-medium">Hisobotlar</div>
          </Divider>
          <div class="font-medium">Xodimlar soni</div>
          <Tag class="mx-2" value="81205"></Tag>
          <Tag class="mx-2" severity="info" value="67224"></Tag
          ><Tag class="mx-2" severity="warning" value="13981"></Tag>
        </div>
      </div>
    </div>
    <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
      <div class="card surface-0 shadow-1 p-4">
        <div class="grid">
          <div class="col-12">
            <div class="text-xl font-medium">Kasanachi xodimlar</div>
          </div>
          <div class="col-12 px-8">
            <Chart
              type="doughnut"
              :data="genderchartData"
              :options="lightOptions"
            />
          </div>
          <Divider align="center" type="dashed">
            <div class="font-medium">Hisobotlar</div>
          </Divider>
          <div class="font-medium">Xodimlar soni</div>
          <Tag class="mx-2" value="81205"></Tag>
          <Tag class="mx-2" severity="info" value="67224"></Tag
          ><Tag class="mx-2" severity="warning" value="13981"></Tag>
        </div>
      </div>
    </div>
    <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
      <div class="card surface-0 shadow-1 p-4">
        <div class="grid">
          <div class="col-12">
            <div class="text-xl font-medium">Bo'sh ish o'rinlari</div>
          </div>
          <div class="col-12 px-8">
            <Chart
              type="doughnut"
              :data="genderchartData"
              :options="lightOptions"
            />
          </div>
          <Divider align="center" type="dashed">
            <div class="font-medium">Hisobotlar</div>
          </Divider>
          <div class="font-medium">Xodimlar soni</div>
          <Tag class="mx-2" value="81205"></Tag>
          <Tag class="mx-2" severity="info" value="67224"></Tag
          ><Tag class="mx-2" severity="warning" value="13981"></Tag>
        </div>
      </div>
    </div>
    <div class="col-12 sm:col-6 md:col-6 lg:col-3 xl:col-3">
      <div class="card surface-0 shadow-1 p-4">
        <div class="grid">
          <div class="col-12">
            <div class="text-xl font-medium">Temir daftardagi xodimlar</div>
          </div>
          <div class="col-12 px-8">
            <Chart
              type="doughnut"
              :data="genderchartData"
              :options="lightOptions"
            />
          </div>
          <Divider align="center" type="dashed">
            <div class="font-medium">Hisobotlar</div>
          </Divider>
          <div class="font-medium">Xodimlar soni</div>
          <Tag class="mx-2" value="81205"></Tag>
          <Tag class="mx-2" severity="info" value="67224"></Tag
          ><Tag class="mx-2" severity="warning" value="13981"></Tag>
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
            data: [121, 754],
            backgroundColor: ["#3b82f6", "#22c55e"],
            hoverBackgroundColor: ["#64B5F6", "#81C784"],
          },
        ],
      },
      secondtData: {
        labels: ["30 yoshgacha", "30-45 yoshgacha", "45 yoshdan kattalar"],
        datasets: [
          {
            data: [121, 754, 45],
            backgroundColor: ["#F59E0B", "#3b82f6", "#ef4444"],
            hoverBackgroundColor: ["#F59E0B", "#3b82f6", "#ef4444"],
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

      polarData: {
        datasets: [
          {
            data: [1323, 213, 7232, 3222, 1234, 923, 300, 69],
            backgroundColor: [
              "#42A5F5",
              "#66BB6A",
              "#FFA726",
              "#26C6DA",
              "#7E57C2",
              "#F59E0B",
              "#3b82f6",
              "#ef4444",
            ],
            label: "My dataset",
          },
        ],
        labels: [
          "Tugallanmagan oliy (kunduzgi)",
          "Tugallanmagan oliy (kechki)",
          "Tugallanmagan oliy (sirtqi)",
          "Tugallanmagan oliy (masofaviy)",
          "O'rta",
          "Tugallanmagan o'rta (11ni tugatmagan)",
          "Tayanch o'rta",
          "Tugallanmagan tayanch (9ni tugatmagan)",
        ],
      },
      polarchartOptions: {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
        scales: {
          r: {
            grid: {
              color: "#ebedef",
            },
          },
        },
      },

      // gender chart
      genderchartData: {
        labels: ["Erkaklar", "Ayollar"],
        datasets: [
          {
            data: [67224, 13981],
            backgroundColor: ["#3b82f6", "#F59E0B"],
            hoverBackgroundColor: ["#64B5F6", "#F59E0B"],
            hoverOffset: 4,
          },
        ],
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
<style lang="">
</style>