<template>
  <div>
    <div>接收的数据是：{{ msg }}</div>
    <h2>来点不一样的</h2>
    <div>数字：{{ number }}</div>
    <el-button @click="add">发射当前的数</el-button>
  </div>
</template>

<script>
import { ref} from "vue";

export default {
  name: "child1_1",
  props:['msg'],
  setup(props,context){
    console.log(props,context);
    const number =ref(0);

    const add = () => {
      number.value++;
      context.emit('change1',number.value);
    }
    return { number,add }
  }
}
</script>

<style scoped>

</style>
