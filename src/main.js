import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import TypeNav from "@/components/TypeNav";
import store from "@/store";
import SliderLoop from "@/components/SliderLoop";
import "@/mock/mockServer.js";

Vue.config.productionTip = false;
Vue.component("TypeNav", TypeNav);
Vue.component("SliderLoop", SliderLoop);
new Vue({
  el: "#app",
  store,
  router,
  render: (h) => h(App),
});
