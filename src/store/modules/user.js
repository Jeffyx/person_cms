import Vue from "vue";
import { login } from "api/login";

const user = {
  state: {
    token: "",
    name: ""
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      Vue.set(state, "name", name);
    }
  },
  actions: {
    logIn: async ({ commit }, data) => {
      try {
        const res = await login(data);
        console.log('res',res)
        if(res.code=='200'){
            commit('SET_TOKEN',res.token)
            return Promise.resolve(res)
        }
      } catch (err) {
          return Promise.reject(err)
      }
    }
  }
};

export default user;
