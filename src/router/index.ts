import type { App } from 'vue'
import NProgress from '@/utils/progress'
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

/* 路由前置守卫 */
router.beforeEach(() => {
	NProgress.start()
})

router.afterEach(() => {
	NProgress.done()
})

export default router
