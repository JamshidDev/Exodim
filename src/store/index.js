// import Vue from "vue";
import Vuex from "vuex";

// import appModules from "./modules/appModules";
// import newsModules from "./modules/newsModules";
import adminModules from './Modules/adminModules'

// Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    // appModules,
    // newsModules,
    adminModules,
  },
});