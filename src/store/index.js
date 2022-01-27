import Vue from "vue";
import Vuex from "vuex";
import album from "./modules/tagAlbum";
import artist from "./modules/artists";
import artistInfo from "./modules/artistInfo";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { album, artist, artistInfo },
  strict: true,
});
