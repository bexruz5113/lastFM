import Vue from "vue";
import Vuex from "vuex";
import music from "./modules/lastFm";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: { music },
  strict: true,
});
