import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import TypeNav from "@/components/TypeNav";
import store from "@/store";

Vue.config.productionTip = false;
Vue.component("TypeNav", TypeNav);
const vm = new Vue({
  el: "#app",
  store,
  router,
  render: (h) => h(App),
});
