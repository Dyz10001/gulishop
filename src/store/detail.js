import { reqDetailInfo } from "@/api";
const state = {
  goodsDetailInfo: {},
};

const mutations = {
  RECIVEDETAILINFO(state, goodsDetailInfo) {
    state.goodsDetailInfo = goodsDetailInfo;
  },
};

const actions = {
  async getGoodsDetailInfo({ commit }, skuId) {
    const result = await reqDetailInfo(skuId);
    if (result.code === 200) {
      commit("RECIVEDETAILINFO", result.data);
    }
  },
};
const getters = {
  categoryView(state) {
    return state.goodsDetailInfo.categoryView || {};
  },
  skuInfo(state) {
    return state.goodsDetailInfo.skuInfo || {};
  },
  spuSaleAttrList(state) {
    return state.goodsDetailInfo.spuSaleAttrList || [];
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};
