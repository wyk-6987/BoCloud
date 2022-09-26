<template>
<div>生命周期那点事：</div>
<div>on的添加，setup是最快的，3中的周期比之前的2每个阶段的周期快</div>
<div>生命周期用到的时候再说也不迟</div>
<div>有一个学生叫{{name}}</div>
<div>他的年龄是：{{age}}</div>
<div>他正在学的科目是：{{subject}}</div>
<button @click="changesubject">换一个科目</button>
<div v-if="subject.includes('数学')">使用torefs将每个属性变成可直接读取的</div>
<div>
  <p>ref获取组件中的标签元素：</p>
  <input ref="inputval">
  <div>绍：ref 被用来给DOM元素或子组件注册引用信息。引用信息会根据父组件的 $refs 对象进行注册。如果在普通的DOM元素上使用，引用信息就是元素; 如果用在子组件上，引用信息就是组件实例。</div>
  <div>学习shallow</div>
  <button @click="jumpnew">学习新的知识点</button>
</div>
</template>

<script>
import {reactive, toRefs,onMounted,ref} from "vue";
import router from "@/router";

export default {
  name: "NEWHOOK",
  setup(){
     const data=reactive({
        number:10,
        name:"李华",
        age:7,
        subject:'英语',
     })
    const changesubject = () => {
      data.subject='数学';
      console.log(data);
    }
    const inputval =ref(null);
    onMounted(()=>{
       setTimeout(()=>{
         data.subject='生物化学数学历史政治';
       },2000);
       //获取某一元素的值
      inputval.value.focus();
    })

   const jumpnew = () => {
      router.push('./shallow');
   }

    return {
         ...toRefs(data),
      inputval,
      jumpnew,
      changesubject
    }
  }
}
</script>

<style scoped>

</style>
