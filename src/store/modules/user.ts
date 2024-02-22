import { defineStore } from 'pinia'
import { store } from '@/store'
import type { userType } from './types'

export const useUserStore = defineStore({
	id: 'pure-user',
	state: (): userType => ({
		// 判断登录页面显示哪个组件（0：登录（默认）、1：忘记密码）
		currentPage: 0
	}),
	actions: {
		/** 存储登录页面显示哪个组件 */
		SET_CURRENTPAGE(value: number) {
			this.currentPage = value
		}
	}
})

export function useUserStoreHook() {
	return useUserStore(store)
}
