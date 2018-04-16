<template>
  <div class="login">
      <div class="login-from">
          <el-input v-model="inputName" placeholder="用户名" clearable></el-input>
          <el-input type="password" v-model="pasworld" placeholder="密码" clearable></el-input>        
          <el-button @click="clickLogin" type="primary" plain>登录</el-button>
      </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      inputName: "",
      pasworld: ""
    };
  },
  computed: {
    ...mapGetters(["token", "userName"])
  },
  methods: {
    ...mapActions(["logIn"]),
    clickLogin(){
        if(this.inputName&&this.pasworld){
            this.logIn({
                name:this.inputName,
                pasworld:this.pasworld
            })
        }else{
            alert('请输入完整的信息')
        }
    }
  }
};
</script>
<style scoped lang="scss">
.login {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  &-from {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding:30px 20px;
    width: 400px;
    height: 300px;
    border: 1px solid skyblue;
    border-radius: 6px;
    background-color: #f1f1f1;
    .el-input {
      line-height: 0;
    }
  }
}
</style>
