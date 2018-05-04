<template>
  <div class="home">
      <el-card class="box-card">
        <h3>个人信息</h3>
        姓名：{{allData.onePact.userName}}
        合同开始时间：{{allData.onePact.startTime}}
        合同结束时间：{{allData.onePact.endTime}}
        <h3>薪资</h3>
        基础薪资:{{allData.oneSalary.baseWage}}
        补贴：{{allData.oneSalary.subsidy}}
        <h3>培训信息</h3>
        培训名称：{{allData.oneTrain.userName}}
        开始时间：{{allData.oneTrain.startTime}}
        结束时间：{{allData.oneTrain.endTime}}

        <h3>考勤</h3>
        <p v-for="(item,index) in allData.userDay" :key="index">
          <p>考勤信息：{{item.kq_date}}</p>
          <p>工作日：{{item.work_days}}</p>
          <p>出勤天数：{{item.really_days}}</p>
        </p>
      </el-card>
  </div>
</template>
<script>
import userData from "api/userList";
export default {
  name: "home",
  data() {
    return {
      allData: {}
    };
  },
  created() {
    userData
      .getAllData({})
      .then(res => {
        this.allData = res.data.data;
      })
      .catch(err => {});
  }
};
</script>
