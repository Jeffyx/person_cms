import axios from "axios";
import sotre from "store"
import store from "../store";


const instance = axios.create({
  baseURL: "https://www.easy-mock.com/mock/5ad2bef2eaf89e420be163b1/api",
  timeout: 5000,
  // headers: { "X-Custom-Header": "foobar" }
});

instance.interceptors.request.use(config=>{
  if(!!store.getters.token){
    config.headers['token'] = store.getters.token;
  }
  return config;
},err=>{
  Promise.reject(err)
});

instance.interceptors.response.use(response=>{
  const data = response.data;
  return data;
},err=>{
  return Promise.reject(err)
})

export default instance;
