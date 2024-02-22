<script lang="ts" setup>
import Motion from './utils/motion'
import { toRaw } from 'vue'
import { bg, picture } from './utils/static'
import update from './components/updata.vue'
import { computed } from 'vue'
import { useUserStoreHook } from '@/store/modules/user'
import { useRenderIcon } from '@/components/ReIcon/src/hooks'
import User from '@iconify-icons/ep/user'
import Lock from '@iconify-icons/ep/lock'

const currentPage = computed(() => {
	return useUserStoreHook().currentPage
})
</script>

<template>
	<div class="canvas">
		<img :src="bg" class="bg" />
		<div class="login-container">
			<div class="img">
				<!-- 图片大小为500X380 -->
				<component :is="toRaw(picture)" />
			</div>
			<div class="login-box">
				<div class="login-form">
					<Motion>
						<h2>黑眼圈项目组脚手架</h2>
					</Motion>

					<el-form v-if="currentPage === 0">
						<Motion :delay="100">
							<el-form-item prop="username">
								<el-input :prefix-icon="useRenderIcon(User)" placeholder="请输入用户名 "></el-input>
							</el-form-item>
						</Motion>

						<Motion :delay="150">
							<el-form-item prop="password">
								<el-input
									:prefix-icon="useRenderIcon(Lock)"
									placeholder="请输入密码"
									show-password></el-input>
							</el-form-item>
						</Motion>

						<Motion :delay="250">
							<el-form-item class="flex">
								<div class="flex">
									<el-button
										link
										type="primary"
										:underline="false"
										@click="useUserStoreHook().SET_CURRENTPAGE(1)">
										忘记密码？
									</el-button>
								</div>
							</el-form-item>
						</Motion>

						<Motion :delay="300">
							<el-button class="btn" size="default" type="primary">登录</el-button>
						</Motion>
					</el-form>
					<!-- 忘记密码 -->
					<update v-if="currentPage === 1" />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
@import '@/style/login.css';
</style>

<style lang="scss" scoped>
:deep(.el-input-group__append, .el-input-group__prepend) {
	padding: 0;
}
</style>
