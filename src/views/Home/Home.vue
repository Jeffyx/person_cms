<template>
  <div class="home">
      <el-card class="box-card">
        <h3>个人信息</h3>
        姓名：{{viewsChange(allData.onePact.userName)}} <p></p>
        合同开始时间：{{viewsChange(allData.onePact.startTime)}} <p></p>
        合同结束时间：{{viewsChange(allData.onePact.endTime)}} <p></p>
        <h3>薪资</h3>
        基础薪资:{{viewsChange(allData.oneSalary.baseWage)}} <p></p>
        补贴：{{viewsChange(allData.oneSalary.subsidy)}} <p></p>
        <h3>培训信息</h3>
        培训名称：{{viewsChange(allData.oneTrain.userName)}} <p></p>
        开始时间：{{viewsChange(allData.oneTrain.startTime)}} <p></p>
        结束时间：{{viewsChange(allData.oneTrain.endTime)}} <p></p>
        <h3>考勤</h3>
        <div v-if="allData.userDay.length==0">
          {{"暂无考勤"}}
        </div>
        <div v-if="allData.userDay>0" v-for="(item,index) in allData.userDay" :key="index">
          <p>考勤信息：{{viewsChange(item.kq_date)}}</p>
          <p>工作日：{{viewsChange(item.work_days)}}</p>
          <p>出勤天数：{{viewsChange(item.really_days)}}</p>
        </div>
      </el-card>
  </div>
</template>
<script>
import userData from "api/userList";
export default {
  name: "home",
  data() {
    return {
      allData: {
        onePact: {
          userName: "",
          startTime: "",
          endTime: ""
        },
        oneSalary: {
          baseWage: "",
          subsidy: ""
        },
        oneTrain: {
          userName: "",
          startTime: "",
          endTime: ""
        },
        oneUser: {},
        userDay: []
      }
    };
  },
  methods: {
    viewsChange(data) {
      return data ? data : "暂无信息";
    }
  },
  created() {
    userData
      .getAllData({})
      .then(res => {
        let list = res.data.data;
        if (!list.onePact) {
          list.onePact = {
            userName: "",
            startTime: "",
            endTime: ""
          };
        }
        if (!list.oneSalary) {
          list.oneSalary = {
            baseWage: "",
            subsidy: ""
          };
        }
        if (!list.oneTrain) {
          list.oneTrain = {
            userName: "",
            startTime: "",
            endTime: ""
          };
        }
        if (!list.oneUser) {
          list.oneUser = {};
        }
        this.allData = list;
      })
      .catch(err => {});
  }
};
</script>
