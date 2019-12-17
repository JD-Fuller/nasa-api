import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

let _api = axios.create({
  baseURL: "https://api.nasa.gov/mars-photos/",
  timeout: 8000
});

const apiBody = "api/v1/rovers/curiosity/photos?earth_date=";
const apiKey = "&api_key=437fUzT5QjmJOdWTVP5zSD4iGFSgD2zDFWpRegxM";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchResults: [],
    activePhoto: {}
  },
  mutations: {
    setSearchResults(state, searchResults) {
      state.searchResults = searchResults;
    },
    setActivePhoto(state, photo) {
      state.activePhoto = photo;
    }
  },
  actions: {
    async searchNasaApi({ commit, dispatch }, query) {
      let res = await _api.get(apiBody + query + apiKey);
      commit("setSearchResults", res.data.photos);
    },
    setActivePhoto({ commit, dispatch }, photo) {
      commit("setActivePhoto", photo);
    }
  },
  modules: {}
});
