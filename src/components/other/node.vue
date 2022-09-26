<template>
<div>
  <div>node中的数据请求，只是请求原有的数据不添加任何的操作</div>
  <el-button style="float: left;margin-bottom: 10px" type="primary" @click="getdata">获取列表</el-button>
  <el-button type="primary" style="float:left;" @click="dialogVisible=true">添加用户</el-button>
  <el-button @click="deleteuser" type="primary" style="float:left;">删除用户</el-button>
  <el-button @click="getuser" type="primary"  style="float: left">查询数据库表格</el-button>
  <el-button @click="inserdata" type="primary" style="float: left">插入数据</el-button>
  <el-button @click="getother" type="primary" style="float:left;">获取其他路径的数据</el-button>
  <el-table
      :data="tableData"
      border
      style="width: 100%">
    <el-table-column
        prop="password"
        label="编号"
        type="index"
        width="180">
    </el-table-column>
    <el-table-column
        prop="password"
        label="密码"
        width="180">
    </el-table-column>
    <el-table-column
        prop="name"
        label="姓名"
        width="180">
    </el-table-column>
    <el-table-column
        prop="profession"
        label="职位">
    </el-table-column>
  </el-table>

  <el-dialog
      v-model="dialogVisible"
      title="请输入需要添加的个数"
      width="30%"
      :before-close="handleClose"
  >
    <div><input v-model="number" placeholder="请输入添加的个数"></div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click=add>确定</el-button>
      </span>
    </template>
  </el-dialog>
 <child :data="data" :namelist="namelist" :toplist="toplsit" :checkkey="checkkey"></child>
</div>
</template>

<script>
import {reactive, toRefs,ref} from "vue";
import  http from "../../src/http"
import { ElMessageBox } from 'element-plus'
import child from '../../../npm_newtable/child'
export default {
  name: "node",
  components:{child},
  setup(){
    const  data=reactive({tableData:[
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],number:0,math:9,
      data:[
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      namelist:['name1','name2','name3'],
      toplsit:['提示1','提示2','提示3'],
      checkkey:['data','name','address'],

    })
    const getdata = () => {
        http({
          url: `api/test`,
          method: "GET",
          data: {}
        }).then(res=>{
          console.log(res.data);
          data.tableData=res.data;
        })
    }
    const dialogVisible = ref(false)
    const add = () => {
      http({
        url: `acv/addUser?number=${data.number}&maxlength=xiangkesi`,
        method: "GET",
        data: {
            needmath:data.number,
            maxlength:'这是一个假想的数据'
        }
      }).then(res=>{
        console.log(res.data);
        data.tableData=res.data;
        dialogVisible.value=false;

        console.log(dialogVisible)
      })
    }
     const getuser = () => {
       http({
         url: `api/test`,
         method: "GET",
         data: {
           needmath:data.number,
           maxlength:'这是一个假想的数据'
         }
       }).then(res=>{
         console.log(res.data);
       })
     }
    const handleClose = (done) => {
      ElMessageBox.confirm('Are you sure to close this dialog?')
          .then(() => {
          //确认取消
            done();
          })
          .catch(() => {
            // catch error
          })
    }
    const deleteuser = () => {
      console.log('删除对应的用户')
    }
    const inserdata = () => {
      http.get(`acv/insertdata`,{
        params: {
          id:data.math++,
          name:'小白1',
          adress:"天津1",
          subject:"数学2"
        }
      }).then(res=>{
        console.log(res.data);
      })
    }
    const getother = () => {
      http.get(`av/listUsers1`,{
        params: {
          id:data.math++,
          name:'小白1',
          adress:"天津1",
          subject:"数学2"
        }
      }).then(res=>{
        console.log(res.data);
      })
    }
    return{...toRefs(data),getdata,add,dialogVisible,handleClose,deleteuser,getuser,inserdata,getother}
  }
}
</script>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
