import Ajax from "@/ajax/Ajax";
import mockAjax from "@/ajax/MockAjax";

export const reqCateGoryList = () => {
  return Ajax({
    method: "GET",
    url: "/product/getBaseCategoryList",
  });
};
// reqCateGoryList();
//发送mock本地请求
export const reqBannerList = () => {
  return mockAjax({
    method: "GET",
    url: "/banner",
  });
};
export const reqFloorList = () => {
  return mockAjax({
    method: "GET",
    url: "/floor",
  });
};

//Search
export const reqGoodsListInfo = (searchParams) => {
  return Ajax({
    method: "POST",
    url: "/list",
    data: searchParams,
  });
};

//Detail
export const reqDetailInfo = (skuId) => {
  return Ajax({
    method: "GET",
    url: `/item/${skuId}`,
  });
};
