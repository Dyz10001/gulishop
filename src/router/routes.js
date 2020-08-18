import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
    meta: {
      isHide: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      isHide: true,
    },
  },
  {
    path: "/search/:keyword?",
    name: "Search",
    component: Search,
    props(route) {
      return {
        keyword: route.params.keyword,
        keyword1: route.query.keyword,
      };
    },
  },
  {
    path: "/",
    redirect: "/home",
  },
];
export default routes;
