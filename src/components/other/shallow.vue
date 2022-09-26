<template>
<div>浅显的，不是那么深的</div>
<div>ref只是支持基本的数据，但是如果数据为一个对象，那么会被reactive进行转化</div>
  <div>{{ data1 }}</div>
  <button @click="fun1">给小明来点不一样的</button>
  <div>{{ data2}}</div>
  <button @click="fun2">给小红来点不一样的</button>
  <div>{{ data3}}</div>
  <button @click="fun3">给小蓝来点不一样的</button>
  <div>{{ data4 }}</div>
  <button @click="fun4">给小琴来点不一样的</button>
  <button @click="toref">toref</button>
</template>

<script>
import {shallowReactive, shallowRef, ref, reactive} from "vue";
import {useRouter} from "vue-router";
import router from "@/router";

export default {
  name: "shallow",
  setup(){
     const data1=reactive({
           name:'小明',
           age:10,
           hobby:{
              first:'吸烟'
           }
     });
    const data2=shallowReactive({
      name:'小红',
      age:12,
      hobby:{
        first:'蹦迪'
      }
    });
    const data3=ref({
      name:'小蓝',
      age:10,
      hobby:{
        first:'喝酒'
      }
    });
    const data4= shallowRef({
      name:'小青',
      age:10,
      hobby:{
        first:'烫头'
      }
    });


    const fun1 = () => {
      data1.name='博云小明';
      data1.hobby.first='打家劫舍';
    }


    const fun2 = () => {
      data2.name='博云小红';
      data1.hobby.first='昨天晚上去把隔壁家的鸡顿吃了';
    }

    const fun3 = () => {
      data3.value.name='博云小蓝';
      data3.value.hobby.first='打家劫舍';
    }

    const fun4 = () => {
      data4.value.name='博云小明';
      console.log(data4)
      data4.value.hobby.first='打家劫舍';
    }
    const router=useRouter();
    const toref = () => {
        router.push('./toref')
    }
     return{
        data1,
        data2,
        data3,
        data4,
        fun1,
        fun2,
        fun3,
        fun4,
        toref
     }
  }
}
</script>

<style scoped>

</style>
