import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
// svg plugin
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// 以下三项引入是为配置Element-plus自动按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

export function getPluginsList() {
	return [
		vue(),
		svgLoader(),
		createSvgIconsPlugin({
			iconDirs: [resolve(__dirname, './src/assets/svg')]
		}),
		AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [ElementPlusResolver()]
		})
	]
}
