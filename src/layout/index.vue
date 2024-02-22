<script setup lang="ts">
import '@/components/ReIcon/src/offlineIcon'
import { ref } from 'vue'
import SiderBar from './components/sidebar/index.vue'
import BreadCrumb from './components/head/breadCrumb.vue'
import ExtraIcon from './components/head/extraIcon.vue'
import DropMenu from './components/head/dropMenu.vue'
import { useNav } from './hooks/useNav'
const { isCollapse } = useNav()
const isCollapseRef = ref(isCollapse)
</script>

<template>
	<div class="layout-container">
		<!-- 侧边栏 -->
		<div class="aside">
			<SiderBar :style="{ width: isCollapseRef ? '64px' : '200px' }" />
		</div>
		<div class="main-container">
			<div class="head">
				<ExtraIcon />
				<BreadCrumb />
				<DropMenu class="dropmenu" />
			</div>
			<div class="main">
				<router-view />
			</div>
			<div class="footerbox">
				<div>黑眼圈脚手架 ©2024 Created by 黑眼圈</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.layout-container {
	background-color: #f2f5fa;
	height: 100vh;
	display: flex;
}
.aside {
	// background-color: red;
	height: 100%;
}
.main-container {
	// background-color: #0c53fb;
	display: flex;
	flex-direction: column;
	flex: 1;
}
.head {
	height: 75px; //与logo同高
	padding: 0 20px;
	display: flex;
	border-bottom: #ebf0f6 2px solid;
	align-items: center;
}
.dropmenu {
	margin-left: auto;
}
.main {
	flex: 1;
}
.footerbox {
	height: 56px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
</style>
