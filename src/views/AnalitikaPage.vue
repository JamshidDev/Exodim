<template>
  <div class="grid surface-0 py-2 px-2">
    <div class="col-12">
        <h1 @click="eksport">Analitika</h1>
    </div>
    <!-- <div class="col-12">
      <Fieldset legend="Ko'proq" :toggleable="true">
        <div class="grid">
          <div class="col-3">
            <div class="field-checkbox">
              <Checkbox
                @change="changeCheck()"
                inputId="city2"
                name="city"
                :value="1"
                v-model="option"
              />
              <label for="city2">F.I.O </label>
            </div>
            <div class="field-checkbox">
              <Checkbox
                @change="changeCheck()"
                inputId="city2"
                name="city"
                :value="2"
                v-model="option"
              />
              <label for="city2">Lavozim</label>
            </div>
            <div class="field-checkbox">
              <Checkbox
                @change="changeCheck()"
                inputId="city2"
                name="city"
                :value="3"
                v-model="option"
              />
              <label for="city2">Bo'lim nomi</label>
            </div>
            <div class="field-checkbox">
              <Checkbox
                @change="changeCheck()"
                inputId="city2"
                name="city"
                :value="{ id: 4, name: 'sdfsdf' }"
                v-model="option"
              />
              <label for="city2">Faoliyat turi</label>
            </div>
          </div>
          <div class="col-3">
            <div class="field-checkbox">
              <Checkbox
                @change="changeCheck()"
                inputId="city2"
                name="city"
                :value="1"
                v-model="option"
              />
              <label for="city2">F.I.O </label>
            </div>
            <div class="field-checkbox">
              <Checkbox
                @change="changeCheck()"
                inputId="city2"
                name="city"
                :value="2"
                v-model="option"
              />
              <label for="city2">Lavozim</label>
            </div>
            <div class="field-checkbox">
              <Checkbox
                @change="changeCheck()"
                inputId="city2"
                name="city"
                :value="3"
                v-model="option"
              />
              <label for="city2">Bo'lim nomi</label>
            </div>
            <div class="field-checkbox">
              <Checkbox
                @change="changeCheck()"
                inputId="city2"
                name="city"
                :value="{ id: 4, name: 'sdfsdf' }"
                v-model="option"
              />
              <label for="city2">Faoliyat turi</label>
            </div>
          </div>
        </div>
      </Fieldset>
    </div> -->
  </div>
  <div class="grid">
    <div class="col-12">
    </div>
    <div class="col-12 flex">
        <eksport-table-pdf ref="eksport_ref"></eksport-table-pdf>
    </div>
  </div>
</template>
<script>
import eksportTablePdf from '@/components/eksportTablePdf'
export default {
 components:{
    eksportTablePdf
 },
  data() {
    return {
      option: [],
    
    };
  },
  methods: {
    changeCheck() {
      console.log(this.option);
    },
    eksport(){
        this.$refs.eksport_ref.generatePDF()
    }
    
   
   

  },
};
</script>
<style lang="scss">
.paper_container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.paper {
  
}


.document_container {
  width: 680px;
  padding: 0px 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .logo_box {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 60px;
    }
  }
  .doc_top_title {
    width: 100%;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
  }
  .doc_top_title {
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
  }
  .doc_top_text {
    width: 100%;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
  }
  .border_adress {
    width: 100%;
    text-align: center;
    font-size: 11px;
    font-weight: 500;
    padding: 5px 0px;
    border-top: 4px solid #000000;
    border-bottom: 4px solid #000000;
    margin-top: 10px;
    margin-bottom: 20px;
    color: #000000;
  }
  .document_header {
    display: flex;
    justify-content: start;
    margin-bottom: 5px;
    margin-left: 10px;
    .document_date {
      font-size: 13px;
      font-weight: 700;
    }
  }
  .document_factory {
    width: 100%;
    display: flex;
    justify-content: end;
    margin: 10px 0px;
    .factory_name {
      font-size: 14px;
      font-weight: 700;
      margin-right: 160px;
    }
  }
  .document_details {
    width: 100%;
    display: flex;
    justify-content: start;
    margin-left: 10px;
    .details_text {
      max-width: 200px;
      font-size: 11px;
      font-weight: 600;
      color: #000000;
    }
  }
  .document_center {
    margin-left: 10px;
    width: 100%;
    box-sizing: border-box;
    padding-top: 20px;
    color: #000000;
    font-size: 14px;
    font-weight: 600;
  }
  .document_bos {
    width: 100%;
    padding: 0px 10px;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    .bos_position {
      font-weight: 700;
      font-size: 14px;
      color: #000000;
    }
    .bos_fullName {
      font-weight: 700;
      font-size: 14px;
      color: #000000;
    }
  }
}
</style>