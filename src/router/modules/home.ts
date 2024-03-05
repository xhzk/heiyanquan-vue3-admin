const Layout = () => import('@/layout/index.vue')
export default {
	path: '/',
	name: 'home',
	redirect: '/home',
	component: Layout,
	meta: {
		rank: 0,
		title: ''
	},
	children: [
		{
			path: '/home',
			component: () => import('@/views/home/index.vue'),
			meta: {
				isShow: true,
				title: '首页',
				icon: 'home'
			}
		}
	]
} as RouteConfigsTable
