import axios from "axios";

const state = () => ({
  music: [],
});
const getters = {
  music(state) {
    return state.music;
  },
};
const mutations = {
  GET_LIST(state, payload) {
    state.music = payload;
  },
};
const actions = {
  getMusicList({ commit }) {
    axios
      .get(
        "https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=disco&api_key=524389732c4c562cf4deb139ddb0c14f&format=json"
      )
      .then((res) => {
        console.log(res);
        commit("GET_LIST", res.data);
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
