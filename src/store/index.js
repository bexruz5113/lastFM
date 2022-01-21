import Vue from "vue";
import Vuex from "vuex";
import music from "./modules/lastFm";
import artist from "./modules/artists";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: { music, artist },
  strict: true,
});
