import axios from "axios";

const state = () => ({
  song: [],
});
const getters = {
  song(state) {
    return state.song;
  },
};

const mutations = {
  GET_ARTISTSONG(state, payload) {
    state.song = payload;
  },
};
const actions = {
  async getArtistSong({ commit }, artist, song) {
    await axios
      .get(
        `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=524389732c4c562cf4deb139ddb0c14f&artist=${artist}&track=${song}&format=json`
      )
      .then((res) => {
        console.log(res);
        commit("GET_ARTISTSONG", res.data.track);
      });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
