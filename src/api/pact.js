import axios from "utils/axios";

const addPact = data => {
  return axios({
    url: "/salary/addPact",
    method: "post",
    data
  });
};

const getPact = data => {
  return axios({
    url: "/salary/getPact",
    method: "post",
    data
  });
};

const importDays = data => {
  return axios({
    url: "/salary/importDays",
    method: "post",
    data
  });
};

export default {
    addPact,
    getPact,
    importDays
}
