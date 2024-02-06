module.exports = {
	extends: ['@commitlint/config-conventional'],
	// 校验规则
	rules: {
		'type-enum': [
			2,
			'always',
			[
				'feat', //增加新功能
				'fix', //修复问题/BUG
				'perf', //优化/性能提升
				'style', //代码风格相关无影响运行结果的
				'docs', //文档/注释
				'test', //测试相关
				'refactor', //重构
				'build', //构建系统或外部依赖项的更改
				'ci', //持续集成
				'chore', //杂项，不涉及源代码或测试文件的更改
				'revert', //撤销修改
				'wip', //开发中
				'workflow', //工作流改进
				'types', //类型定义文件更改
				'release' //发布新版本
			]
		],
		'type-case': [0],
		'type-empty': [0],
		'scope-empty': [0],
		'scope-case': [0],
		'subject-full-stop': [0, 'never'],
		'subject-case': [0, 'never'],
		'header-max-length': [0, 'always', 72]
	}
}
