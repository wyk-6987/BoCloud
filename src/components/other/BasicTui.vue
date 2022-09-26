<template>
  数据的响应是应用
  <br/>
  <div class="basic">
  <div>reactive实现数据的响应式应用</div>
  <div>名字：{{data.name}}</div>
  <div>年龄：{{data.age}}</div>
  <div>在{{data.school}}上学</div>
  <button @click="change">想换个学校去学习</button>
  <button @click="newschool">你去这个学校吧</button>
  <div v-if="data.showdata">那你想去哪个学校</div>
  <div v-if="data.showdata">他们学校的{{data.sex}}很多</div>
  </div>
</template>

<script>
import {defineComponent,reactive} from "vue";

export default defineComponent( {
  name: "BasicTui",
  setup(){
    const data=reactive({
      name:"张三",
      age:18,
      school:'苏州中学',
      showdata:false,
    })

    //代理对象 ，vue3是使用了新的代理方式proxy，这种方式科比define好多了
     //在做数据的新增加和删除时，不需要新的方法
    // 为了保证试图的更新，只能修改代理对象

    const change = ()=>{
        data.showdata=true;
        data.sex='女神';
    }
    const newschool = () => {
         data.school='石湖中学';
         delete  data.age;
    }

    return {data,change,newschool}
  }
})
</script>

<style scoped>
.basic{
  text-align: left;
}
</style>
