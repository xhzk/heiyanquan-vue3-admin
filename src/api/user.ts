import { http } from '@/utils/http'

export type RefreshTokenResult = {
	success: boolean
	data: {
		/** `token` */
		accessToken: string
		/** 用于调用刷新`accessToken`的接口时所需的`token` */
		refreshToken: string
		/** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
		expires: Date
	}
}

/** 刷新token */
export const refreshTokenApi = (data?: object) => {
	return http.request<RefreshTokenResult>('post', '/refreshToken', { data })
}
