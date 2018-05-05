import axios from "axios";
import sotre from "store"
import store from "../store";


const instance = axios.create({
  baseURL: "/api/zq",
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
});

// instance.interceptors.request.use(config=>{
//   if(!!store.getters.token){
//     config.headers['token'] = store.getters.token;
//   }
//   return config;
// },err=>{
//   Promise.reject(err)
// });

// instance.interceptors.response.use(response=>{
//   const data = response.data;
//   return data;
// },err=>{
//   return Promise.reject(err)
// })

export default instance;
