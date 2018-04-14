import Vue from "vue";
import Router from "vue-router";
import Login from "views/Login/Login";
import Home from "views/Home/Home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: "/login",
      component: Login,
      name: "login"
    },
    {
      path: "/home",
      component: Home,
      name: "home"
    }
  ]
});
