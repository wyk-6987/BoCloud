<template>
<div id="wrap">
  <div id="left">
    <div v-for="(item,index) in modellist" :key="index" @click="jumpmodel(item.path)" class="namelist">
      {{ item.name }}
    </div>
  </div>
  <div id="right">
   <p><router-view></router-view></p>
  </div>
</div>
</template>

<script>
import {getCurrentInstance, reactive} from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Start_1",
  setup(){
    const  {ctx} = getCurrentInstance();
    const  $router = useRouter();
    const list= $router.options.routes;
    console.log($router.options.routes,ctx);
    const modellist= reactive([]);
    list.forEach(item=>{
      if(item.name=='start'){
        item.children.forEach(items=>{
          modellist.push({name:items.meta.title,path:items.path});
        })
      }
    })
   const jumpmodel = (path) => {
     $router.push(`${path}`);
   }
   return {modellist, jumpmodel }
  }
}
</script>

<style scoped>
#wrap{
  height: 100vh;
}
#left{
  width: 20%;
  float: left;
  height: 100%;
  box-sizing: border-box;
  border-right: 1px solid lightgray;
}
.namelist{
  height: 100px;
  box-sizing: border-box;
  border-bottom: 1px solid lightskyblue;
  text-align: center;
  line-height: 100px;
  cursor: pointer;
  background-color: lightgray;
}
#right{
  width: 80%;
  float: left;
  /*background-color: #42b983;*/
  height: 100%;
}
</style>
