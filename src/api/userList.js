import axios from 'utils/axios';

const addUser =data=>{
    return axios.post('user/addUser',data)
}
const getUser =data=>{
    return axios.post('user/getUser',data)
} 

const addTrain = data=>{
    return axios({
        url:'train/addTrain',
        method:'post',
        data
    })
}

const getAllData = data=>{
    return axios({
        url:'user/getAllData',
        method:'post',
        data
    })
}

export default {
    addUser,
    getUser,
    addTrain,
    getAllData
}