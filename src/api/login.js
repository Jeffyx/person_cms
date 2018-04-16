import axios from 'utils/axios';

export const login = (data)=>{
    return axios({
        url:'/login',
        method:'post',
        data
    })
}