import axios from 'utils/axios';

const addUser =data=>{
    return axios.post('user/addUser',data)
}
const getUser =data=>{
    return axios.post('user/getUser',data)
} 

export default {
    addUser,
    getUser
}