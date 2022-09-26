<template>
<div>详细测试其中的监听问题</div>
<div>在以往的监听中我们监听到的是</div>
<div>首先使用watch</div>
<div><input v-model="data.obj.kinds"></div>
<div>监听到发生了变化：<span style="color:#42b983;">{{data.reduce}}</span></div>
<div><input v-model="data.animal"></div>
<div>监听到鳄鱼的变化：{{data.reducenew}}</div>
<button @click="start">开始周期的探索</button>
</template>

<script>
import {reactive, watch, watchEffect} from "vue";
import router from "@/router";
import {useRouter} from "vue-router";

export default {
  name: "NewWatch",
  setup(){
    const data=reactive({
         obj:{
           kinds:"小沙丁鱼",
         },
         animal:'鳄鱼',
         reduce:'这是生活在海里的',
         runanimal:'豹子',
         reducenew:"鳄鱼小的时候不能着急吃",
    })
    // watch(data,({obj,runanimal})=>{
    //      data.reduce='这是生活在海里的鱼'+obj.kinds
    //      data.runanimal='惊天巨鳄';
    // },{
    //   // immediate:true,
    //   deep:true,
    // });
    //当小沙丁鱼改变时，我们要把她给养大
    //当鳄鱼改变时我们要把他吃掉
    // watch(data.obj,()=>{
    //    data.runanimal='你嚣张个什么，信不信我把你烤熟了'
    // });
    watch([data.obj],(obj,animal)=>{
      console.log(obj,animal);
      data.reduce='鳄鱼长大了，可以吃了';
    },{
       immediate:false,
       deep:true
    });
    //监听多个变化要添加多个watch就很麻烦，多个函数的共同监听一般是用不到的
    watch(()=>data.animal,()=>{
      data.reducenew='长大了不可以吃，可以卖掉买韩伯伯吃'
      console.log('发生了改变');
    });
    //立即执行默认为true
    watchEffect((data.obj,()=>{
      console.log('此时的obj发生了变化')
    }),{})

   const router = useRouter();
   const start = () => {
     router.push('./time')
   }
    return {data,start};
  }
}
</script>

<style scoped>

</style>
