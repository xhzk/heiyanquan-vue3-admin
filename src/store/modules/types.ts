export type appType = {
	sidebar: {
		opened: boolean
		// 判断是否手动点击Collapse
		isClickCollapse: boolean
	}
	device: string
}

export type userType = {
	currentPage?: number
}
