import axios from 'utils/axios';

export const login = (data)=>{
    return axios({
        url:'/user/login',
        method:'post',
        data
    })
}