import { computed } from 'vue'
import { useAppStoreHook } from '@/store/modules/app'
import { useUserStoreHook } from '@/store/modules/user'
import userAvatar from '@/assets/user.jpg'

export function useNav() {
	const dcApp = useAppStoreHook()

	const isCollapse = computed(() => {
		return !dcApp.getSidebarStatus
	})

	function toggleSideBar() {
		dcApp.toggleSideBar()
	}

	const username = computed(() => {
		return useUserStoreHook()?.username
	})

	const avatarsStyle = computed(() => {
		return username.value ? { marginRight: '10px' } : ''
	})

	function logout() {
		useUserStoreHook().logOut()
	}

	return {
		userAvatar,
		dcApp,
		isCollapse,
		toggleSideBar,
		username,
		avatarsStyle,
		logout
	}
}
