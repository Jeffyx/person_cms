<template>
  <div class="hd">
    <p class="hd-logo">人力资源管理系统</p>
    <p><span>{{token}}</span>&nbsp;&nbsp;&nbsp;<span @click="log_out">登出</span></p>
  </div>
</template>
<script>
import { mapGetters,mapActions } from "vuex";

export default {
  name:'XHeader',
  computed: {
    ...mapGetters(["token"])
  },
  methods:{
    ...mapActions(['logOut']),
    log_out(){
      window.localStorage.removeItem('userName');
      this.logOut();
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="scss">
    .hd{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        color: #fff;
        &-logo{
          font-weight: bold;
          // font-size: 30px;
        }
    }
</style>
