<template>
<div class="newref">转变为一个可读的对象，是响应式的</div>
<div>{{data1}}</div>
<div>{{name}}</div>
<div>{{age}}</div>
<button @click="fun1">改变的传递的值</button>
<br/>
<refchild :msg="tomsg1"></refchild>
<div>缺少根标签，减小内存的占用</div>

  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
  <button @click="fun2">更新表格数据</button>
  <el-button @click="test" type="primary">测试其他组件</el-button>
</template>

<script>
import {reactive,toRef,toRefs} from "vue";
import refchild from "@/components/refchild";
import {useRouter} from "vue-router";

export default {
  name: "toref",
  components:{refchild},
  setup(){
    const  data=reactive({
          name:'小明',
          age:18,
          data1:'不可被忽视掉',
          tomsg:'传送一个值过去',
          tableData:[],
    });
    const tomsg1=toRef(data,'tomsg')
    const fun1 = () => {
      data.tomsg='这是一个新的值'
    }
    const fun2 = () => {
      data.tableData= [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ]
    }
    const  router= useRouter();
    const test = () => {
      router.push('./element')
    }

    return{
       ...toRefs(data),
      tomsg1,
       fun1,
      fun2,
      test,
    }
  }
}
</script>

<style scoped>
.newref{
  color: #42b983;
  font-size: 18px;
  font-weight: bold;
}
</style>
