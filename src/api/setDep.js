import axios from 'utils/axios';

const addDepOrPos = data =>{
    return axios({
        url:'com/addDapart',
        method:'post',
        data
    })
}

const modifyDepOrPos = data =>{
    return axios({
        url:'com/updateDapart',
        method:'post',
        data
    })
}

export default {
    addDepOrPos,
    modifyDepOrPos
}