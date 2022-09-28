<template>
  <div id="wrap">
    <h2>script内嵌setup</h2>
    <div>{{name}}</div>
    <div>{{state.name}}</div>
    <div>{{state.adrees}}</div>
    <div>{{state.age}}</div>
    <div>利用torefs进行解构</div>
    <div>
      <ol>
       <li>{{name1}}</li>
       <li>{{age1}}</li>
        <li>{{hobby}}</li>
      </ol>
    </div>
    <el-button @click="add">增加</el-button>

    <h2>注意事项：</h2>
    <ol>
      <li>ref中的变量尽量不要reactive中的变量重名，否则会出现问题，不知道指向的是谁</li>
      <li>当set嵌套在script中时，ref定义的数据可以使用，但是reactive中的数据需要将添加父级state</li>
      <li>如果想要定义的state定义的数据直接在标签中使用，必须先结构，这样就会很麻烦</li>
    </ol>
    <h2>子集：</h2>
    <div>从子集收到的数据是：{{name2}}</div>
    <child1 :msg="hobby" @change1="getsomething"></child1>
  </div>
</template>

<script setup name="History">
import {reactive, ref, toRefs} from "vue";
import child1 from "@/components/history/child1";
 const name = ref('music');
 const state= reactive({
       name:'小白',
       adrees:'苏州',
       age:18
 })
 const  state2= reactive({
    name1:'江中小白条',
    age1:122,
    hobby:"除了大鱼还是大鱼"
 })
 const {name1 ,age1 ,hobby } = toRefs(state2);
 const add = () => {
   name.value  ='北京'+'加一点点的调料';
 }
 const name2 =ref(null);
 const getsomething = (val) => {
   console.log(val);
   name2.value = val;
 }
</script>

<style scoped name="Histort1">
#wrap{
  margin-left: 5px;
}
li{
  color: #42b983;
}
</style>
