import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import routes from "./routes";

const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function(location, onResolved, onRejected) {
  if (onResolved === undefined && onRejected === undefined) {
    originPush.call(this, location).catch(() => {});
  } else {
    originPush.call(this, location, onResolved, onRejected);
  }
};
VueRouter.prototype.replace = function(location, onResolved, onRejected) {
  if (onResolved === undefined && onRejected === undefined) {
    originReplace.call(this, location).catch(() => {});
  } else {
    originReplace.call(this, location, onResolved, onRejected);
  }
};

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});
export default router;
