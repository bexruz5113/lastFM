import Vue from "vue";
import Vuex from "vuex";
import album from "./modules/tagAlbum";
import artist from "./modules/artists";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: { album, artist },
  strict: true,
});
