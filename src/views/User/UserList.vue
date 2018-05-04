<template>
  <div class="user-list">
      <div class="user-list-add">
           <el-button @click="addUser" size="medium" type="primary">添加用户</el-button>
      </div>
      <div class="user-list-table">
          <el-table
            :data="userList"
            stripe
            style="width: 100%"
          >
            <el-table-column
            prop="name"
            label="用户名"
            >
            </el-table-column>
            <el-table-column
            prop="email"
            label="邮箱"
            >
            </el-table-column>
            <el-table-column
            prop="depName"
            label="部门"
            
            >
            </el-table-column>
            <el-table-column
            prop="postName"
            label="职位"
            >
            </el-table-column>
            <el-table-column
            prop="trainStatus"
            label="培训状态"
            >
            </el-table-column>
            <el-table-column
            prop="rzTime"
            label="创建日期"
            >
            </el-table-column>
        </el-table>
      </div>
      <div class="user-list-page">
        <el-button-group>
          <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
          <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
      </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "userList",
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    ...mapActions(["getUserList"]),
    addUser() {
      this.$router.push("/user/add");
    }
  },
  computed: {
    ...mapGetters(["userList"])
  },
  created() {
    this.getUserList({ index: 1 });
  }
};
</script>

<style lang="scss" scoped>
.user-list {
  display: flex;
  flex-direction: column;
  &-add {
    display: flex;
  }
  &-table {
    flex: 1;
    margin: 30px 0;
    box-sizing: border-box;
    // padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 8px rgba($color: #000000, $alpha: 0.1);
  }
  &-page {
    width: 100%;
    text-align: right;
  }
}
</style>
