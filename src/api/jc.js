import axios from 'utils/axios';

const getAllJc = () =>{
    return axios({
        url:'salary/getJf',
        method:'post',
    })
}

const addJc = data =>{
    return axios({
        url:'salary/addJf',
        method:'post',
        data
    })
}

export default {
    getAllJc,
    addJc
};