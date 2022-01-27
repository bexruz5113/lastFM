import axios from "axios";

const state = () => ({
  artistInfo: [],
});
const getters = {
  artistInfo(state) {
    return state.artistInfo;
  },
};

const mutations = {
  GET_ARTISTINFO(state, payload) {
    state.artistInfo = payload;
  },
};
const actions = {
  async getArtistInfoTopAlbums({ commit }, payload) {
    await axios
      .get(
        `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${payload}&api_key=524389732c4c562cf4deb139ddb0c14f&format=json`
      )
      .then((res) => {
        console.log(res);
        commit("GET_ARTISTINFO", res.data.artist);
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
