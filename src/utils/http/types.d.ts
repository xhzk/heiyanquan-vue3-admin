import Axios, { Method, AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios'

export type resultType = {
	accessToken?: string
}

export type RequestMethods = Extract<
	Method,
	'get' | 'post' | 'put' | 'delete' | 'patch' | 'option' | 'head'
>

export interface DcHttpError extends AxiosError {
	isCancelRequest?: boolean
}

export interface DcHttpResponse extends AxiosResponse {
	config: DcHttpRequestConfig
}

export interface DcHttpRequestConfig extends AxiosRequestConfig {
	beforeRequestCallback?: (request: DcHttpRequestConfig) => void
	beforeResponseCallback?: (response: DcHttpResponse) => void
}

export default class DcHttp {
	request<T>(
		method: RequestMethods,
		url: string,
		param?: AxiosRequestConfig,
		axiosConfig?: DcHttpRequestConfig
	): Promise<T>
	post<T, P>(url: string, params?: T, config?: DcHttpRequestConfig): Promise<P>
	get<T, P>(url: string, params?: T, config?: DcHttpRequestConfig): Promise<P>
}
