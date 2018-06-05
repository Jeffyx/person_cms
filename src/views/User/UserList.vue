<template>
  <div class="user-list">
      <div class="user-list-add">
           <el-button @click="addUser" size="medium" type="primary">添加用户</el-button>
           <el-button @click="pactVisible = true" size="medium" type="primary">添加培训人员</el-button>
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
       <!-- 添加培训人员 -->
        <el-dialog title="添加培训人员" :visible.sync="pactVisible">
        <el-form :model="pactFrom">
            <el-form-item label="选择用户" :label-width="formLabelWidth">
                <el-select v-model="pactFrom.userId" placeholder="请选择用户">
                <template v-for="itm in userList">
                  <el-option :key="itm.id" :label="itm.name" :value="itm.id"></el-option>
                </template>
              </el-select>
            </el-form-item>
            <el-form-item label="培训类型" :label-width="formLabelWidth">
                <el-select v-model="pactFrom.state" placeholder="选择类型">
                <template v-for="(itm,i) in ['普通培训','绩效培训']">
                  <el-option :key="i" :label="itm" :value="i+2+''"></el-option>
                </template>
              </el-select>
            </el-form-item>
            <el-form-item label="开始/结束时间" :label-width="formLabelWidth">
            <el-date-picker
            v-model="pactFrom.time"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd">
            </el-date-picker>
            </el-form-item>
             <el-form-item label="培训项目">
              <el-select v-model="pactFrom.comId" placeholder="培训公司">
                <template v-for="itm in comInfo">
                  <el-option :key="itm.id" :label="itm.name" :value="itm.id"></el-option>
                </template>
              </el-select>
              <el-select v-model="pactFrom.projectId" placeholder="培训项目">
                <template v-for="itm in proInfo">
                  <el-option :key="itm.id" :label="itm.project" :value="itm.id"></el-option>
                </template>
              </el-select>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="pactVisible = false">取 消</el-button>
            <el-button type="primary" @click="addTrain">确 定</el-button>
        </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import userList from "api/userList";

export default {
  name: "userList",
  data() {
    return {
      tableData: [],
      pactVisible: false,
      pactFrom: {},
      formLabelWidth: "120px"
    };
  },
  methods: {
    ...mapActions(["getUserList", "comDataMrg", "proDataMrg"]),
    addUser() {
      this.$router.push("/user/add");
    },
    addTrain() {
      userList.addTrain({
        userId: this.pactFrom.userId,
        startTime: this.pactFrom.time[0],
        endTime: this.pactFrom.time[1],
        projectId:this.pactFrom.projectId,
        status:this.pactFrom.status
      }).then(res=>{
        this.$message({
              type: 'info',
              message: `添加成功`
            });
      }).catch(err=>{
        this.$message({
              type: 'error',
              message: `错误`
            });
      });
      this.pactVisible = false;

    }
  },
  computed: {
    ...mapGetters(["userList", "comInfo", "proInfo"])
  },
  created() {
    this.getUserList({ index: 1 });
    this.comDataMrg();
  },
  watch: {
    pactFrom: {
      handler: function(val, old) {
        this.proDataMrg(val.comId);
      },
      deep: true
    }
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
