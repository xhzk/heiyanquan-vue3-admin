import type { App } from 'vue'
// 引入 login.ts
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import loginRouter from './modules/login'
import homeRouter from './modules/home'
import errorRouter from './modules/error'

export const publicRoutes: Array<RouteRecordRaw> = [...loginRouter, ...homeRouter, ...errorRouter]

const router = createRouter({
	history: createWebHashHistory(),
	routes: publicRoutes
})

/* 初始化路由表 */
export function resetRouter() {
	router.getRoutes().forEach((route) => {
		const { name } = route
		if (name) {
			router.hasRoute(name) && router.removeRoute(name)
		}
	})
}

/* 导出 setupRouter */
export const setupRouter = (app: App<Element>) => {
	app.use(router)
}
