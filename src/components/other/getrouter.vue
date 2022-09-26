<template>
<div class="newpage">测试路由的跳转和监听计算属性等</div>
<div class="newpage">初始化的数值：{{data.number}}</div>
<button @click="jump">跳转到测试页面</button>
<div>
<!--  vue3中的路由跳转变得有点麻烦了啊-->
<div>
  对于某值的改变和设置，计算属性的两种方式
</div>
<div>
  <input v-model="data.name">
  <input v-model="data.age">
  <div style="text-align: left;margin-left: 780px">{{data.sex}}</div>
  <div>计算树属性的获取值:<input v-model="check1"></div>
  <div>v3中的监听将属性immediate默认为true,触发立刻监听</div>
  <input v-model="data.animal">
  <div style="color: #42b983">监听到发生了改变,改变部分的值为：{{data.changepart}}</div>
  <div>深层次的监听和多个data值的监听</div>
  <div>data对像中的属性值：<input v-model="data.obj.kinds"></div>
  <div>新的对象值:{{newname}}</div>
  <div>watcheffect</div>
  <div><input v-model="data.finish"></div>
  <div>对应的属性值的变化:{{data.number}}</div>
  <button @click="jump">跳转到新的页面</button>
</div>
</div>
</template>

<script>
import {computed, defineComponent, reactive, ref, watch,watchEffect} from "vue";
import {useRouter} from "vue-router";

export default defineComponent({
  name: "GetRuter",
  setup(){
    const  data=reactive({
            number:100,
            name:"张三",
            age:60,
            sex:'男',
            animal:"小鱼",
            obj:{
              kinds:"鳄鱼",
            },
            changepart:"",
            finish:'沙丁鱼',
    })
    const  router=useRouter();
    // const jump = () => {
    //   router.push('./test');
    // }

   const check1=  computed({
      get(){
        return data.name;
      },
      set(val){
        console.log(val);
        data.age+=val;
      }
    });
    // v3的计算属性相对于v2来说感觉好用一般吧，但是监听就不一样了v3的监听中使得监中的属性immediate默认为true了
    const  newname= ref('');
    watch(data,({animal,obj})=>{//这样感觉比v2的好用一点，感觉就像是应用联盟一样
      data.changepart=animal;
      newname.value+=1;
    },{//属性选择
       immediate:true,
      deep:true,
    });
    // 需要提供监听的主题对象，解构赋值，proxy直接监听到内部的变化
    //  对应的发生改变
    watchEffect(()=>{
       // newname+=100
    })
   const jump=()=>{
      router.push('./watch')
   }

    return {data,jump,check1,newname}
  }

})
</script>

<style scoped>
.newpage{
  color: #42b983;
 font-weight: bold;
  font-size: 18px;
}
</style>
