<script lang="ts" setup>
import { chartData } from './data'
import ReCol from '@/components/ReCol'
</script>
<template>
	<div>
		<el-card shadow="never">
			<template #header>
				<div class="card-header">
					<span>Card name</span>
					<div class="extra">
						<el-button></el-button>
						<el-button></el-button>
						<el-button></el-button>
					</div>
				</div>
			</template>
		</el-card>
		<el-row :gutter="24">
			<re-col
				v-for="(item, index) in chartData"
				:key="index"
				class="mb-[18px]"
				:value="6"
				:md="12"
				:sm="12"
				:xs="24"
				:lg="6"
				:xl="4">
				<el-card class="line-card" shadow="never"></el-card>
			</re-col>
		</el-row>
	</div>
</template>

<style lang="scss" scoped>
.card-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
