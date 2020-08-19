import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Register from "@/pages/Register";
import Login from "@/pages/Login";

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
