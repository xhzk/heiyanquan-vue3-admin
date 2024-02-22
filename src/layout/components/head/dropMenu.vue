<script setup lang="ts">
import { useNav } from '@/layout/hooks/useNav'
import LogoutCircleRLine from '@iconify-icons/ri/logout-circle-r-line'

const { username, userAvatar, avatarsStyle, logout } = useNav()
</script>

<template>
	<el-dropdown trigger="click">
		<span class="el-dropdown-link navbar-bg-hover select-none">
			<el-avatar :src="userAvatar" :style="avatarsStyle" />
			<p v-if="username" class="dark:text-white">{{ username }}</p>
		</span>
		<template #dropdown>
			<el-dropdown-menu class="logout">
				<el-dropdown-item @click="logout">
					<IconifyIconOffline :icon="LogoutCircleRLine" style="margin: 5px" />
					退出系统
				</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>
