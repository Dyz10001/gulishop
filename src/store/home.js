import { reqCateGoryList, reqBannerList, reqFloorList } from "@/api";

const state = {
  categroyList: [],
  bannerList: [],
  floorList: [],
};
const getters = {};
const mutations = {
  RECIVECATEGROYLIST(state, categroyList) {
    state.categroyList = categroyList;
  },
  RECIVEBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  RECIVEFLOORLIST(state, floorList) {
    state.floorList = floorList;
  },
};
const actions = {
  async getCategroyList({ commit }) {
    const result = await reqCateGoryList();
    if (result.code === 200) {
      commit("RECIVECATEGROYLIST", result.data);
    }
  },
  //发送banner mock请求，触发mutation
  async getBannerList({ commit }) {
    const result = await reqBannerList();
    if (result.code === 200) {
      commit("RECIVEBANNERLIST", result.data);
    }
  },
  //发送floor mock请求，触发mutation
  async getFloorList({ commit }) {
    const result = await reqFloorList();
    if (result.code === 200) {
      commit("RECIVEFLOORLIST", result.data);
    }
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};
