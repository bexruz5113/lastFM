import axios from "axios";

const state = () => ({
  artist: [],
});
const getters = {
  artist(state) {
    return state.artist;
  },
};

const mutations = {
  GET_ARTIST(state, payload) {
    state.artist = payload;
  },
};
const actions = {
  async getArtistTopAlbums({ commit }) {
    await axios
      .get(
        "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=jony&api_key=524389732c4c562cf4deb139ddb0c14f&format=json"
      )
      .then((res) => {
        console.log(res);
        commit("GET_ARTIST", res.data.topalbums.album);
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
