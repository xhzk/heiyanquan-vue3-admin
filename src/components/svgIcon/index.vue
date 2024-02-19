<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
	iconClass: {
		type: String,
		required: true
	},
	className: {
		type: String,
		default: ''
	},
	iconColor: {
		type: String,
		default: 'CurrentColor'
	}
})
const iconName = computed(() => `#icon-${props.iconClass}`)
const svgClass = computed(() => {
	if (props.className) {
		return 'svg-icon ' + props.className
	} else {
		return 'svg-icon'
	}
})
</script>
<template>
	<svg :class="svgClass" aria-hidden="true" :fill="iconColor">
		<use :xlink:href="iconName" />
	</svg>
</template>

<style lang="scss" scoped>
.svg-icon {
	// svg 图标默认宽高，根据情况调整
	width: 20px;
	height: 20px;
	fill: currentColor;
	overflow: hidden;
}
</style>
