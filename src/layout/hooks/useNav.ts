import { useAppStoreHook } from '@/store/modules/app'
import { computed } from 'vue'

export function useNav() {
	const dcApp = useAppStoreHook()

	const isCollapse = computed(() => {
		return !dcApp.getSidebarStatus
	})

	function toggleSideBar() {
		dcApp.toggleSideBar()
	}

	return {
		dcApp,
		isCollapse,
		toggleSideBar
	}
}
