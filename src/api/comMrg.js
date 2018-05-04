import axios from 'utils/axios';

const getCom = data=>{
    return axios({
        url:'train/getCom',
        method:'post',
        data
    })
}

const getPro = data=>{
    return axios({
        url:'train/getPro',
        method:'post',
        data
    })
}

const addCom = data=>{
    return axios({
        url:'train/addCom',
        method:'post',
        data
    })
}
const addPro = data=>{
    return axios({
        url:'train/addPro',
        method:'post',
        data
    })
}
const modifyCom = data=>{
    return axios({
        url:'train/updateCom',
        method:'post',
        data
    })
}
const modifyPro = data=>{
    return axios({
        url:'train/updatePro',
        method:'post',
        data
    })
}

export default {
    getCom,
    getPro,
    addCom,
    addPro,
    modifyCom,
    modifyPro
}