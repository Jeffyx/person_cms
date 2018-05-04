const getters = {
    token:state=>state.user.token,
    userName:state=>state.user.name,
    userList:state=>state.user.userList,
    dep:state=>state.position.dep,
    post:state=>state.position.post,
    comInfo:state=>state.train.comInfo,
    proInfo:state=>state.train.proInfo,

}

export default getters;