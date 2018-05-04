import Vue from "vue";
import Vuex from "vuex";
import getters from "store/getters";
import user from "store/modules/user";
import position from "store/modules/position";
import train from "store/modules/train";
import salaryInfo from "store/modules/salary";
import pact from "store/modules/pact"

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    position,
    train,
    salaryInfo,
    pact
  },
  getters
});

export default store;
