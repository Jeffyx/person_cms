import axios from 'utils/axios';

const getAllDep = data =>{
    return axios({
        url:'com/getDapart',
        method:'post',
        data
    })
}

const getOneDep = data =>{
    return axios({
        url:'com/getPos',
        method:'post',
        data
    })
}

export default {
    getAllDep,
    getOneDep
};
