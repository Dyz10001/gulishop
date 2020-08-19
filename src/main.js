import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import TypeNav from "@/components/TypeNav";
import store from "@/store";
import SliderLoop from "@/components/SliderLoop";
import Pagination from "@/components/Pagination";
import "@/mock/mockServer.js";

Vue.config.productionTip = false;
Vue.component("TypeNav", TypeNav);
Vue.component("SliderLoop", SliderLoop);
Vue.component("Pagination", Pagination);
new Vue({
  el: "#app",
  store,
  router,
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
});
