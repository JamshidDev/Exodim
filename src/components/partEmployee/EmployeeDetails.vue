<template>
  <div>
    <Sidebar v-model:visible="visibleFull" :baseZIndex="10000" position="full">
      <div class="grid">
        <div class="col-12 flex justify-content-center">
          <div class="document_container">
            <div class="grid pb-8 mb-8">
              <div class="col-12">
                <h5
                  class="
                    font-bold
                    text-2xl text-center
                    mb-0
                    text-black-alpha-90
                  "
                >
                  MA'LUMOTNOMA
                </h5>
                <h6
                  class="font-bold text-xl text-center mt-1 text-black-alpha-90"
                >
                  {{ cadry.fullName }}
                </h6>
              </div>

              <div class="col-10">
                <div class="grid">
                  <div class="col-12">
                    <h6
                      class="
                        font-medium
                        text-base text-left
                        my-1
                        text-black-alpha-80
                      "
                    >
                      {{ cadry.post_date }} dan:
                    </h6>
                    <h6
                      class="
                        font-semibold
                        text-lg text-left
                        mt-0
                        text-black-alpha-90
                      "
                    >
                      {{cadry.post_name }}
                    </h6>
                  </div>
                  <div class="col-6">
                    <h6
                      class="
                        font-semibold
                        text-lg text-left
                        mb-1
                        text-black-alpha-90
                      "
                    >
                      Tug'ilgan yili:
                    </h6>
                    <h6
                      class="
                        font-medium
                        text-base text-left
                        my-0
                        text-black-alpha-80
                      "
                    >
                      {{ cadry.birth_date }}
                    </h6>
                  </div>
                  <div class="col-6">
                    <h6
                      class="
                        font-semibold
                        text-lg text-left
                        mb-1
                        text-black-alpha-90
                      "
                    >
                      Tug'ilgan joyi:
                    </h6>
                    <h6
                      class="
                        font-medium
                        text-base text-left
                        my-0
                        text-black-alpha-80
                      "
                    >
                      {{ cadry.birth_place }}
                    </h6>
                  </div>
                  <div class="col-6">
                    <h6
                      class="
                        font-semibold
                        text-lg text-left
                        mb-1
                        text-black-alpha-90
                      "
                    >
                      Millati:
                    </h6>
                    <h6
                      class="
                        font-medium
                        text-base text-left
                        my-0
                        text-black-alpha-80
                      "
                    >
                      {{ cadry.nationality }}
                    </h6>
                  </div>
                  <div class="col-6">
                    <h6
                      class="
                        font-semibold
                        text-lg text-left
                        mb-1
                        text-black-alpha-90
                      "
                    >
                      Partiyaviyligi:
                    </h6>
                    <h6
                      class="
                        font-medium
                        text-base text-left
                        my-0
                        text-black-alpha-80
                      "
                    >
                      {{ cadry.party }}
                    </h6>
                  </div>
                </div>
              </div>
              <div class="col-2 flex justify-content-center align-items-end">
                <img :src="cadry.phote" width="112" height="153" />
              </div>
              <div class="col-5">
                <h6
                  class="
                    font-semibold
                    text-lg text-left
                    mb-1
                    text-black-alpha-90
                  "
                >
                  Ma'lumoti:
                </h6>
                <h6
                  class="
                    font-medium
                    text-base text-left
                    my-0
                    text-black-alpha-80
                  "
                >
                  {{ cadry.education }}
                </h6>
              </div>
              <div class="col-7">
                <h6
                  class="
                    font-semibold
                    text-lg text-left
                    mb-1
                    text-black-alpha-90
                  "
                >
                  Tamomlagan:
                </h6>
                <h6
                  v-for="item in cadry.educations"
                  :key="item.id"
                  class="
                    font-medium
                    text-base text-left
                    my-0
                    text-black-alpha-80
                  "
                >
                  {{ item.date2 }} yil, {{ item.name }}
                </h6>
              </div>

              <div class="col-5">
                <h6
                  class="
                    font-semibold
                    text-lg text-left
                    mb-1
                    text-black-alpha-90
                  "
                >
                  Ma'lumoti bo'yicha mutaxassisligi:
                </h6>
              </div>
              <div class="col-7">
                <h6
                  v-for="item in cadry.educations"
                  :key="item.id"
                  class="
                    font-medium
                    text-base text-left
                    my-0
                    text-black-alpha-80
                  "
                >
                  {{ item.speciality }}
                </h6>
              </div>

              <div class="col-5">
                <h6
                  class="
                    font-semibold
                    text-lg text-left
                    mb-1
                    text-black-alpha-90
                  "
                >
                  Ilmiy darajasi:
                </h6>
                <h6
                  class="
                    font-medium
                    text-base text-left
                    my-0
                    text-black-alpha-80
                  "
                >
                  {{ cadry.academec_degree }}
                </h6>
              </div>
              <div class="col-7">
                <h6
                  class="
                    font-semibold
                    text-lg text-left
                    mb-1
                    text-black-alpha-90
                  "
                >
                  Ilmiy unvoni:
                </h6>
                <h6
                  class="
                    font-medium
                    text-base text-left
                    my-0
                    text-black-alpha-80
                  "
                >
                  {{ cadry.academec_title }}
                </h6>
              </div>

              <div class="col-5">
                <h6
                  class="
                    font-semibold
                    text-lg text-left
                    mb-1
                    text-black-alpha-90
                  "
                >
                  Qaysi chet tillarini biladi:
                </h6>
                <h6
                  class="
                    font-medium
                    text-base text-left
                    my-0
                    text-black-alpha-80
                  "
                >
                  {{ cadry.lan }}
                </h6>
              </div>
              <div class="col-7">
                <h6
                  class="
                    font-semibold
                    text-lg text-left
                    mb-1
                    text-black-alpha-90
                  "
                >
                  Xarbiy (maxsus) unvoni:
                </h6>
                <h6
                  class="
                    font-medium
                    text-base text-left
                    my-0
                    text-black-alpha-80
                  "
                >
                  {{ cadry.military_rank }}
                </h6>
              </div>

              <div class="col-6">
                <h6
                  class="
                    font-semibold
                    text-lg text-left
                    mb-1
                    text-black-alpha-90
                  "
                >
                  Davlat mukofotlari bilan taqdirlanganmi(qanaqa):
                </h6>
                <h6
                  class="
                    font-medium
                    text-base text-left
                    my-0
                    text-black-alpha-80
                  "
                >
                  Taqdirlanmagan
                </h6>
              </div>
              <div class="col-6"></div>

              <div class="col-12">
                <h6
                  class="
                    font-semibold
                    text-lg text-left
                    mb-1
                    text-black-alpha-90
                  "
                >
                  Xalq deputatlari respublika, viloyat, shahar va tuman Kengashi
                  deputatimi yoki boshqa saylanadigan organlarning
                  a'zosimi(to'liq ko'rsatilishi lozim):
                </h6>
                <h6
                  class="
                    font-medium
                    text-base text-left
                    my-0
                    text-black-alpha-80
                  "
                >
                  <span
                    v-for="(item, index) in cadry.incentives"
                    :key="item.id"
                    style="padding-right: 10px"
                  >
                    {{ item.type_action }}
                    {{ index + 1 == cadry.incentives.length ? "" : "," }}
                  </span>
                </h6>
              </div>

              <div class="col-12">
                <h6
                  class="
                    font-semibold
                    text-xl text-center text-black-alpha-90
                    pt-4
                    pb-1
                  "
                >
                  MEHNAT FAOLIYATI
                </h6>
              </div>

              <!-- Cadry stuffs -->
              <div class="col-12 pb-6">
                <div class="grid" v-for="item in cadry.carers" :key="item.id">
                  <div class="col-2">
                    <h6
                      class="
                        font-semibold
                        text-lg text-left
                        mb-1
                        text-black-alpha-90
                      "
                    >
                      {{ item.date1 }} -{{ item.date2 }} yy
                    </h6>
                  </div>
                  <div class="col-10">
                    <h6
                      class="
                        font-semibold
                        text-lg text-left
                        mb-1
                        text-black-alpha-90
                      "
                    >
                      {{ item.staff_name }}
                    </h6>
                  </div>
                </div>
              </div>

              <!-- Cadry relatives -->

              <div class="col-12">
                <h6
                  class="
                    font-semibold
                    text-xl text-center text-black-alpha-90
                    py-0
                    mb-0
                  "
                >
                  {{ cadry.fullName }}ning yaqin qarindoshlari haqida ma'lumot
                </h6>
                <h6
                  class="
                    font-semibold
                    text-xl text-center text-black-alpha-90
                    mt-1
                    py-0
                  "
                >
                  MA'LUMOT
                </h6>
                <div class="col-12">
                  <div class="grid my-0 py-0">
                    <div
                      class="
                        col-2
                        border-1 border-800
                        font-medium font-semibold
                        text-lg
                        flex
                        justify-content-center
                        align-items-center
                        mb-1
                        text-black-alpha-90
                        my-0
                      "
                    >
                      Qarindoshligi
                    </div>
                    <div
                      class="
                        col-2
                        border-1 border-800
                        font-medium font-semibold
                        text-lg
                        flex
                        justify-content-center
                        align-items-center
                        mb-1
                        text-black-alpha-90
                        border-left-none
                        my-0
                      "
                    >
                      Familiyasi,ismi va otasining ismi
                    </div>
                    <div
                      class="
                        col-2
                        border-1 border-800
                        font-medium font-semibold
                        text-lg
                        flex
                        justify-content-center
                        align-items-center
                        mb-1
                        text-black-alpha-90
                        border-left-none
                        my-0
                      "
                    >
                      Tug'ilgan yili va joyi
                    </div>
                    <div
                      class="
                        col-3
                        border-1 border-800
                        font-medium font-semibold
                        text-lg
                        flex
                        justify-content-center
                        align-items-center
                        mb-1
                        text-black-alpha-90
                        border-left-none
                        my-0
                      "
                    >
                      Ish joyi va lavozimi
                    </div>
                    <div
                      class="
                        col-3
                        border-1 border-800
                        font-medium font-semibold
                        text-lg
                        flex
                        justify-content-center
                        align-items-center
                        mb-1
                        text-black-alpha-90
                        border-left-none
                        my-0
                      "
                    >
                      Turar joyi
                    </div>
                  </div>
                  <div class="grid my-0 py-0" v-for="item in cadry.relatives" :key="item.id">
                    <div
                      class="
                        col-2
                        border-1 border-800
                        font-medium font-semibold
                        text-lg
                        flex
                        justify-content-center
                        align-items-center
                        mb-1
                        text-black-alpha-90
                        my-0
                        border-top-none
                      "
                    >
                      {{item.relative.name}}
                    </div>
                    <div
                      class="
                        col-2
                        border-1 border-800
                        font-medium font-semibold
                        text-lg
                        flex
                        justify-content-center
                        align-items-center
                        mb-1
                        text-black-alpha-90
                        border-left-none
                        border-top-none

                        my-0
                      "
                    >
                      {{item.fullname}}
                    </div>
                    <div
                      class="
                        col-2
                        border-1 border-800
                        font-medium font-semibold
                        text-lg
                        flex
                        justify-content-center
                        align-items-center
                        mb-1
                        text-black-alpha-90
                        border-left-none
                        border-top-none
                        my-0
                      "
                    >
                    {{item.birth_place}}
                    </div>
                    <div
                      class="
                        col-3
                        border-1 border-800
                        font-medium font-semibold
                        text-lg
                        flex
                        justify-content-center
                        align-items-center
                        mb-1
                        text-black-alpha-90
                        border-left-none
                        border-top-none
                        my-0
                      "
                    >
                    {{item.post}}
                    </div>
                    <div
                      class="
                        col-3
                        border-1 border-800
                        font-medium font-semibold
                        text-lg
                        flex
                        justify-content-center
                        align-items-center
                        mb-1
                        text-black-alpha-90
                        border-left-none
                        border-top-none
                        my-0
                      "
                    >
                    {{item.address}}
                    </div>
                  </div>
                 
                </div>
              </div>

            </div>
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
        academec_degree: null,
        academec_title: null,
        deputy: null,
        military_rank: null,
        incentives: [],
        nationality: null,
        party: null,
        education: null,
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
          this.cadry.post_name = res.data.cadry.staff.staff_full;
          this.cadry.post_date = res.data.cadry.staff.staff_date;
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
  max-width: 900px;
}
</style>