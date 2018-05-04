import Vue from "vue";
import apiSalary from "api/salary";

const salaryInfo = {
  state: {
    salary: []
  },
  mutations: {
    SET_SALARY: (state, salary) => {
      Vue.set(state, "salary", salary);
    },
    PUSH_SALARY: (state, data) => {
      state.salary.push(data);
    },
    MODIFY_SALARY: (state, data) => {
      for (const iterator of state.salary) {
        if (iterator.id == data.id) {
          iterator.baseWage = data.baseWage;
          iterator.subsidy = data.subsidy;
        }
      }
    }
  },
  actions: {
    salaryData: async ({ commit, state }, data) => {
      const saData = state.salary;
      if (saData.length == 0) {
        const res = await apiSalary.getSalary({});
        commit("SET_SALARY", res.data.list);
      }
      if (data) {
        await apiSalary.addSalary(data);
        commit("PUSH_SALARY", data);
      }
    },
    updataSalary: async ({ commit }, data) => {
      await apiSalary.modifySalary(data);
      commit("MODIFY_SALARY", data);
    }
  }
};

export default salaryInfo;
