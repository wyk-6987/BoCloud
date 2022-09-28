<template>
<div id="content">
  <h2>tabs组件的strecth参数赋值有问题,不能给值，人家默认是false，给值的话就是默认为true,给false会发出警告</h2>

  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="爱好不同的事情" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="事件" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
</div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "Tabs_1",
  setup(){
    const activeName = ref('second');
    const handleClick = (tab,event) => {
      console.log(tab, event);
    }
    return { handleClick, activeName}
  }
}
</script>

<style scoped>
#content {
  padding: 5px;
}

/deep/ .el-tabs__nav{
  width: 800px!important;
  display: flex;
  flex: 4;
  justify-content: space-between;
}
</style>
