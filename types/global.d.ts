import type { IconifyIcon } from '@iconify/vue'
/**
 * 全局类型声明，无需引入直接在 `.vue` 、`.ts` 、`.tsx` 文件使用即可获得类型提示
 */
declare global {
	/**
	 * 全局自定义环境变量的类型声明
	 * @see {@link https://yiming_chang.gitee.io/pure-admin-doc/pages/config/#%E5%85%B7%E4%BD%93%E9%85%8D%E7%BD%AE}
	 */
	interface ViteEnv {
		VITE_PORT: number
		VITE_PUBLIC_PATH: string
		VITE_ROUTER_HISTORY: string
		VITE_HIDE_HOME: string
	}

	/**
	 * 缓存到浏览器本地存储的类型声明
	 */
	interface StorageConfigs {
		sidebarStatus?: boolean
	}

	/**
	 * 对应 `public/serverConfig.json` 文件的类型声明
	 */
	interface ServerConfigs {
		SidebarStatus?: boolean
		ResponsiveStorageNameSpace?: string
	}

	/**
	 * `responsive-storage` 本地响应式 `storage` 的类型声明
	 */
	interface ResponsiveStorage {
		layout: {
			sidebarStatus?: boolean
		}
	}
}
