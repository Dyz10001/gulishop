import Ajax from "@/ajax/Ajax";
export const reqCategoryList = () => {
  return Ajax({
    method: "GET",
    url: "/product/getBaseCategoryList",
  });
};
