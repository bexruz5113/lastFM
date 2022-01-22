import axios from "axios";

const state = () => ({
  track: [],
});
const getters = {
  track(state) {
    return state.track;
  },
};

const mutations = {
  GET_TRACK(state, payload) {
    state.track = payload;
  },
};
const actions = {
  getChartTopTrack({ commit }) {
    axios
      .get(
        "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&artist=cher&api_key=524389732c4c562cf4deb139ddb0c14f&format=json"
      )
      .then((res) => {
        console.log(res);
        commit("GET_TRACK", res.data.tracks.track);
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
