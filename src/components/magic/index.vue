<template>
<div id="wrap">
  <h2>养了个🐏</h2>
  <el-input v-model="msg" placeholder="请输入内容" />
  <div>从子集传过来的数据是：{{data}}</div>
  <Child1 :msg="msg" @change1="getval"></Child1>
</div>
</template>

<script>
import Child1 from "@/components/magic/child1";
import { ref} from "vue";
export default {
  name: "index_1",
  components: {Child1},
  setup(props,context){
    console.log(props,context);
    const msg = ref(null);
    const data = ref(null);
    const getval = (val) => {
      data.value= val;
      console.log(val);
    }
    return { msg, getval, data }
  }
}
</script>

<style scoped>
#wrap{
  margin-left: 5px;
}
</style>
