import { defineStore } from 'pinia'
import router from '@/router'
import { store } from '@/store'
import { storageSession } from '@pureadmin/utils'
import type { userType } from './types'
import { type DataInfo, sessionKey } from '@/utils/auth'

export const useUserStore = defineStore({
	id: 'dc-user',
	state: (): userType => ({
		// 判断登录页面显示哪个组件（0：登录（默认）、1：忘记密码）
		currentPage: 0,
		// 用户名
		username: storageSession().getItem<DataInfo>(sessionKey)?.username ?? ''
	}),
	actions: {
		/** 存储登录页面显示哪个组件 */
		SET_CURRENTPAGE(value: number) {
			this.currentPage = value
		},
		/** 存储用户名 */
		SET_USERNAME(username: string) {
			this.username = username
		},
		/** 前端登出（不调用接口） */
		logOut() {
			this.username = ''
			router.push('/login')
		}
	}
})

export function useUserStoreHook() {
	return useUserStore(store)
}
