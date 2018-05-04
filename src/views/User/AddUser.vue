<template>
  <div class="add-user">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="选择部门" prop="depId">
    <el-select v-model="ruleForm.depId" placeholder="部门">
      <template v-for="itm in dep">
        <el-option :key="itm.id" :label="itm.name" :value="itm.id"></el-option>
      </template>
    </el-select>
    <el-select v-model="ruleForm.postId" placeholder="职位">
      <template v-for="itm in post">
        <el-option :key="itm.id" :label="itm.name" :value="itm.id"></el-option>
      </template>
    </el-select>
    <el-form-item label="负责人">
    <el-switch v-model="ruleForm.chief"></el-switch>
  </el-form-item>
  </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm(ruleForm)">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</div>
</template>
<script>
import format from "utils/format";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "addUser",
  data() {
    return {
      ruleForm: {
        rzTime: format("yyyy-MM-dd"),
        name: "",
        password: "",
        email: "",
        chief: 1,
        postId: "",
        depId: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, message: "长度最少2位", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 2, message: "长度最少2位", trigger: "blur" }
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { min: 2, message: "长度最少2位", trigger: "blur" }
        ],
        depId: [{ required: true, message: "请选择部门", trigger: "change" }]
      }
    };
  },
  methods: {
    ...mapActions(["addUser", "depInfo", "postData"]),
    submitForm(data) {
      data.chief = data.chief ? 2 : 1;
      this.addUser(data)
        .then(res => {
          this.$router.push("/user/list");
        })
        .catch(err => {
          console.error(err);
        });
    },
    resetForm(data) {
      this[data] = {};
    }
  },
  created() {
    this.depInfo();
  },
  computed: {
    ...mapGetters(["dep", "post"])
  },
  watch: {
    ruleForm: {
      handler: function(val, old) {
        this.postData(val.depId);
      },
      deep: true
    }
  }
};
</script>

<style scoped lang="scss">
.add-user {
  width: 500px;
  height: 100%;
}
</style>
