import Vue from "vue";
import ComMrg from "api/comMrg";

const position = {
  state: {
    comInfo: [],
    proInfo: []
  },
  mutations: {
    SET_COM: (state, com) => {
      Vue.set(state, "comInfo", com);
    },
    PUSH_COM: (state, com) => {
      state.comInfo.push(comInfo);
    },
    SET_PRO: (state, pro) => {
      Vue.set(state, "proInfo", pro);
    },
    PUSH_PRO: (state, pro) => {
      state.proInfo.push(pro);
    },
    MODIFY_COM: (state, data) => {
      let info = state.comInfo;
      for (const iterator of info) {
        if (iterator.id == data.id) {
          iterator.name = data.name;
          iterator.site = data.site;
          iterator.mail = data.mail;
          iterator.tel = data.tel;
        }
      }
    },
    MODIFY_PRO: (state, data) => {
        let info = state.proInfo;
        for (const iterator of info) {
          if (iterator.id == data.id) {
            iterator.project = data.project;
            iterator.principal = data.principal;
            iterator.mobile = data.mobile;
          }
        }
      }
  },
  actions: {
    comDataMrg: async ({ commit, state }, data) => {
      const comData = state.comInfo;
      try {
        if (comData.length == 0) {
            const allDep = await ComMrg.getCom({});
            commit("SET_COM", allDep.data.list);
          }
          if (data) {
            await ComMrg.addCom(data);
            commit("PUSH_COM", data);
        }
        return Promise.resolve(1)
      } catch (error) {
          return Promise.reject(0)
      }
    },
    proDataMrg: async ({ commit, state }, id) => {
      const posData = state.proInfo;
      const res = await ComMrg.getPro({
        companyId: id
      });
      commit("SET_PRO", res.data.list);
    },
    addPro: async ({ commit }, data) => {
      try {
        await ComMrg.addPro(data);
        commit("PUSH_PRO", data);
        return Promise.resolve(1)
      } catch (error) {
          return Promise.reject(0)
      }
    },
    modifyCom: async ({ commit }, data) => {
      try {
        await ComMrg.modifyCom(data);
        commit("MODIFY_COM", data);
        return Promise.resolve(1)
      } catch (error) {
          return Promise.reject(0)
      }
    },
    modifyPro: async ({ commit }, data) => {
      try {
        await ComMrg.modifyPro(data);
        commit("MODIFY_PRO", data);
        return Promise.resolve(1)
      } catch (error) {
          return Promise.reject(0)
      }
    }
  }
};

export default position;
