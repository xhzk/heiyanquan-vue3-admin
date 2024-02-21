// 响应式storage
import { App } from 'vue'
import Storage from 'responsive-storage'
import { responsiveStorageNameSpace } from '@/config'

export const injectResponsiveStorage = (app: App, config: ServerConfigs) => {
	const nameSpace = responsiveStorageNameSpace()
	const configObj = Object.assign({
		// layout
		layout: Storage.getData('layout', nameSpace) ?? {
			sidebarStatus: config.SidebarStatus ?? true
		}
	})

	app.use(Storage, { nameSpace, memory: configObj })
}
