<template>
  <div class="asider">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <div v-if="token == 'admin'">
      <el-menu-item 
      @click="changeRouter('/user/list')"
      index="1"
      >
        <i class="el-icon-location"></i>      
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item 
      @click="changeRouter('/depmrg')"
      index="2"
      >
        <i class="el-icon-menu"></i>
        <span>部门/职位管理</span>
      </el-menu-item>
      <el-menu-item 
      @click="changeRouter('/commrg')"
      index="3"
      >
        <i class="el-icon-star-off"></i>
        <span>培训管理</span>
      </el-menu-item>
      <el-menu-item 
      @click="changeRouter('/salary')"
      index="4"
      >
        <i class="el-icon-view"></i>
        <span>薪资管理</span>
      </el-menu-item>
      <el-menu-item 
      @click="changeRouter('/count')"
      index="7"
      >
        <i class="el-icon-circle-plus-outline"></i>
        <span>考勤管理</span>
      </el-menu-item>
      <el-menu-item 
      @click="changeRouter('/pact')"
      index="5"
      >
        <i class="el-icon-tickets"></i>
        <span>合同管理</span>
      </el-menu-item>
      </div>
      <div v-if="!token == 'admin'">
        <el-menu-item 
      @click="changeRouter('/home')"
      index="6"
      >
        <i class="el-icon-tickets"></i>
        <span>主页</span>
      </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "XAsider",
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {},
    changeRouter(path) {
      this.$router.push(path);
    }
  },
  computed: {
    ...mapGetters(["token"])
  }
};
</script>
<style lang="scss" scoped>
.asider {
  width: 100%;
  height: 100%;
  background-color: rgb(84, 92, 100);
}
</style>
