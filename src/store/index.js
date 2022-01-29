import Vue from "vue";
import Vuex from "vuex";
import album from "./modules/tagAlbum";
import artist from "./modules/artists";
import artistInfo from "./modules/artistInfo";
import song from "./modules/song";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { album, artist, artistInfo, song },
  strict: true,
});
