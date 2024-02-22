<script lang="ts" setup>
import { ref, watch } from 'vue'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import { useRouter } from 'vue-router'
import { useRenderIcon } from '@/components/ReIcon/src/hooks'

const { currentRoute } = useRouter()
const extraiconList = ref()

// 监听当前路由的name变化
watch(
	() => currentRoute.value,
	(route: RouteLocationNormalizedLoaded) => {
		extraiconList.value = route.matched
	},
	{ immediate: true }
)
</script>

<template>
	<template v-for="item in extraiconList" :key="item.path">
		<template v-if="item.meta.icon">
			<el-icon class="extra-icon"><component :is="useRenderIcon(item.meta.icon)" /></el-icon>
		</template>
	</template>
</template>

<style lang="scss" scoped>
.extra-icon {
	// background-color: red;
	color: #0c53fb;
	font-size: 40px;
}
</style>
