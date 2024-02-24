<script lang="ts" setup>
// 组件
import Logo from './logo.vue'
import SideBarItem from './sidebarItem.vue'
import MenuFold from './leftCollapse.vue'
import { useRouter } from 'vue-router'
import { useNav } from '@/layout/hooks/useNav'

const { dcApp, isCollapse, toggleSideBar, device } = useNav()

// 拿到路由列表，过滤我们不想要的
const router = useRouter()
const routerList = router.getRoutes().filter((v) => v.meta && v.meta.isShow)
</script>
<template>
	<div class="sidebar">
		<!-- 项目名称及logo -->
		<Logo :collapse="isCollapse" />

		<!-- 导航菜单 -->
		<el-menu
			active-text-color="#0c53fb"
			background-color="#fff"
			:default-active="$route.path"
			text-color="#000000"
			:unique-opened="true"
			:collapse="isCollapse"
			:collapse-transition="false"
			router>
			<!-- 引入子组件 -->
			<SideBarItem :routerList="routerList" />
		</el-menu>
		<!-- active-text-color：当前菜单项被选中时，字体的颜色 -->
		<!-- background-color：这个menu菜单的背景色 -->
		<!-- default-active：	当前激活菜单的 index -->
		<!-- text-color：菜单项字体颜色 -->
		<!-- unique-opened：unique-opened	是否只保持一个子菜单的展开 -->
		<!-- router：是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 -->

		<!-- 折叠按钮 -->
		<MenuFold
			:is-active="dcApp.sidebar.opened"
			@toggleClick="toggleSideBar"
			v-if="device === 'desktop'" />
	</div>
</template>
<style lang="scss" scoped>
.sidebar {
	height: 100%;
	.el-menu {
		height: calc(100% - 75px - 56px);
		border-right: 0;
		overflow: auto;
		font-weight: 700;
		// --el-menu-hover-bg-color: #0c53fb !important;
	}
}
</style>
