import { store } from '@/store'
import { defineStore } from 'pinia'
import { appType } from './types'
import { getConfig, responsiveStorageNameSpace } from '@/config'
import { deviceDetection, storageLocal } from '@pureadmin/utils'

export const useAppStore = defineStore({
	id: 'dc-app',
	state: (): appType => ({
		sidebar: {
			opened:
				storageLocal().getItem<StorageConfigs>('${responsiveStorageNameSpace()}layout')
					?.sidebarStatus ?? getConfig().SidebarStatus,
			isClickCollapse: false
		},
		device: deviceDetection() ? 'mobile' : 'desktop'
	}),
	getters: {
		getSidebarStatus(state) {
			return state.sidebar.opened
		},
		getDevice(state) {
			return state.device
		}
	},
	actions: {
		TOGGLE_SIDEBAR(opened?: boolean, resize?: string) {
			const layout = storageLocal().getItem<StorageConfigs>(`${responsiveStorageNameSpace()}layout`)
			if (opened && resize) {
				this.sidebar.opened = true
				layout.sidebarStatus = true
			} else if (!opened && resize) {
				this.sidebar.opened = false
				layout.sidebarStatus = false
			} else if (!opened && !resize) {
				this.sidebar.opened = !this.sidebar.opened
				this.sidebar.isClickCollapse = !this.sidebar.opened
				layout.sidebarStatus = this.sidebar.opened
			}
			storageLocal().setItem(`${responsiveStorageNameSpace()}layout`, layout)
		},
		async toggleSideBar(opened?: boolean, resize?: string) {
			await this.TOGGLE_SIDEBAR(opened, resize)
		},
		toggleDevice(device: string) {
			this.device = device
		}
	}
})

export function useAppStoreHook() {
	return useAppStore(store)
}
