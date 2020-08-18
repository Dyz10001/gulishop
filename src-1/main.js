import Vue from "vue";
import App from "src-1/App.vue";
import router from "src-1/router";
import TypeNav from "src-1/components/TypeNav";
import store from "src-1/store";

Vue.config.productionTip = false;
Vue.component("TypeNav", TypeNav);
const vm = new Vue({
  el: "#app",
  store,
  router,
  render: (h) => h(App),
});
