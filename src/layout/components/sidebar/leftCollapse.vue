<script lang="ts" setup>
import MenuFold from '@/assets/layout/close.svg?component'
interface Props {
	isActive: boolean
}

const props = withDefaults(defineProps<Props>(), {
	isActive: false
})

const emit = defineEmits<{
	(e: 'toggleClick'): void
}>()

const toggleClick = () => {
	emit('toggleClick')
}
</script>

<template>
	<div class="fold-container">
		<el-icon
			class="icon"
			:style="{ transform: props.isActive ? 'none' : 'rotateY(180deg)' }"
			@click="toggleClick">
			<MenuFold />
		</el-icon>
	</div>
</template>

<style lang="scss" scoped>
.fold-container {
	background: #fff; //跟el-menu保持一个颜色
	width: 100%;
	height: 56px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-top: #f2f5fa 2px solid;
}
.icon {
	//background-color: blue;
	margin-left: 23px;
}
</style>
