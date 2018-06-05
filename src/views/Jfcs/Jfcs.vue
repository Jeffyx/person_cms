<template>
    <div>
           <el-button @click="jfVisible = true" size="medium" type="primary">添加奖罚</el-button>


 <!-- 添加奖罚人员 -->
        <el-dialog title="添加奖罚" :visible.sync="jfVisible">
        <el-form :model="jcFrom">
            <el-form-item label="选择用户" :label-width="formLabelWidth">
                <el-select v-model="jcFrom.userId" placeholder="请选择用户">
                <template v-for="itm in userList">
                  <el-option :key="itm.id" :label="itm.name" :value="itm.id"></el-option>
                </template>
              </el-select>
            </el-form-item>
            <el-form-item label="选择时间" :label-width="formLabelWidth">
            <el-date-picker
            v-model="jcFrom.time"
            type="date"
            placeholder="选择日期时间"
            value-format="yyyy-MM-dd">
            </el-date-picker>
            </el-form-item>
             <el-form-item label="培训项目">
              <el-select v-model="jcFrom.state" placeholder="培训公司">
                <template v-for="(itm,i) in ['奖赏','惩罚']">
                  <el-option :key="i" :label="itm" :value="i+1+''"></el-option>
                </template>
              </el-select>
            </el-form-item>
            <el-form-item label="金额">
              <el-input v-model="jcFrom.money" placeholder="请输入金额"></el-input>
            </el-form-item>
            <el-form-item label="说明">
              <el-input v-model="jcFrom.notes" placeholder="请输入说明"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="jfVisible = false">取 消</el-button>
            <el-button type="primary" @click="addTrain">确 定</el-button>
        </div>
    </el-dialog>


        <el-table
      :data="Jclist"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态"
        width="180">
      </el-table-column>
      <el-table-column
        prop="money"
        label="金额/元">
      </el-table-column>
      <el-table-column
        prop="notes"
        label="说明">
      </el-table-column>
      <el-table-column
        prop="time"
        label="时间">
      </el-table-column>
    </el-table>
    </div>
</template>
<script>
import jcApi from 'api/jc';
import {mapGetters} from 'vuex'
export default {
    name:'jc',
    data(){
        return {
            Jclist:[],
            jfVisible:false,
            formLabelWidth:'120px',
            jcFrom:{}
        }
    },
    methods:{
       async init(){
            const list = await jcApi.getAllJc();
            this.Jclist = list.data.list;
        },
        async addTrain(){
            jcApi.addJc(this.jcFrom)
            .then((result) => {
                console.log(result)   
                this.init()
                this.jcFrom = {};
                this.jfVisible = false;
                this.$message({
          message: '添加成功',
          type: 'success'
        });
            }).catch((err) => {
                 this.$message.error('错了哦')
            });
        }
    },
    created(){
        this.init();
    },
    computed:{
    ...mapGetters(["userList"])        
    }
}
</script>
