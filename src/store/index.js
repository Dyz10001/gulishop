import Vue from "vue";
import Vuex from "vuex";
import home from "./home";
import user from "./user";
Vue.use(Vuex);
const state = {};
const actions = {};
const getters = {};
const mutations = {};

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules: {
    home,
    user,
  },
});
