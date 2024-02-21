import { createApp } from 'vue'
import App from './App.vue'
import { getServerConfig } from './config'
import { setupStore } from '@/store'
import { setupRouter } from '@/router'
import { MotionPlugin } from '@vueuse/motion'
import { injectResponsiveStorage } from '@/utils/responsive'

// svg相关
import 'virtual:svg-icons-register'
import SvgIcon from './components/svgIcon/index.vue'

// 引入重置样式
import './style/reset.scss'
// 一定要在main.ts中导入tailwind.css，防止vite每次hmr都会请求src/style/index.scss整体css文件导致热更新慢的问题
import './style/tailwind.css'

const app = createApp(App)

getServerConfig(app).then(async (config) => {
	// 创建路由
	setupRouter(app)
	injectResponsiveStorage(app, config)
	setupStore(app)
	app.component('svg-icon', SvgIcon)
	app.use(MotionPlugin)
	app.mount('#app')
})
