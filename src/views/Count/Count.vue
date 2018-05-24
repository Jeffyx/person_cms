<template>
  <div>
      <!-- 计算薪资薪资 -->
    <div class="salary-import">
        <h3>计算薪资</h3>
        <!-- http://localhost:8080/api -->
        <el-upload
        class="upload-demo"
        drag
        action="/zq/salary/importDays"
        name="fileName"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">上传用于计算薪资的文件</div>
        </el-upload>
    </div>
    <div class="salary-find">
      <el-form >
        <h3>请输入刚刚导入的文件名</h3>
            <el-form-item label="文件名" :label-width="formLabelWidth">
                <el-input v-model="countFrom.fileName" auto-complete="off"></el-input>
            </el-form-item>
              <el-button @click="findCountRes" type="success">计算薪资</el-button>
        </el-form>
        <el-form >
        <h3>导出报表</h3>
            <el-form-item label="文件名" :label-width="formLabelWidth">
                <el-input v-model="exportExcel.fileName" auto-complete="off"></el-input>
            </el-form-item>
              <el-button @click="findCountGet" type="info">导出报表</el-button>
        </el-form>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import apiSalary from "api/salary";
export default {
    name: "count",
    data() {
        return {
            countFrom: {},
            formLabelWidth: "120px",
            modifyCurFrom: "",
            exportExcel: {}
        };
    },
    methods: {
        findCountRes() {
            apiSalary
                .getCount({
                    fileName: this.countFrom.fileName
                })
                .then(res => {
                    // this.$alert(`计算和的薪资为 ${res.data.data}`, '查询薪资', {
                    //   confirmButtonText: '确定',
                    //   callback: action => {
                    //     this.$message({
                    //       type: 'info',
                    //       message: `action: ${ action }`
                    //     });
                    //   }
                    // });
                    this.$message({
                        type: "info",
                        message: `计算成功`
                    });
                })
                .catch(err => {
                    this.$message({
                        type: "error",
                        message: `服务器错误`
                    });
                });
        },
        findCountGet() {
            apiSalary
                .exportExcel({
                    fileName: this.exportExcel.fileName
                })
                .then(res => {
                    this.$message({
                        type: "info",
                        message: `导出成功`
                    });
                })
                .catch(err => {
                    this.$message({
                        type: "error",
                        message: `服务器错误`
                    });
                });
        }
    }
};
</script>
