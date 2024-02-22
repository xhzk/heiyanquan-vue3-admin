import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import { getServerConfig } from './config'
import { setupStore } from '@/store'
import { setupRouter } from '@/router'
import { MotionPlugin } from '@vueuse/motion'
import { injectResponsiveStorage } from '@/utils/responsive'

const app = createApp(App)

// 引入重置样式
import './style/reset.scss'
// 导入公共样式
import './style/index.scss'
// 一定要在main.ts中导入tailwind.css，防止vite每次hmr都会请求src/style/index.scss整体css文件导致热更新慢的问题
import './style/tailwind.css'
import 'element-plus/dist/index.css'

// 全局注册`@iconify/vue`图标库
import { IconifyIconOffline, IconifyIconOnline, FontIcon } from './components/ReIcon'
app.component('IconifyIconOffline', IconifyIconOffline)
app.component('IconifyIconOnline', IconifyIconOnline)
app.component('FontIcon', FontIcon)

getServerConfig(app).then(async (config) => {
	// 创建路由
	setupRouter(app)
	injectResponsiveStorage(app, config)
	setupStore(app)
	app.use(MotionPlugin).use(ElementPlus)
	app.mount('#app')
})
