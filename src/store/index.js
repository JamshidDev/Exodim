// import Vue from "vue";
import Vuex from "vuex";

import appModules from "./Modules/appModules";
// import newsModules from "./modules/newsModules";
import adminModules from './Modules/adminModules'
import statisticModule from "./Modules/statisticModule";

// Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    appModules,
    // newsModules,
    adminModules,
    statisticModule,
  },
});