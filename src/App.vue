<template>
    <el-container>
      <el-header>
          <x-header/>
      </el-header>
      <el-container>
        <el-aside width="180px">
          <x-asider/>
        </el-aside>
        <el-main>
          <!-- container -->
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
import {mapGetters} from 'vuex';
import XHeader from "components/Header";
import XAsider from "components/Asider";
export default {
  name: "App",
  components: {
    XHeader,
    XAsider
  },
  computed:{
    ...mapGetters([
      'token'
    ])
  },
  watch: {
    $router: {
      handler: function() {
        if(!this.token){
          this.$router.push('/login')
        }
      },
      immediate: true
    }
  }
};
</script>
<style scoped lang="scss">
.el-header {
  color: #333;
  text-align: center;
  background-color: rgb(84, 92, 100);
}
.el-aside {
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  color: #333;
  // text-align: center;
  // line-height: 160px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
