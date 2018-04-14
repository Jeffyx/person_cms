import Vue from "vue";

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
    setName({ commit }, val) {
      commit("SET_NAME", val);
    },
    setToken({commit},val){
        commit("SET_TOKEN",val)
    }
  }
};

export default user;
