import Ajax from "src-1/ajax/Ajax";
export const reqCategoryList = () => {
  return Ajax({
    method: "GET",
    url: "/product/getBaseCategoryList",
  });
};
