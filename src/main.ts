import { createApp } from 'vue'
import App from './App.vue'
import 'sober'
//iconfont css文件
import '@/assets/icon/iconfont.css'
//全局less文件
import "@/assets/style/reset.less"
//引入route
import Route from './route'
//引入pinia
import pinia from '@/store/index'
//引入rem适配文件
import './utils/font/rem'

const app = createApp(App)

app.use(Route)
app.use(pinia)

app.mount('#app')
