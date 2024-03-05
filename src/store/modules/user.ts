import { defineStore } from 'pinia'
import router from '@/router'
import { store } from '@/store'
import { storageSession } from '@pureadmin/utils'
import type { userType } from './types'
import { type DataInfo, sessionKey, setToken } from '@/utils/auth'
import { RefreshTokenResult } from '@/api/user' // 类型
import { refreshTokenApi } from '@/api/user' // api接口

export const useUserStore = defineStore({
	id: 'dc-user',
	state: (): userType => ({
		// 判断登录页面显示哪个组件（0：登录（默认）、1：忘记密码）
		currentPage: 0,
		// 用户名
		username: storageSession().getItem<DataInfo<number>>(sessionKey)?.username ?? ''
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
		},
		/** 刷新`token` */
		async handRefreshToken(data) {
			return new Promise<RefreshTokenResult>((resolve, reject) => {
				refreshTokenApi(data)
					.then((data) => {
						if (data) {
							setToken(data.data)
							resolve(data)
						}
					})
					.catch((error) => {
						reject(error)
					})
			})
		}
	}
})

export function useUserStoreHook() {
	return useUserStore(store)
}
