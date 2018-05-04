<template>
  <div class="dep">
    <div class="dep-l">
      <h3>部门</h3>
        <el-button @click="addDepInfo" type="primary">添加部门</el-button>

      <el-table
    ref="singleTable"
    :data="dep"
    highlight-current-row
    @current-change="handleCurrentChange"
    style="width: 100%">
    <el-table-column
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      property="name"
      label="部门名称"
      width="120">
    </el-table-column>
    <el-table-column
      label="操作"
      width="300">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row,true)">编辑</el-button>
        <!-- <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row,true)">删除</el-button> -->
      </template>
    </el-table-column>
  </el-table>
    </div>
    <div class="dep-r">
      <h3>职位</h3>  
      <el-button @click="addPostInfo" type="primary">添加职位</el-button>
    <!-- highlight-current-row -->
    <!-- @current-change="handleCurrentChange" -->
    
      <el-table
    ref="singleTable"
    :data="post"
    style="width: 100%">
    <el-table-column
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      property="name"
      label="职位名称"
      width="120">
    </el-table-column>
    <el-table-column
      label="操作"
      width="300">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <!-- <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
      </template>
    </el-table-column>
  </el-table>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "depmrg",
  data() {
    return {
      currentRow: null,
    };
  },
  computed: {
    ...mapGetters(["dep", "post"])
  },
  methods: {
    ...mapActions(["depInfo", "postData", "addPost","modifyData"]),
    changeSelect(data) {
    },
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
      this.postData(val.id)
    },
    handleEdit(index, row, is) {
      this.$prompt("请输入部门/职位名称", "修改部门/职位", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
        // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        // inputErrorMessage: "请输入正确的名称"
      })
        .then(({ value }) => {
          this.modifyData({ name: value, parentId: row.parentId,id: row.id});
          this.$message({
            type: "success",
            message: "添加成功"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    // handleDelete(index, row, is) {},
    addDepInfo() {
      this.$prompt("请输入部门名称", "添加部门", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          this.depInfo({ name: value, parentId: "" });
          this.$message({
            type: "success",
            message: "添加成功"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    addPostInfo() {
      if (!this.currentRow) {
        this.$message({
          type: "info",
          message: "请选择部门"
        });
        return;
      }
      const parentId = this.currentRow.id;
      this.$prompt("请输入职位名称", "添加职位", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
        // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        // inputErrorMessage: "请输入正确的名称"
      })
        .then(({ value }) => {
          this.addPost({ name: value, parentId });
          this.$message({
            type: "success",
            message: "添加成功"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    }
  },
  created() {
    this.depInfo();
  }
};
</script>

<style scoped lang="scss">
.dep {
  display: flex;
  justify-content: space-around;
  &-l,
  &-r {
  }
}
</style>
