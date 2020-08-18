import Home from "src-1/pages/Home";
import Search from "src-1/pages/Search";
import Register from "src-1/pages/Register";
import Login from "src-1/pages/Login";

export default [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/search:keyword?",
    name: "Search",
    component: Search,
    props(route) {
      return {
        ...route.params,
        ...route.query,
      };
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    redirect: "/home",
  },
];
