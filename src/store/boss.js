import {defineStore} from "pinia";
import { userStore } from './user'
export const bossStore=defineStore('boss',{
    state:()=>{
        return{
            companyname:'江苏博云科技股份有限公司',
            math:'500人',
            station:'不是很好，很多人没有项目',
            origionperson:"博云创始人",
            count:10000,
            number:100,
            arr:[],
        }
    },
    getters:{
        // 方法一，接收一个可选参数 state
        myCount(state){
            console.log('调用了') // 页面中使用了三次，这里只会执行一次，然后缓存起来了
            return state.count + 1
        },
        // 方法二，不传参数，使用 this
        // 但是必须指定函数返回值的类型，否则类型推导不出来
        myCount1(){
            return this.number + 1
        }
    },
    actions:{
        changestate(num){
            const  userdata=userStore();
            userdata.changestate(num);//修改别的store的数据
        }
    }
})
