import Vue from "vue";
import Vuex from "vuex";
import home from "./home";
import user from "./user";
import search from "./search";

Vue.use(Vuex);

const state = {
  categroyList: [],
};
const getters = {};
const mutations = {};
const actions = {};
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    home,
    user,
    search,
  },
});
export default store;
