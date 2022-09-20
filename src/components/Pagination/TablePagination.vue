<template>
  <div class="w-full">
    <Paginator
      v-model:first="currentPage"
      v-model:rows="page_count"
      :totalRecords="total_page"
      class="py-0 w-full "
      template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
      @page="changePagination($event)"
    >
      >
      <template #start>
        <InputText
          type="text"
          v-model.number="enter_page_value"
          v-maska="'####'"
          class="w-5rem"
          @keyup.enter="enter_page()"
        />
      </template>
      <template #end>
        <Dropdown
          v-model="row_page_drop"
          :options="row_per_page"
          optionLabel="name"
          @change="changeRowPage"
        />
      </template>
    </Paginator>
  </div>
</template>
<script>
export default {
  props: {
    total_page: {
      type: Number,
      default: 0,
    },
  },
  watch:{
    total_page(value){
      if(value<30){
        this.row_page_drop={
          name: "20",
          count: 20,
        }
      }else if(value<20){
        this.row_page_drop={
          name: "10",
          count: 10,
        }
      }
    }
  },
  data() {
    return {
      pageDetails: {
        page: 1,
        per_page: 10,
      },

      currentPage: 1,
      page_count: 10,

      enter_page_value: 1,

      row_per_page: [
        {
          name: "10",
          count: 10,
        },
        {
          name: "20",
          count: 20,
        },
        {
          name: "30",
          count: 30,
        },
      ],
      row_page_drop: {
        name: "10",
        count: 10,
      },
    };
  },

  methods: {
    enter_page() {
      this.pageDetails.page = this.enter_page_value;
      this.currentPage =
        (this.enter_page_value - 1) * this.pageDetails.per_page;
      this.pageEmit();
      console.log(this.pageDetails);
    },
    changeRowPage(event) {
      this.page_count = event.value.count;
      this.pageDetails.per_page = event.value.count;
      this.pageDetails.page = 1;
      this.currentPage = 1;
      this.enter_page_value = 1;
      this.pageEmit();
      console.log(this.pageDetails);
    },
    changePagination(event) {
      this.pageDetails.per_page = event.rows;
      this.pageDetails.page = (event.first + event.rows) / event.rows;
      this.enter_page_value = (event.first + event.rows) / event.rows;
      this.pageEmit();
      console.log(this.pageDetails);
    },
    pageEmit() {
      this.$emit("pagination", this.pageDetails);
    },
  },
};
</script>