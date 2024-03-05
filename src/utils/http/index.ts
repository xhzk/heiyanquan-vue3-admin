import Axios, { AxiosInstance, AxiosRequestConfig, CustomParamsSerializer } from 'axios'
import { DcHttpError, RequestMethods, DcHttpResponse, DcHttpRequestConfig } from './types.d'
import { stringify } from 'qs'
import NProgress from '../progress'
import { getToken, formatToken } from '@/utils/auth'
import { useUserStoreHook } from '@/store/modules/user'

// 相关配置请参考：www.axios-js.com/zh-cn/docs/#axios-request-config-1
const defaultConfig: AxiosRequestConfig = {
	// 请求超时时间
	timeout: 10000,
	headers: {
		Accept: 'application/json, text/plain, */*',
		'Content-Type': 'application/json',
		'X-Requested-With': 'XMLHttpRequest'
	},
	// 数组格式参数序列化（https://github.com/axios/axios/issues/5142）
	paramsSerializer: {
		serialize: stringify as unknown as CustomParamsSerializer
	}
}

class DcHttp {
	constructor() {
		this.httpInterceptorsRequest()
		this.httpInterceptorsResponse()
	}

	/** token过期后，暂存待执行的请求 */
	private static requests = []

	/** 防止重复刷新token */
	private static isRefreshing = false

	/** 初始化配置对象 */
	private static initConfig: DcHttpRequestConfig = {}

	/** 保存当前Axios实例对象 */
	private static axiosInstance: AxiosInstance = Axios.create(defaultConfig)

	/** 重连原始请求 */
	private static retryOriginalRequest(config: DcHttpRequestConfig) {
		return new Promise((resolve) => {
			DcHttp.requests.push((token: string) => {
				config.headers['Authorization'] = formatToken(token)
				resolve(config)
			})
		})
	}

	/** 请求拦截 */
	private httpInterceptorsRequest(): void {
		DcHttp.axiosInstance.interceptors.request.use(
			async (config: DcHttpRequestConfig): Promise<any> => {
				// 开启进度条动画
				NProgress.start()
				// 优先判断post/get等方法是否传入回调，否则执行初始化设置等回调
				if (typeof config.beforeRequestCallback === 'function') {
					config.beforeRequestCallback(config)
					return config
				}
				if (DcHttp.initConfig.beforeRequestCallback) {
					DcHttp.initConfig.beforeRequestCallback(config)
					return config
				}
				/** 请求白名单，放置一些不需要token的接口（通过设置请求白名单，防止token过期后再请求造成的死循环问题） */
				const whiteList = ['/refreshToken', '/login']
				return whiteList.some((v) => config.url.indexOf(v) > -1)
					? config
					: new Promise((resolve) => {
							const data = getToken()
							if (data) {
								const now = new Date().getTime()
								// const expired = parseInt(data.expires) - now <= 0
								const expired = data.expires - now <= 0
								if (expired) {
									if (!DcHttp.isRefreshing) {
										DcHttp.isRefreshing = true
										// token过期刷新
										useUserStoreHook()
											.handRefreshToken({ refreshToken: data.refreshToken })
											.then((res) => {
												const token = res.data.accessToken
												config.headers['Authorization'] = formatToken(token)
												DcHttp.requests.forEach((cb) => cb(token))
												DcHttp.requests = []
											})
											.finally(() => {
												DcHttp.isRefreshing = false
											})
									}
									resolve(DcHttp.retryOriginalRequest(config))
								} else {
									config.headers['Authorization'] = formatToken(data.accessToken)
									resolve(config)
								}
							} else {
								resolve(config)
							}
						})
			},
			(error) => {
				return Promise.reject(error)
			}
		)
	}

	/** 响应拦截 */
	private httpInterceptorsResponse(): void {
		const instance = DcHttp.axiosInstance
		instance.interceptors.response.use(
			(response: DcHttpResponse) => {
				const $config = response.config
				// 关闭进度条动画
				NProgress.done()
				// 优先判断post/get等方法是否传入回调，否则执行初始化设置等回调
				if (typeof $config.beforeResponseCallback === 'function') {
					$config.beforeResponseCallback(response)
					return response.data
				}
				if (DcHttp.initConfig.beforeResponseCallback) {
					DcHttp.initConfig.beforeResponseCallback(response)
					return response.data
				}
				return response.data
			},
			(error: DcHttpError) => {
				const $error = error
				$error.isCancelRequest = Axios.isCancel($error)
				// 关闭进度条动画
				NProgress.done()
				// 所有的响应异常 区分来源为取消请求/非取消请求
				return Promise.reject($error)
			}
		)
	}

	/** 通用请求工具函数 */
	public request<T>(
		method: RequestMethods,
		url: string,
		param?: AxiosRequestConfig,
		axiosConfig?: DcHttpRequestConfig
	): Promise<T> {
		const config = {
			method,
			url,
			...param,
			...axiosConfig
		} as DcHttpRequestConfig

		// 单独处理自定义请求/响应回调
		return new Promise((resolve, reject) => {
			DcHttp.axiosInstance
				.request(config)
				.then((response: undefined) => {
					resolve(response)
				})
				.catch((error) => {
					reject(error)
				})
		})
	}

	/** 单独抽离的post工具函数 */
	public post<T, P>(
		url: string,
		params?: AxiosRequestConfig<T>,
		config?: DcHttpRequestConfig
	): Promise<P> {
		return this.request<P>('post', url, params, config)
	}

	/** 单独抽离的get工具函数 */
	public get<T, P>(
		url: string,
		params?: AxiosRequestConfig<T>,
		config?: DcHttpRequestConfig
	): Promise<P> {
		return this.request<P>('get', url, params, config)
	}
}

export const http = new DcHttp()
