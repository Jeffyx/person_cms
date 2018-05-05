import Vue from "vue";
import { login } from "api/login";
import userMrg from "api/userList";

const user = {
  state: {
    token: window.localStorage.getItem('userName'),
    name: "",
    userList: []
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      Vue.set(state, "name", name);
    },
    PUSH_USERLIST: (state, list) => {
      state.userList.push(list);
    },
    SET_USERLIST:(state,list)=>{
      Vue.set(state,"userList",list)
    }
  },
  actions: {
    logIn: async ({ commit }, data) => {
      try {
        const res = await login(data);
        if (res.data.code == "200") {
          commit("SET_TOKEN", res.data.msn);
          window.localStorage.setItem('userName',res.data.msn)
          return Promise.resolve(res.data);
        }
      } catch (err) {
        return Promise.reject(err);
      }
    },
    logOut:async ({commit},data)=>{
      
      commit('SET_TOKEN','');
    },
    addUser: async ({ commit }, data) => {
      try {
        await userMrg.addUser(data);
        commit("PUSH_USERLIST", data);
        return Promise.resolve(1);
      } catch (error) {
        return Promise.reject(0);
      }
    },
    getUserList: async ({ commit, state }, data) => {
      // if (state.userList.length == 0) {
        const res = await userMrg.getUser(data);
        commit("SET_USERLIST", res.data.list);
      // }
    }
  }
};

export default user;
