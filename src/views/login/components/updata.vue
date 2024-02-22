<script setup lang="ts">
import Motion from '../utils/motion'
import { useUserStoreHook } from '@/store/modules/user'
import { useRenderIcon } from '@/components/ReIcon/src/hooks'
import Lock from '@iconify-icons/ep/lock'
import Key from '@iconify-icons/ep/key'
import Message from '@iconify-icons/ep/message'

function onBack() {
	useUserStoreHook().SET_CURRENTPAGE(0)
}
</script>

<template>
	<el-form size="large">
		<Motion>
			<el-form-item prop="email">
				<el-input :prefix-icon="useRenderIcon(Message)" placeholder="请输入邮箱" clearable />
			</el-form-item>
		</Motion>

		<Motion :delay="100">
			<el-form-item prop="verifyCode">
				<div class="w-full flex justify-between">
					<el-input clearable :prefix-icon="useRenderIcon(Key)" placeholder="请输入验证码" />
					<el-button></el-button>
				</div>
			</el-form-item>
		</Motion>

		<Motion :delay="150">
			<el-form-item prop="password">
				<el-input clearable :prefix-icon="useRenderIcon(Lock)" placeholder="密码" show-password />
			</el-form-item>
		</Motion>

		<Motion :delay="200">
			<el-form-item prop="repeatPassword">
				<el-input
					clearable
					:prefix-icon="useRenderIcon(Lock)"
					placeholder="确定密码"
					show-password />
			</el-form-item>
		</Motion>

		<Motion :delay="250">
			<el-form-item>
				<el-button class="w-full" size="default" type="primary">确定</el-button>
			</el-form-item>
		</Motion>

		<Motion :delay="300">
			<el-form-item>
				<el-button class="w-full" size="default" @click="onBack">返回</el-button>
			</el-form-item>
		</Motion>
	</el-form>
</template>
