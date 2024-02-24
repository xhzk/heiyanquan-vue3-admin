<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
import '@/components/ReIcon/src/offlineIcon'
import { useNav } from './hooks/useNav'
import { setType } from './types'
import { useAppStoreHook } from '@/store/modules/app'
import { deviceDetection } from '@pureadmin/utils'
import { useResizeObserver } from '@vueuse/core'

// 页面组件
import SiderBar from './components/sidebar/index.vue'
import NavBar from './components/navbar/index.vue'

const { isCollapse, device } = useNav()
const isCollapseRef = ref(isCollapse)
const isMobile = deviceDetection()
const containerRef = ref()

const set: setType = reactive({
	sidebar: computed(() => {
		return useAppStoreHook().sidebar
	}),
	device: computed(() => {
		return useAppStoreHook().device
	}),
	classes: computed(() => {
		return {
			hideSidebar: !set.sidebar.opened,
			openSidebar: set.sidebar.opened,
			mobile: set.device === 'mobile'
		}
	})
})
function toggle(device: string, bool: boolean) {
	useAppStoreHook().toggleDevice(device)
	useAppStoreHook().toggleSideBar(bool, 'resize')
}

// 判断是否可自动关闭菜单栏
let isAutoCloseSidebar = true

// 菜单动态监听
useResizeObserver(containerRef, (entries) => {
	if (isMobile) return
	const entry = entries[0]
	const { width } = entry.contentRect
	/** width app-wrapper类容器宽度
	 * 0 < width <= 760 隐藏侧边栏
	 * 760 < width <= 990 折叠侧边栏
	 * width > 990 展开侧边栏
	 */
	if (width > 0 && width <= 760) {
		toggle('mobile', false)
		isAutoCloseSidebar = true
	} else if (width > 760 && width <= 990) {
		if (isAutoCloseSidebar) {
			toggle('desktop', false)
			isAutoCloseSidebar = false
		}
	} else if (width > 990 && !set.sidebar.isClickCollapse) {
		toggle('desktop', true)
		isAutoCloseSidebar = true
	} else {
		toggle('desktop', false)
		isAutoCloseSidebar = false
	}
})

onMounted(() => {
	if (isMobile) {
		toggle('mobile', false)
	}
})
</script>

<template>
	<div ref="containerRef" :class="['layout-container', set.classes]">
		<!-- 侧边栏 -->
		<div class="aside">
			<SiderBar :style="{ width: isCollapseRef ? '64px' : '200px' }" v-if="device === 'desktop'" />
		</div>
		<div class="main-container">
			<div class="header">
				<NavBar />
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
.header {
	height: 75px; //与logo同高
	padding: 0 20px;
	border-bottom: #ebf0f6 2px solid;
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
