<template>
  <div class="home">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="个人信息" name="a1">
        <el-card class="box-card">
          姓名：{{viewsChange(allData.oneUser.name)}} <p></p>
        邮箱：{{viewsChange(allData.oneUser.email)}} <p></p>
        入职时间：{{viewsChange(allData.oneUser.rzTime)}} <p></p>
        离职时间：{{viewsChange(allData.oneUser.lzTime)}} <p></p>
        合同开始时间：{{viewsChange(allData.onePact.startTime)}} <p></p>
        合同结束时间：{{viewsChange(allData.onePact.endTime)}} <p></p>
        部门：{{viewsChange(allData.oneUser.depName)}} <p></p>
        职位：{{viewsChange(allData.oneUser.postName)}} <p></p>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="薪资" name="a2">
        <el-card class="box-card">
          基础薪资:{{viewsChange(allData.oneSalary.baseWage)}} <p></p>
        补贴：{{viewsChange(allData.oneSalary.subsidy)}} <p></p>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="培训信息" name="a3">
        <el-card class="box-card">
          培训名称：{{viewsChange(allData.oneTrain.userName)}} <p></p>
        开始时间：{{viewsChange(allData.oneTrain.startTime)}} <p></p>
        结束时间：{{viewsChange(allData.oneTrain.endTime)}} <p></p>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="考勤" name="a4">
        <el-card class="box-card">
          <div v-if="allData.userDay.length==0">
          {{"暂无考勤"}}
        </div>
        <div v-for="(item,index) in allData.userDay" :key="index">
          <p>考勤信息：{{viewsChange(item.kq_date)}}</p>
          <p>工作日：{{viewsChange(item.work_days)}}</p>
          <p>出勤天数：{{viewsChange(item.really_days)}}</p>
          <br>
        </div>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="工资信息" name="a5">
        <el-card class="box-card">
          <div v-if="allData.allSalary.length==0">
            {{"暂无工资信息"}}
          </div>
          <div v-for="(item,index) in allData.allSalary" :key="index">
            <p>标题：{{item.notes}}</p>
            <p>社保：{{item.ssb}}</p>
            <p>个税:{{item.tax}}</p>
            <p>实发工资：{{item.finalPay}}</p>
            <p>应发工资：{{item.totalPay}}</p>
            <p>公积金：{{item.af}}</p>
            <p>奖罚：{{item.jf}}</p>
            <br>
          </div>
        </el-card>
      </el-tab-pane>
  </el-tabs>


      <!-- <el-card class="box-card">
        <h3>个人信息</h3>
        姓名：{{viewsChange(allData.oneUser.name)}} <p></p>
        邮箱：{{viewsChange(allData.oneUser.email)}} <p></p>
        入职时间：{{viewsChange(allData.oneUser.rzTime)}} <p></p>
        离职时间：{{viewsChange(allData.oneUser.lzTime)}} <p></p>
        合同开始时间：{{viewsChange(allData.onePact.startTime)}} <p></p>
        合同结束时间：{{viewsChange(allData.onePact.endTime)}} <p></p>
        部门：{{viewsChange(allData.oneUser.depName)}} <p></p>
        职位：{{viewsChange(allData.oneUser.postName)}} <p></p>
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
        <div v-for="(item,index) in allData.userDay" :key="index">
          <p>考勤信息：{{viewsChange(item.kq_date)}}</p>
          <p>工作日：{{viewsChange(item.work_days)}}</p>
          <p>出勤天数：{{viewsChange(item.really_days)}}</p>
          <br>
        </div>
        <h3>工资信息</h3>
          <div v-if="allData.allSalary.length==0">
            {{"暂无工资信息"}}
          </div>
          <div v-for="(item,index) in allData.allSalary" :key="index">
            <p>标题：{{item.notes}}</p>
            <p>社保：{{item.ssb}}</p>
            <p>个税:{{item.tax}}</p>
            <p>实发工资：{{item.finalPay}}</p>
            <p>应发工资：{{item.totalPay}}</p>
            <p>公积金：{{item.af}}</p>
            <br>
          </div>
      </el-card> -->
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
        userDay: [],
        allSalary:[]
      },
      activeName:'a1'
    };
  },
  methods: {
    viewsChange(data) {
      return data ? data : "暂无信息";
    },
    handleClick(tab, event) {
        console.log(tab, event);
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
