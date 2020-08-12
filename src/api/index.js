import Ajax from "@/ajax/Ajax";
import Axios from "axios";
export const reqCategoryList = () => {
  return Ajax({
    method: "GET",
    url: "/product/getBaseCategoryList",
  });
};
