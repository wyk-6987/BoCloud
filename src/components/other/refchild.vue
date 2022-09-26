<template>
<div>接收腹肌传来的值如下:</div>
<div>{{msg}}</div>
</template>

<script>
export default {
  name: "refchild",
  props:['msg'],
  setup(props,content){
    console.log(props,content);
  }

}
</script>

<style scoped>

</style>
