import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupRouter } from '@/router'

// 一定要在main.ts中导入tailwind.css，防止vite每次hmr都会请求src/style/index.scss整体css文件导致热更新慢的问题
import './style/tailwind.css'

const app = createApp(App)

const setupApp = async () => {
	// 创建路由
	setupRouter(app)
	app.mount('#app')
}

setupApp()
