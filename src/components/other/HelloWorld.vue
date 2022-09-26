<template>
  <div>接天莲叶无穷碧，映日荷花别样红。</div>
  <div>今天是周三，吞噬星空更新了呢</div>
  <div>今天是周三，吞噬星空更新了呢</div>
  <div>插入新的值，例如：</div>
  <p>{{data.data1}}</p>
  <input v-model="a">
  <button @click="update">加1</button>
  <br/>
  <BasicTui></BasicTui>
  <div @click="jump">直接跳转</div>
  <Setdata :msg="data.val" msg2="这是一个新的属性值，并没有被引用，后期作为值的传递可能会用到" @getchild="getall"></Setdata>
  <div>接收子集发来的值：{{data.childdata}}</div>
  <watchandcomputed></watchandcomputed>
</template>

<script>
import {defineComponent, reactive, ref,} from "vue";
import  {useRouter} from "vue-router";
import BasicTui from "@/components/BasicTui";
import Setdata from "@/components/Setdata";
import watchandcomputed from "@/components/watchandcomputed";
export default defineComponent(
    {
      name: 'HelloWorld',
      props: {
        msg: String
      },
      components:{BasicTui,Setdata,watchandcomputed},
      //实例化后只执行一次，组合式api，可以支持2的语法
      setup(){
        const data=reactive({
          data1:10,
          number:1,
          val:'这是父级给的值'
        });
        const  router=useRouter();
        console.log(data.number);
        const  a=ref(data.number)
        function  update(){
          a.value++;
        }
        const getall = (yu) => {
          console.log(`孩子发来了新年礼物：${yu}`);
          data.childdata=yu;
          console.log(data,yu);
        }
        // const jump = () => {
        //   router.push({name:'getrouter'})
        // }
        return {data,a,update,getall}
      }
    }
)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
