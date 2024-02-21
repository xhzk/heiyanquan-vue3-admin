<script lang="ts" setup>
import logo from '@/assets/svg/logo.svg?component'
const props = defineProps({
	collapse: Boolean
})
const maintitle = 'vue3项目脚手架'
const subtitle = 'DARK CRICLES TEAM'
</script>

<template>
	<div class="sidebar-logo-container" :class="{ collapses: props.collapse }">
		<transition name="sidebarLogoFade">
			<router-link v-if="props.collapse" key="props.collapse" class="sidebar-logo-link" to="/">
				<logo class="sidebar-collapse-logo" />
			</router-link>
			<router-link v-else key="expand" class="sidebar-logo-link" to="/">
				<logo class="sidebar-logo" />
				<div class="titlebox">
					<div class="sidebar-maintitle">{{ maintitle }}</div>
					<div class="sidebar-subtitle">{{ subtitle }}</div>
				</div>
			</router-link>
		</transition>
	</div>
</template>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
	transition: opacity 1.5s;
}
.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
	opacity: 0;
}
.sidebar-logo-container {
	width: 100%;
	height: 75px;
	background: #fff;
	// text-align: center;
	overflow: hidden;
	& .sidebar-logo-link {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		& .sidebar-logo {
			// background-color: red;
			margin-right: 10px;
			width: 45px;
			height: 45px;
			fill: #0144ea;
		}
		& .sidebar-collapse-logo {
			width: 38px;
			height: 38px;
			fill: #0144ea;
		}
		& .titlebox {
			// background-color: #0144ea;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;

			& .sidebar-maintitle {
				// background-color: blue;
				color: #000000;
				font-weight: 800;
				font-size: 16px;
				font-family:
					Avenir,
					Helvetica Neue,
					Arial,
					Helvetica,
					sans-serif;
			}
			& .sidebar-subtitle {
				// background-color: blue;
				color: #7c7c7c;
				font-weight: 600;
				font-size: 11.4px;
				font-family:
					Avenir,
					Helvetica Neue,
					Arial,
					Helvetica,
					sans-serif;
			}
		}
	}
}
</style>
