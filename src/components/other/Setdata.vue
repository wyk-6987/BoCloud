<template>
 <div>开始一段新的奇妙旅程</div>
  <div>从父级别传递的值是：{{msg}}</div>
  <div class="newtrace">
  <div>{{data.number}}</div>
  <button @click="updata">更新数据</button>
  <button @click="changeview">更新视图</button>
  </div>
</template>
<script>
import {defineComponent, reactive} from "vue";

export default defineComponent({
  name: "Setdata",
  // VUE3提供i到了一点就是组合式api,那么什么是组合式api呢，
  // 就是我们可以配合不同版本的api使用。
  // 这样就会有好处也会有坏处
  // 好处的化对于新手来说就很明显了，因为v3的编译速度很快啊，那么我也可以使用v2中的api来编写代码
  // 坏处就来了，那我一会写3的，一会写2的就会出现紊乱
  // setup中返回的是一个代理对象，而且v3中的setup不存在beforecreat这个生命周期
  // setup不能hi用async，一般情况下是这样的：async配合着await使用，而async返回的是一个promise对象，我们需要的是一个代理对象
  //在setuo中和methes中定义相同的函数时，setup的优先级更高
  props:['msg'],
  // setup中的参数问题，第一个参数是腹肌穿过来的值，第二个参数是一个对象，对像中包含三个属性： 变迁中的所有未引用的属性，事件的分发   插插哦
  setup(props,context){
    console.log(props,context);
    const data= reactive({
       number:99999,
    })
    const updata = () => {
       data.number++;
    }
    const changeview = () => {
       context.emit('getchild','让我想想传递一个什么样的值好呢')
    }
    return {data,updata,changeview};
  },
  methods:{
    updata(){
      this.data.number+=10;
    }
  }
})
</script>

<style scoped>
.newtrace{
  text-align: left;
}
</style>
