<template>
  <div id="wrap">
    <h2>简单的number、string:</h2>
    <el-form>
      <el-form-item label="美食名称：">
        <el-input v-model="name" placeholder="时间美食数不胜数请输入一种吧" clearable/>
      </el-form-item>
      <el-form-item label="美食地址：">
        <el-input v-model="adress" placeholder="请输入他的所在地吧" clearable/>
      </el-form-item>
      <el-form-item label="推荐数量：">
        <el-input v-model="number" placeholder="" clearable/>
      </el-form-item>
      <el-form-item label="停止监听：">
        <el-input v-model="testnumber" placeholder="如果数字大于10，就不再监听" clearable/>
      </el-form-item>
    </el-form>
    <div class="result">
      <h2>总结：</h2>
      <ol>
        <li>
          <h3>简单的numer和strign类型使用ref即可</h3>
        </li>
        <li>
          <h3>watch可以单独写不同的变量监听，也可以写在一起，但是写在一起会少许的麻烦，写在一起时发生以下变化
            <ul>
              <li>
                第一个参数利用数组表示，【变量1，变量2，变量3】,第二个回调参数对应的获取的就是变量1的新值、变量2的新值
              </li>
            </ul>
          </h3>
        </li>
        <li>
          <h3>虽然能够监听到多个数值的变化，但是处理事件却稍显麻烦</h3>
        </li>
        <li>
          <h3>vue3中监听可以手动停止，watchFunc()  // 停止监听`,这里是通过给watch赋值来停止监听</h3>
        </li>
      </ol>
    </div>
    <br/>
    <h2>简单的数组、对象:</h2>
    <el-form>
      <el-form-item label="姓名：">
        <el-input v-model="newname" placeholder='请输入名称' clearable/>
      </el-form-item>
      <el-form-item label="爱好：">
        <el-input v-model="arr1"  clearable/>
      </el-form-item>
      <el-form-item>
        <el-button @click="add" type="primary">添加爱好</el-button>
      </el-form-item>
    </el-form>
    <div class="result">
      <h2>总结：</h2>
      <ol>
        <li><h3>对象类型的数据在发生改变式可以使用（）=》state.key的形式作为第一个参数</h3></li>
        <li><h3>对象类型的数组在发生改变式可以使用（）=》state.key的形式作为第一个参数，但是deep要手动改为true才可以监听得到</h3></li>
      </ol>
    </div>
  </div>
  <div>计算属性得到的新的值{{newname1}}</div>
  <el-button style="float: right;margin-right: 100px"  @click="add" type="primary">下一步</el-button>
</template>

<script>
import {computed, reactive, ref, toRefs, watch, watchEffect} from 'vue'
export default {
  name: "FOOD",
  setup(){
    const name = ref('');
    const adress = ref('');
    const number = ref('');
    const testnumber = ref('');
    watch(name,()=>{
      console.log('名字正在发生改变');
    })
    watch(adress, () => {
      console.log('地址正在发生改变');
    });
    watch([name, adress], ([va1, val2]) => {
      console.log('发生了改变', va1, val2)
    })
    watch([name, adress, number], ([val1, val2, val3]) => {
      console.log('某一项发生了变化')
    })

    const flag = watch(testnumber,(val)=>{
       if(val>10){
         console.log('停止监听');
         flag();
       }else {
         console.log('还在继续监听');
       }
    });

    //watct默认监听属性deep：true
    const  state =reactive({
            newname:'北京',
            arr1:['吸烟','农药'],
    })
   const add = () => {
     state.arr1.push('泡妹子');
   }

    watch(()=>state.newname, () => {
      console.log('名字发生了改变')
    })
    watch(()=>state.arr1,()=>{
      console.log('数组发生了变化');
    },{deep:true})

    //接下来是测试watcheffect

    watchEffect(()=>name,()=>{
      console.log(111)
    })

    const newname1 = computed(()=>state.newname+'是个好地方');

    return {name, adress, number, testnumber, ...toRefs(state), add, newname1}
  }
}
</script>

<style scoped>
#wrap{
  padding: 5px;
}
.el-form{
  width: 500px;
  margin-left: 25px;
}
.result{
  width: 100%;
  border-top: 1px solid lightsteelblue;
  margin-top: 20px;
}
h3{
  color: #42b983;
}
</style>
