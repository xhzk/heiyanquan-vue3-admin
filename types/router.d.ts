import { type RouteComponent, type RouteLocationNormalized } from 'vue-router'

declare global {
	/**
	 * @description 整体路由配置表（包括完整子路由）
	 */
	interface RouteConfigsTable {
		/** 路由地址 `必填` */
		path: string
		/** 路由名字（保持唯一）`可选` */
		name?: string
		/** `Layout`组件 `可选` */
		component?: RouteComponent
		/** 路由重定向 `可选` */
		redirect?: string
		meta?: {
			/** 菜单名称（兼容国际化、非国际化，如何用国际化的写法就必须在根目录的`locales`文件夹下对应添加）`必填` */
			title: string
			/** 菜单图标 `可选` */
			icon?: string | FunctionalComponent | IconifyIcon
			/** 是否在菜单中显示（默认`true`）`可选` */
			isShow?: boolean
			/** 菜单升序排序，值越高排的越后（只针对顶级路由）`可选` */
			rank?: number
		}
		/** 子路由配置项 */
		children?: Array<RouteChildrenConfigsTable>
	}
}
