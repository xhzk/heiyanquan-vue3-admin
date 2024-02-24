<script setup lang="ts">
import MenuUnfold from '@iconify-icons/ri/menu-unfold-fill'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import SideBarItem from '../sidebar/sidebarItem.vue'
import Logo from '../sidebar/logo.vue'

const drawer = ref(false)

// 拿到路由列表，过滤我们不想要的
const router = useRouter()
const routerList = router.getRoutes().filter((v) => v.meta && v.meta.isShow)
</script>

<template>
	<div @click="drawer = true">
		<IconifyIconOffline :icon="MenuUnfold" />
	</div>

	<el-drawer class="sidebar" v-model="drawer" direction="ltr" :with-header="false" size="200">
		<div>
			<!-- 项目名称及logo -->
			<Logo :collapse="false" />

			<!-- 导航菜单 -->
			<el-menu
				active-text-color="#0c53fb"
				background-color="#fff"
				:default-active="$route.path"
				text-color="#000000"
				:unique-opened="true"
				:collapse-transition="false"
				router>
				<!-- 引入子组件 -->
				<SideBarItem :routerList="routerList" />
			</el-menu>
		</div>
	</el-drawer>
</template>
