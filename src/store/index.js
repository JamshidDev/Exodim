// import Vue from "vue";
import Vuex from "vuex";

import appModules from "./Modules/appModules";
import adminModules from './Modules/adminModules'
import statisticModule from "./Modules/statisticModule";
import ViewStatisticModule from "./Modules/ViewStatisticModule";

// Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    appModules,
    adminModules,
    statisticModule,
    ViewStatisticModule,
  },
});