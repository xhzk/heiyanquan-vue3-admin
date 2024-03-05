import { RouterHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import { isAllEmpty } from '@pureadmin/utils'

function handRank(routeInfo: any) {
	const { name, path, parentId, meta } = routeInfo
	return isAllEmpty(parentId)
		? isAllEmpty(meta?.rank) || (meta?.rank === 0 && name !== 'Home' && path !== '/')
			? true
			: false
		: false
}

/** 按照路由中meta下的rank等级升序来排序路由 */
function ascending(arr: any[]) {
	arr.forEach((v, index) => {
		// 当rank不存在时，根据顺序自动创建，首页路由永远在第一位
		if (handRank(v)) v.meta.rank = index + 2
	})
	return arr.sort((a: { meta: { rank: number } }, b: { meta: { rank: number } }) => {
		return a?.meta.rank - b?.meta.rank
	})
}

/** 获取路由历史模式 https://next.router.vuejs.org/zh/guide/essentials/history-mode.html */
function getHistoryMode(routerHistory): RouterHistory {
	// len为1 代表只有历史模式 为2 代表历史模式中存在base参数 https://next.router.vuejs.org/zh/api/#%E5%8F%82%E6%95%B0-1
	const historyMode = routerHistory.split(',')
	const leftMode = historyMode[0]
	const rightMode = historyMode[1]
	// no param
	if (historyMode.length === 1) {
		if (leftMode === 'hash') {
			return createWebHashHistory('')
		} else if (leftMode === 'h5') {
			return createWebHistory('')
		}
	} //has param
	else if (historyMode.length === 2) {
		if (leftMode === 'hash') {
			return createWebHashHistory(rightMode)
		} else if (leftMode === 'h5') {
			return createWebHistory(rightMode)
		}
	}
}

export { getHistoryMode, ascending }
