<template>
  <div>
    <Sidebar v-model:visible="visibleFull" :baseZIndex="10000" position="full">
      <div class="grid">
        <div class="col-12 flex justify-content-center">
          <div class="document_container">
            <table
              class="table"
              cellpadding="0"
              cellspacing="0"
              style="
                margin-left: -25.5pt;
                margin-top: 0in;
                border-collapse: collapse;
              "
            >
              <tr>
                <th width="15%" style="min-width: 15%"></th>
                <th width="12%" style="min-width: 12%"></th>
                <th width="12%" style="min-width: 12%"></th>
                <th width="12%" style="min-width: 12%"></th>
                <th width="12%" style="min-width: 12%"></th>
                <th width="12%" style="min-width: 12%"></th>
                <th width="10%" style="min-width: 10%"></th>
                <th width="100px" style="max-width: 100px"></th>
              </tr>
              <tbody>
                <tr>
                  <td colspan="8" style="text-align: center; font-size: 18.5">
                    <b>MA'LUMOTNOMA </b>
                    <p style="margin-bottom: 0px; margin-top: 0px">
                      <b> {{ cadry.fullName }}</b>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colspan="7"></td>
                  <td style="text-align: right" rowspan="8">
                    <img
                      :src="cadry.phote"
                      width="112"
                      height="153"
                    />
                  </td>
                </tr>
                <tr style="font-size: 14.5px; margin-bottom: 4pt">
                  <td colspan="7">{{cadry.post_date}} dan:</td>
                </tr>
                <tr style="font-size: 14.5px; margin-bottom: 4pt">
                  <td colspan="6">
                    <b
                      >{{cadry.post_name}}</b
                    >
                  </td>
                  <td></td>
                </tr>
                <tr style="font-size: 14.5px">
                  <td colspan="3">
                    <b>Tug'ilgan yili:</b>
                  </td>
                  <td></td>
                  <td colspan="3">
                    <b>Tug'ilgan joyi:</b>
                  </td>
                </tr>
                <tr style="font-size: 14.5px">
                  <td
                    colspan="3"
                    style="vertical-align: top; margin-bottom: 4pt"
                  >
                  {{cadry.birth_date}}
                  </td>
                  <td></td>
                  <td colspan="3">{{cadry.birth_place}}</td>
                </tr>
                <tr style="font-size: 14.5px">
                  <td colspan="3">
                    <b>Millati:</b>
                  </td>
                  <td></td>
                  <td colspan="3">
                    <b>Partiyaviyligi:</b>
                  </td>
                </tr>
                <tr style="font-size: 14.5px; margin-bottom: 4pt">
                  <td colspan="3" style="vertical-align: top">{{cadry.nationality}}</td>
                  <td></td>
                  <td colspan="3">{{cadry.party}}</td>
                </tr>
                <tr style="font-size: 14.5px">
                  <td colspan="3">
                    <b>Ma'lumoti:</b>
                  </td>
                  <td></td>
                  <td colspan="3">
                    <b>Tamomlagan:</b>
                  </td>
                </tr>
                <tr style="font-size: 14.5px; margin-bottom: 4pt">
                  <td colspan="3" style="vertical-align: top">{{cadry.education}}</td>
                  <td></td>
                  <td colspan="4" >
                    <div v-for="item in cadry.educations" :key="item.id">
                        {{item.date2}} yil,  {{item.name}}
                    </div>
                   
                </td>
                </tr>
                <tr style="font-size: 14.5px; margin-bottom: 4pt">
                  <td colspan="3" >
                    <b>Ma'lumoti bo'yicha mutaxassisligi:</b>
                  </td>
                  <td></td>
                  <td colspan="4" >
                    <div v-for="item in cadry.educations" :key="item.speciality">{{item.speciality}}</div>
                </td>
                </tr>

                <tr style="font-size: 14.5px">
                  <td colspan="3">
                    <b>Ilmiy darajasi:</b>
                  </td>
                  <td></td>
                  <td colspan="4">
                    <b>Ilmiy unvoni:</b>
                  </td>
                </tr>

                <tr style="font-size: 14.5px; margin-bottom: 4pt">
                  <td colspan="3">{{cadry.academec_degree}}</td>
                  <td></td>
                  <td colspan="4">{{cadry.academec_title}}</td>
                </tr>


                <tr style="font-size: 14.5px">
                  <td colspan="3">
                    <b>Qaysi chet tillarini biladi:</b>
                  </td>
                  <td></td>
                  <td colspan="4">
                    <b>Xarbiy (maxsus) unvoni:</b>
                  </td>
                </tr>

                <tr style="font-size: 14.5px; margin-bottom: 4pt">
                  <td colspan="3">{{cadry.lan}}</td>
                  <td></td>
                  <td colspan="4">{{cadry.military_rank}}</td>
                </tr>

                <tr style="font-size: 14.5px">
                  <td colspan="8">
                    <b>Davlat mukofotlari bilan taqdirlanganmi(qanaqa):</b>
                  </td>
                </tr>
                <tr style="font-size: 14.5px; margin-bottom: 4pt">
                  <td colspan="8">Taqdirlanmagan</td>
                </tr>

                <tr style="font-size: 14.5px">
                  <td colspan="8">
                    <b
                      >Xalq deputatlari respublika, viloyat, shahar va tuman
                      Kengashi deputatimi yoki boshqa saylanadigan organlarning
                      a'zosimi(to'liq ko'rsatilishi lozim):</b
                    >
                  </td>
                </tr>
                <tr style="font-size: 14.5px; margin-bottom: 4pt">
                  <td colspan="8">
                    <span v-for="(item, index) in cadry.incentives" :key="item.id" style="padding-right:10px">
                        {{item.type_action}} {{(index+1)==cadry.incentives.length? "" : ","}}
                    </span>
                  </td>
                </tr>


                <tr>
                  <td
                    colspan="8"
                    style="
                      text-align: center;
                      font-size: 18.5;
                      margin-bottom: 4pt;
                    "
                  >
                    <b>MEHNAT FAOLIYATI</b>
                  </td>
                </tr>

                <tr v-for="item in cadry.carers" :key="item.id" style="font-size: 14.5; margin-bottom: 4pt">
                <td style="vertical-align:top">{{item.date1}} -{{item.date2}}  yy.</td>
                <td colspan="7">
                  {{item.staff_name}}
                </td>
              </tr>
              </tbody>
            </table>

            <p style="text-autospace: none"><span>&nbsp;</span></p>

            <b
              ><span><br clear="all" style="page-break-before: always" /> </span
            ></b>

            <b style="text-align: center; font-size: 12pt; margin-top: 0px"
            >{{cadry.fullName}}ning yaqin qarindoshlari haqida
            ma'lumot</b
          >

            <p style="text-align: center; margin-bottom: 5px; margin-top: 0px">
              <b><span>MA'LUMOT</span></b>
            </p>

            <table
              class="table"
              cellpadding="0"
              cellspacing="0"
              style="
                margin-left: -25.5pt;
                border-collapse: collapse;
                border: none;
                text-align: center;
                font-size: 14.5;
              "
            >
              <tr style=" border: 0px;">
                <th width="16%" style="min-width: 16%; border: 0px;"></th>
                <th width="18%" style="min-width: 16%; border: 0px;"></th>
                <th width="22%" style="min-width: 16%; border: 0px;"></th>
                <th width="22%" style="min-width: 16%; border: 0px;"></th>
                <th width="22%" style="min-width: 16%; border: 0px;"></th>
              </tr>
              <tbody>
                <tr>
                  <td style="border: solid black 1pt">
                    <b>Qarindoshligi</b>
                  </td>
                  <td style="border: solid black 1pt">
                    <b>Familiyasi,ismi va otasining ismi</b>
                  </td>
                  <td style="border: solid black 1pt">
                    <b>Tug'ilgan yili va joyi</b>
                  </td>
                  <td style="border: solid black 1pt">
                    <b>Ish joyi va lavozimi</b>
                  </td>
                  <td style="border: solid black 1pt">
                    <b>Turar joyi</b>
                  </td>
                </tr>

                <tr v-for="item in cadry.relatives" :key="item.id">
                <td style="border: solid black 1pt"><b>{{item.relative}}</b></td>
                <td style="border: solid black 1pt">
                  {{item.fullname}}
                </td>
                <td style="border: solid black 1pt">
                  {{item.birth_place}}
                </td>
                <td style="border: solid black 1pt">{{item.relative}}</td>
                <td style="border: solid black 1pt">
                  {{item.address}}
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Sidebar>
  </div>
</template>
<script>
import EksportService from "../../service/servises/EksportService";
export default {
  data() {
    return {
      visibleFull: false,
      cadry: {
        fullName: null,
        phote: null,
        birth_place: null,
        birth_date: null,
        post_name: null,
        post_date: null,
        carers: [],
        relatives: [],
        educations: [],
        lan: null,
        academec_degree:null,
        academec_title:null,
        deputy:null,
        military_rank:null,
        incentives:[],
        nationality:null,
        party:null,
        education:null,
      },
    };
  },
  methods: {
    showResume(id) {
      console.log(id);
      EksportService.get_ResumeDetails({ id: id })
        .then((res) => {
          this.cadry.fullName = res.data.cadry.fullname;
          this.cadry.phote = res.data.cadry.photo;
          this.cadry.birth_place = res.data.cadry.birth_place;
          this.cadry.birth_date = res.data.cadry.birth_date;
          this.cadry.post_name = res.data.cadry.staff.post_name;
          this.cadry.post_date = res.data.cadry.staff.post_date;
          this.cadry.relatives = res.data.relatives;
          this.cadry.carers = res.data.carers;
          this.cadry.educations = res.data.educations;
          this.cadry.lan = res.data.lan;
          this.cadry.academec_degree = res.data.cadry.academec_degree;
          this.cadry.academec_title = res.data.cadry.academec_title;
          this.cadry.deputy = res.data.cadry.deputy;
          this.cadry.military_rank = res.data.cadry.military_rank;
          this.cadry.incentives = res.data.incentives;
          this.cadry.nationality = res.data.cadry.nationality;
          this.cadry.party = res.data.cadry.party;
          this.cadry.education = res.data.cadry.education;


          
          console.log(res.data);
          this.visibleFull = true;
          // setTimeout(()=>{
          //     this.visibleFull = true;
          // }, 500)
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style lang="scss"  scoped>
.document_container {
  max-width: 800px;
}
</style>