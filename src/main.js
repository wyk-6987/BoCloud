import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index' // 加载 router 底下的 index.js 路由配置文
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(createPinia())
app.mount('#app');

// createApp(App).mount('#app')
