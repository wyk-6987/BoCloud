//新增路由文件
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
// import GetRuter from "../components/getrouter";
// import HelloWorld from "../components/HelloWorld";
// import NewWatch from "@/components/NewWatch";
const routes = [
    {path: '/',              name: 'login',   component: () => import('../components/login/login')},
    {path: '/start',         name: 'start',   component: () => import('../components/login/start'),
        children:[
            {path: '/start/food',          name: 'food',    component: () => import('../components/food/index'),     meta:{title:'美食'}},
            {path: '/start/history',       name: 'history', component: () => import('../components/history/index'),  meta:{title:'历史'}},
            {path: '/start/magic',         name: 'magic',   component: () => import('../components/magic/index'),    meta:{title:'魔法'}},
            {path: '/start/music',         name: 'music',   component: () => import('../components/music/index'),    meta:{title:'音乐'}},
            {path: '/start/travel',        name: 'travel',  component: () => import('../components/travel/index'),   meta:{title:'旅行'}},
            {path: '/start/recored',       name: 'recored', component: () => import('../components/recored/index'),   meta:{title:'记录'}},
        ]
    },
]
const hash=createWebHashHistory();// 哈希路由
const router = createRouter({
    history:createWebHistory(), // history路由
    routes
})

export default router
