import { reqCategoryList } from "@/api";
const state = {
  categoryList: [],
};
const actions = {
  async getReqCategoryList({ commit }) {
    const result = await reqCategoryList();
    console.log(result);
    commit("REQCATEGORYLIST", result.data);
  },
};
const getters = {};
const mutations = {
  REQCATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
