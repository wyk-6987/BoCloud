<template>
<div>测试elementUi中的组件使用情况</div>
<h2>级联选择器</h2>
  <el-cascader :options="options" clearable />
<h2>状态管理工具pinia</h2>
<h3>定义多个store子文件这样是不是会让模块变的更加清晰一点，文件各自独立又相互搭配使用这，测试一下啦</h3>
<div>{{companyname}}</div>
<div>{{userdata.count}}</div>
<hr>
<div>{{userdata.myCount}}</div>
<div>{{userdata.myCount1}}</div>
<div>更新状态管理中的数据只有一种方式那就是action</div>
<el-button type="primary" @click="updata">更新数据</el-button>
<el-button @click="jumppage">跳转到别的页面进行查看数据的的更新结果于比对</el-button>
<h3>总结一点：一般来讲状态管理中的数据都是可变的，store中返回的是一个函数，需要进行一次调用，为了保证数据的响应式
一般需要家storetorefs来保证数据的响应式管理</h3>
  <hr>
  <h3>数据的修改有四种方式，不过最简单的是第一种</h3>
  <ul>
    <li><h4>拿对象的数据进行修改，获取到的userdata是一个代理模式的数据，需要进行.value进行取值与赋值操作</h4></li>
    <li><h4>还有一种方式就是数据的批量化修改，闯入参数state将不同的数据一起修改，但是请注意，修改时用到的数据是不能直接拿代理模式的数据进行
    $patch的修改，需要拿元数据进行修改，最好的办法就是新定义一个数据进行修改，用响应式的数据做展示</h4></li>
    <li><h4>最终极的做法就是条用pinia种的action方法做回调处理，同时也要保证数据不是代理的数据，action就是可以传入不同的数据，当然前两种也可以调用全局变量加入参数
    </h4></li>
  </ul>
</template>

<script>
import {reactive, toRefs} from "vue";
import {userStore} from "@/store/user";
import { storeToRefs } from 'pinia'
import {useRouter} from "vue-router";

export default {
  name: "element",
  setup(){
      const router= useRouter();
      const jumppage = () => {
        router.push('./piniapage')
      }
      const data=reactive({options :[
      {
        value: 'guide',
        label: 'Guide',
        children: [
          {
            value: 'disciplines',
            label: 'Disciplines',
            children: [
              {
                value: 'consistency',
                label: 'Consistency',
              },
              {
                value: 'feedback',
                label: 'Feedback',
              },
              {
                value: 'efficiency',
                label: 'Efficiency',
              },
              {
                value: 'controllability',
                label: 'Controllability',
              },
            ],
          },
          {
            value: 'navigation',
            label: 'Navigation',
            children: [
              {
                value: 'side nav',
                label: 'Side Navigation',
              },
              {
                value: 'top nav',
                label: 'Top Navigation',
              },
            ],
          },
        ],
      },
      {
        value: 'component',
        label: 'Component',
        children: [
          {
            value: 'basic',
            label: 'Basic',
            children: [
              {
                value: 'layout',
                label: 'Layout',
              },
              {
                value: 'color',
                label: 'Color',
              },
              {
                value: 'typography',
                label: 'Typography',
              },
              {
                value: 'icon',
                label: 'Icon',
              },
              {
                value: 'button',
                label: 'Button',
              },
            ],
          },
          {
            value: 'form',
            label: 'Form',
            children: [
              {
                value: 'radio',
                label: 'Radio',
              },
              {
                value: 'checkbox',
                label: 'Checkbox',
              },
              {
                value: 'input',
                label: 'Input',
              },
              {
                value: 'input-number',
                label: 'InputNumber',
              },
              {
                value: 'select',
                label: 'Select',
              },
              {
                value: 'cascader',
                label: 'Cascader',
              },
              {
                value: 'switch',
                label: 'Switch',
              },
              {
                value: 'slider',
                label: 'Slider',
              },
              {
                value: 'time-picker',
                label: 'TimePicker',
              },
              {
                value: 'date-picker',
                label: 'DatePicker',
              },
              {
                value: 'datetime-picker',
                label: 'DateTimePicker',
              },
              {
                value: 'upload',
                label: 'Upload',
              },
              {
                value: 'rate',
                label: 'Rate',
              },
              {
                value: 'form',
                label: 'Form',
              },
            ],
          },
          {
            value: 'data',
            label: 'Data',
            children: [
              {
                value: 'table',
                label: 'Table',
              },
              {
                value: 'tag',
                label: 'Tag',
              },
              {
                value: 'progress',
                label: 'Progress',
              },
              {
                value: 'tree',
                label: 'Tree',
              },
              {
                value: 'pagination',
                label: 'Pagination',
              },
              {
                value: 'badge',
                label: 'Badge',
              },
            ],
          },
          {
            value: 'notice',
            label: 'Notice',
            children: [
              {
                value: 'alert',
                label: 'Alert',
              },
              {
                value: 'loading',
                label: 'Loading',
              },
              {
                value: 'message',
                label: 'Message',
              },
              {
                value: 'message-box',
                label: 'MessageBox',
              },
              {
                value: 'notification',
                label: 'Notification',
              },
            ],
          },
          {
            value: 'navigation',
            label: 'Navigation',
            children: [
              {
                value: 'menu',
                label: 'Menu',
              },
              {
                value: 'tabs',
                label: 'Tabs',
              },
              {
                value: 'breadcrumb',
                label: 'Breadcrumb',
              },
              {
                value: 'dropdown',
                label: 'Dropdown',
              },
              {
                value: 'steps',
                label: 'Steps',
              },
            ],
          },
          {
            value: 'others',
            label: 'Others',
            children: [
              {
                value: 'dialog',
                label: 'Dialog',
              },
              {
                value: 'tooltip',
                label: 'Tooltip',
              },
              {
                value: 'popover',
                label: 'Popover',
              },
              {
                value: 'card',
                label: 'Card',
              },
              {
                value: 'carousel',
                label: 'Carousel',
              },
              {
                value: 'collapse',
                label: 'Collapse',
              },
            ],
          },
        ],
      },
      {
        value: 'resource',
        label: 'Resource',
        children: [
          {
            value: 'axure',
            label: 'Axure Components',
          },
          {
            value: 'sketch',
            label: 'Sketch Templates',
          },
          {
            value: 'docs',
            label: 'Design Documentation',
          },
        ],
      },
    ]});
      const {companyname} =storeToRefs(userStore());
      const userdata=storeToRefs(userStore());
      console.log(userdata);
      const  newdata= userStore();
      const updata = () => {
        // 方法一
        userdata.count.value++;
        console.log(userdata);


        newdata.changestate('2222');

        // 方法二，需要修改多个数据，建议用 $patch 批量更新，传入一个对象
        // userdata.$patch({
        //   count: user_store.count1++,
        //   // arr: user_store.arr.push(1) // 错误
        //   arr: [ ...user_store.arr, 1 ] // 可以，但是还得把整个数组都拿出来解构，就没必要
        // })
        // 方法二不好用我们就不用了
        // 使用 $patch 性能更优，因为多个数据更新只会更新一次视图


        // 方法三，还是$patch，传入函数，第一个参数就是 state
        // userdata.$patch( state => {
        //   state.count++
        //   state.arr.push(1)
        // })



      }
    return{...toRefs(data),companyname,userdata,updata,jumppage};
  }
}
</script>

<style scoped>

</style>
