import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)
import { setupRouter } from '@/router'

const setupApp = async () => {
	// 创建路由
	setupRouter(app)
	app.mount('#app')
}

setupApp()
