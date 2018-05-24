import axios from "utils/axios";

const addSalary = data => {
  return axios({
    url: "salary/addSalary",
    method: "post",
    data
  });
};

const modifySalary = data => {
  return axios({
    url: "salary/updateSalary",
    method: "post",
    data
  });
};

const getSalary = data => {
  return axios({
    url: "salary/getSalary",
    method: "post",
    data
  });
};

const getCount = data =>{
  return axios({
    url:'salary/pushSalary',
    method:'post',
    data
  })
}

const exportExcel = data =>{
  return axios({
    url:'salary/exportExcel',
    method:'post',
    data
  })
}

export default {
  addSalary,
  modifySalary,
  getSalary,
  getCount,
  exportExcel
};
