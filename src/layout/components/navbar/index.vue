<script setup lang="ts">
import { useNav } from '@/layout/hooks/useNav'
import TopCollapse from './topCollapse.vue'
import ExtraIcon from './extraIcon.vue'
import BreadCrumb from './breadCrumb.vue'
import DropMenu from './dropMenu.vue'

const { device } = useNav()
</script>

<template>
	<div class="navbar">
		<!-- 折叠按钮 -->
		<TopCollapse v-if="device === 'mobile'" />

		<!-- 路由图标 -->
		<ExtraIcon v-if="device === 'desktop'" />

		<!-- 面包屑 -->
		<BreadCrumb v-if="device === 'desktop'" />

		<div class="header-right">
			<!-- 信息展示 -->
			<DropMenu class="dropmenu" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.navbar {
	// background-color: red;
	width: 100%;
	height: 75px;
	overflow: hidden;
	display: flex;
	align-items: center;
}
.header-right {
	// background-color: blue;
	display: flex;
	align-items: center;
	flex: 1;
}
.dropmenu {
	margin-left: auto;
}
</style>
