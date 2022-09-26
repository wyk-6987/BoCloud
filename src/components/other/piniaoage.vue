<template>
<h2>查看更新后的数据</h2>
<h3>注意转化后的数据不用载torefs进行新的代理</h3>
<div>{{userdata.count}}</div>
<el-button type="primary" @click="updata">更新数据</el-button>
<h1>还要测试数据的单个响应式处理</h1>
<div>更新后的数据:</div>
<h1 style="color: #42b983">各个模块的数据进行相互的修改：</h1>
<h3>模块一中的数据count:{{userdata.count}}</h3>
<hr>
<h3>模块二中的数据count:{{bossdata.count}}</h3>
<el-button type="primary" @click="changedata">开始修改数据</el-button>
<div>可以利用torefs将数据进行单个的转化，但是要注意重名的处理{{count}}</div>
<hr>

<el-button @click="tonew">接收数据</el-button>
</template>

<script>
// import {toRefs,ref} from "vue";
import {userStore } from "@/store/user";
import {bossStore} from "@/store/boss";
import {storeToRefs} from "pinia";
import {toRefs} from "vue";
import {useRouter} from "vue-router";

export default {
  name: "piniaoage",
  setup(){

    const  data= userStore();
    const updata = () => {
       data.$patch(state=>{
         state.count++;
       })
      console.log(data);
    }
    const  boss= bossStore();
    const changedata = () => {
       boss.changestate('一中的数据被第二个模块的方法所修改');
    }
    const userdata=storeToRefs(userStore());
    const bossdata=storeToRefs(bossStore());
    console.log(userdata);
    const router= useRouter();
    const tonew = () => {
      router.push('./node')
    }
    return {userdata,updata,bossdata,changedata,...toRefs(boss),tonew};
  }
}
</script>

<style scoped>

</style>
