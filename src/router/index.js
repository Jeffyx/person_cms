import Vue from "vue";
import Router from "vue-router";
import Login from "views/Login/Login";
import Home from "views/Home/Home";
import AddUser from "views/User/AddUser";
import UserList from "views/User/UserList";
import DepMrg from "views/DepMrg/DepMrg";
import ComMrg from "views/ComMrg/ComMrg";
import SalaryMrg from "views/SalaryMrg/SalaryMrg";
import PactMrg from "views/PactMrg/PactMrg"
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
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
    },
    {
      path: "/user/list",
      component: UserList,
      name: "userList"
    },
    {
      path: "/user/add",
      component: AddUser,
      name: "addUser"
    },
    {
      path: "/depmrg",
      component: DepMrg,
      name: "depmrg"
    },
    {
      path: "/commrg",
      component: ComMrg,
      name: "commrg"
    },
    {
      path: "/salary",
      component: SalaryMrg,
      name: "salarymrg"
    },
    {
      path:'/pact',
      component:PactMrg,
      name:'pact'
    }
  ]
});
