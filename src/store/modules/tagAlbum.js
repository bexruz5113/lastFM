import axios from "axios";

const state = () => ({
  album: [],
});
const getters = {
  album(state) {
    return state.album;
  },
};
const mutations = {
  GET_TAG(state, payload) {
    state.album = payload;
  },
};
const actions = {
  async getTagTopAlbums({ commit }, payload) {
    await axios
      .get(
        `https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${payload}&api_key=524389732c4c562cf4deb139ddb0c14f&format=json`
      )
      .then((res) => {
        console.log(res);
        commit("GET_TAG", res.data.albums.album);
      })
      .catch((err) => console.log(err));
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
