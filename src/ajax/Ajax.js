import axios from "axios";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";

const instance = axios.create({
  baseURL: "/api",
  timeout: 20000,
});
instance.interceptors.request.use((config) => {
  Nprogress.start();
  return config;
});
instance.interceptors.response.use(
  (result) => {
    Nprogress.done();
    //console.log("请求拦截了");
    return result.data;
  },
  (error) => {
    Nprogress.done();
    alert("请求失败" + error.message || "未知错误");
    return new Promise(() => {});
  }
);
export default instance;
