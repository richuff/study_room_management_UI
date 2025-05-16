import { createApp } from 'vue'
import App from './App.vue'
import 'sober'
//iconfont css文件
import '@/assets/icon/iconfont.css'
//全局less文件
import "@/assets/reset.less"
//引入route
import Route from './route'
//引入pinia
import pinia from '@/store/index'

const app = createApp(App)

app.use(Route)
app.use(pinia)

app.mount('#app')
