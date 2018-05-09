<template>
  <div>
      <el-button @click="pactVisible = true" type="primary">添加合同</el-button>
      
       <el-table
            :data="pact"
            stripe
            style="width: 100%"
          >
            <el-table-column
            prop="userName"
            label="用户名"
            >
            </el-table-column>
            <el-table-column
            prop="startTime"
            label="开始时间"
            >
            </el-table-column>
            <el-table-column
            prop="endTime"
            label="结束时间"
            >
            </el-table-column>
        </el-table>

        <!-- 添加合同 -->
        <el-dialog title="添加合同" :visible.sync="pactVisible">
        <el-form :model="pactFrom">
            <el-form-item label="选择用户" :label-width="formLabelWidth">
                <el-select v-model="pactFrom.user" placeholder="请选择用户">
                <template v-for="itm in userList">
                  <el-option :key="itm.id" :label="itm.name" :value="{userId:itm.id,userName:itm.name}"></el-option>
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
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="pactVisible = false">取 消</el-button>
            <el-button type="primary" @click="addPactFrom">确 定</el-button>
        </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "pact",
  data() {
    return {
      formLabelWidth: "120px",
      pactVisible: false,
      pactFrom: {}
    };
  },
  computed: {
    ...mapGetters(["pact", "userList"])
  },
  methods: {
    ...mapActions(["getPact", "addPact"]),
    addPactFrom() {
      this.addPact({
        userId: this.pactFrom.user.userId,
        userName: this.pactFrom.user.userName,
        startTime: this.pactFrom.time[0],
        endTime: this.pactFrom.time[1]
      });
      this.pactVisible = false;
    }
  },
  created() {
    this.getPact();
  }
};
</script>

