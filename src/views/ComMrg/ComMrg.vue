<template>
  <div class="dep">
    <div class="dep-l">
      <h3>培训公司</h3>
      <el-button @click="comFormVisible = true" type="primary">添加培训公司</el-button>
      <el-table
        ref="singleTable"
        :data="comInfo"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%">
        <el-table-column
        type="index"
        width="50">
        </el-table-column>
        <el-table-column
        property="name"
        label="公司名称"
        >
        </el-table-column>
        <el-table-column
        property="site"
        label="公司地址"
        >
        </el-table-column>
        <el-table-column
        property="mail"
        label="邮箱"
        >
        </el-table-column>
        <el-table-column
        property="tel"
        label="电话"
        >
        </el-table-column>
        <el-table-column
        label="操作"
        >
        <template slot-scope="scope">
            <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row,true)">编辑</el-button>
        </template>
        </el-table-column>
    </el-table>
    <!-- 添加信息 -->
    <el-dialog title="添加培训公司" :visible.sync="comFormVisible">
        <el-form :model="comForm">
            <el-form-item label="公司名称" :label-width="formLabelWidth">
                <el-input v-model="comForm.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="地址" :label-width="formLabelWidth">
                <el-input v-model="comForm.site" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" :label-width="formLabelWidth">
                <el-input v-model="comForm.mail" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="电话" :label-width="formLabelWidth">
                <el-input v-model="comForm.tel" auto-complete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="comFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="addComData">确 定</el-button>
        </div>
    </el-dialog>
    </div>
    <div class="dep-r">
      <h3>培训项目</h3>  
      <el-button @click="addPostInfo" type="primary">添加培训项目</el-button>
      <el-table
        ref="singleTable"
        :data="proInfo"
        style="width: 100%">
        <el-table-column
        type="index"
        width="50">
        </el-table-column>
        <el-table-column
        property="project"
        label="项目名称"
        >
        </el-table-column>
        <el-table-column
        property="principal"
        label="培训人"
        >
        </el-table-column>
        <el-table-column
        property="mobile"
        label="电话"
        >
        </el-table-column>
        <el-table-column
        label="操作"
        >
        <template slot-scope="scope">
            <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        </template>
        </el-table-column>
    </el-table>
    <!-- 弹窗 -->
    <el-dialog title="添加培训项目" :visible.sync="proFormVisible">
        <el-form :model="proForm">
            <el-form-item label="项目名称" :label-width="formLabelWidth">
                <el-input v-model="proForm.project" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="培训人" :label-width="formLabelWidth">
                <el-input v-model="proForm.principal" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="电话" :label-width="formLabelWidth">
                <el-input v-model="proForm.mobile" auto-complete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="proFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="addProData">确 定</el-button>
        </div>
    </el-dialog>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "commrg",
  data() {
    return {
      currentRow: null,
      comFormVisible: false,
      proFormVisible: false,
      formLabelWidth: "120px",
      comForm: {},
      proForm: {}
    };
  },
  computed: {
    ...mapGetters(["comInfo", "proInfo"])
  },
  methods: {
    ...mapActions([
      "comDataMrg",
      "proDataMrg",
      "addPro",
      "modifyCom",
      "modifyPro"
    ]),
    changeSelect(data) {},
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
      this.proDataMrg(val.id);
    },
    handleEdit(index, row, is) {
      if (is) {
        this.comFormVisible = true;
        this.comForm = row;
        return;
      }
      this.proFormVisible = true;
      this.proForm = row;
    },
    addComData() {
      if (this.comForm.id) {
        this.modifyCom(this.comForm).then(res => {
          this.comForm = {};
        });
        this.comFormVisible = false;
        return;
      }
      this.comDataMrg(this.comForm).then(res => {
        this.comForm = {};
      });
      this.comFormVisible = false;
    },
    addPostInfo() {
      if (!this.currentRow) {
        this.$message({
          type: "info",
          message: "请选择部门"
        });
        return;
      }
      this.proFormVisible = true;
    },
    addProData() {
      if (this.proForm.id) {
        this.modifyPro(this.proForm).then(res => {
          this.proForm = {};
        });
        this.proFormVisible = false;
        return;
      }
      this.proForm.companyId = this.currentRow.id;
      this.addPro(this.proForm).then(res => {
        this.proForm = {};
      });
      this.proFormVisible = false;
    }
  },
  created() {
    this.comDataMrg();
  }
};
</script>

<style scoped lang="scss">
.dep {
  //   display: flex;
  //   justify-content: space-around;
  //   &-l,
  //   &-r {
  //   }
}
</style>
