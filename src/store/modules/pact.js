import Vue from "vue";
import apiPact from "api/pact";

const pactInfo = {
  state: {
    pact: []
  },
  mutations: {
    SET_PACT: (state, pact) => {
      Vue.set(state, "pact", pact);
    },
    PUSH_PACT: (state, data) => {
      state.pact.push(data);
    }
  },
  actions: {
    getPact:async ({ commit, state}, data) => {
        const pData = state.pact;
        // if(pData.length==0){
           const res = await apiPact.getPact({});
            commit('SET_PACT',res.data.list)
        // }
    },
    addPact:async ({commit},data)=>{
        await apiPact.addPact(data);
        commit('PUSH_PACT',data)
    }
  }
};

export default pactInfo;
