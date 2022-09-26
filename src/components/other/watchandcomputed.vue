<template>
  <div class="watch">
 <div>开始新的计算属性和监听操作</div>
  <div>{{data.number}}</div>
  </div>
  <div>我的天啊，欢迎报考云南农业大学</div>
  <div>
    <input v-model="data.firstname">
    <input v-model="data.lastname">
    <input v-model="data.newname">
    <br/>
    <br/>
    <div style="border: 1px solid lightskyblue">
      <input v-model="newname">
      <input v-model="updatename">
      <input v-model="boname">
    </div>
  </div>
  <button @click="jump">添加新的页面跳转</button>
  <router-view name="getrouter">开始跳转</router-view>
</template>

<script>
import {defineComponent, reactive,computed} from "vue";
import {useRouter} from "vue-router";

export default defineComponent({
  name: "watchandcomputed",
  // 计算属性和监听的应用场景不同，监听一般是对数据的操作，计算属性一般是对数据的取值处理
  setup(){
    const data = reactive({
      number: 10,
      firstname:'慕云',
      lastname:'云海',
      newname:'我与洱海有个约会',
    });
    const  router= useRouter();
    // 现在的计算属性中有两个对应的函数，一个是对应的取值操作get，另一个是对应的赋值操作set，如果写一个就是默认的get
    const newname= computed(()=>{
      return  data.firstname+"_"+data.lastname;
    })
    // 以前的监听中会使用到具体的值来标识我就计算到某个值，现在是在结果中表现出来

    // 这就是一个赋值的操作
    const updatename=computed(()=>{
      return data.newname +1;
    });
    const boname=computed({
      get(){
        return  data.firstname+'_'+data.lastname;
       },

      set(val){
         console.log(val,'是指当前的值发生变化时的改变');
         data.lastname=val.split('_')+"这也太奇怪了";
         // const name=data.lastname;
         // name.split('');
         // data.firstname= '新的名字是一个新的';
      }
    })
    const jump = () => {
      router.push('./test');

    }
    return {data,newname,updatename,boname,jump}
  },

})
</script>

<style scoped>
.watch{
  margin-top: 100px;
  text-align: center;
}
</style>
