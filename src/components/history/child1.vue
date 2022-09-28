<template>
 <div>这是一个简单的子集</div>
 <div>从父级传过来的数据是：{{props.msg}}</div>
 <div><el-input v-model="name" placeholder="请输入传到父级的内容" /> </div>
 <el-button @click="send">发射</el-button>
 <el-button @click="change1">再次发射</el-button>
</template>

<script setup>
import {defineProps, defineEmits, ref} from "vue";

const props = defineProps(['msg']);
const send = () => {
  console.log('发射事件，传递一个值到父级')
}
const emit = defineEmits(['change1']);//定义发射事件

const name = ref('五点半就走吧');
const change1 = () => {
  emit('change1', name);
}
</script>

<style scoped>

</style>
