import Vue from "vue";
import getDep from "api/getDep";
import setDep from "api/setDep";

const position = {
  state: {
    dep: [],
    post: []
  },
  mutations: {
    SET_DEP: (state, dep) => {
      Vue.set(state, "dep", dep);
    },
    PUSH_DEP: (state, dep) => {
      state.dep.push(dep);
    },
    SET_POST: (state, post) => {
      Vue.set(state, "post", post);
    },
    PUSH_POST: (state, pos) => {
      state.post.push(pos);
    },
    MODIFY_DEP: (state, data) => {
      let info = state.dep;
      for (const iterator of info) {
        if (iterator.id == data.id) {
          iterator.name = data.name;
        }
      }
    },
    MODIFY_POST: (state, data) => {
      let info = state.post;
      for (const iterator of info) {
        if (iterator.id == data.id) {
          iterator.name = data.name;
        }
      }
    }
  },
  actions: {
    depInfo: async ({ commit, state }, data) => {
      const depData = state.dep;
      if (data) {
        await setDep.addDepOrPos(data);
        commit("PUSH_DEP", data);
      }
      // if (depData.length == 0) {
        const allDep = await getDep.getAllDep({});
        commit("SET_DEP", allDep.data.list);
      // }
      
    },
    postData: async ({ commit, state }, id) => {
      const posData = state.post;
      const res = await getDep.getOneDep({
        parentId: id
      });
      commit("SET_POST", res.data.list);
    },
    addPost: async ({ commit }, data) => {
      await setDep.addDepOrPos(data);
      commit("PUSH_POST", data);
    },
    modifyData: async ({ commit, state }, data) => {
      await setDep.modifyDepOrPos(data);
      if (data.parentId) {
        commit("MODIFY_POST", data);
      } else {
        commit("MODIFY_DEP", data);
      }
    }
  }
};

export default position;
