import { createApp } from 'vue'
import App from './App.vue'
import 'sober'
//全局less文件
import "@/assets/reset.less"
//引入route
import Route from './route'
const app = createApp(App)

app.use(Route)
app.mount('#app')
