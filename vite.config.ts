import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import svgLoader from 'vite-svg-loader'

// 以下三项引入是为配置Element-plus自动按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// vite官网
// https://vitejs.dev/config/

export default defineConfig({
	plugins: [
		vue(),
		svgLoader(),
		AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [ElementPlusResolver()]
		})
	],
	resolve: {
		alias: {
			'@': resolve('src')
		}
	},
	base: './', //打包路径
	server: {
		port: 4000, // 服务端口号
		open: false, // 服务启动时是否自动打开浏览器
		cors: true // 允许跨域
	}
})
