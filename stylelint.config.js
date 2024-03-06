module.exports = {
	root: true,
	extends: [
		'stylelint-config-standard', // 配置stylelint拓展插件
		'stylelint-config-html/vue', // 配置 vue 中 template 样式格式化
		'stylelint-config-recess-order' // 配置stylelint css属性书写顺序插件
	],
	plugins: ['stylelint-order', 'stylelint-prettier', 'stylelint-scss'],
	overrides: [
		{
			files: ['**/*.(css|html|vue)'],
			customSyntax: 'postcss-html'
		},
		{
			files: ['*.scss', '**/*.scss'],
			customSyntax: 'postcss-scss',
			extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-vue/scss']
		}
	],
	rules: {
		'selector-class-pattern': null, // 关闭强制选择器类名的格式
		'no-descending-specificity': null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
		'scss/dollar-variable-pattern': null, // 允许 SCSS 变量的命名采用任何模式，不做强制规定。
		'selector-pseudo-class-no-unknown': [
			// 不允许未知的选择器
			true,
			{
				ignorePseudoClasses: ['deep', 'global']
			}
		],
		'selector-pseudo-element-no-unknown': [
			true,
			{
				ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted']
			}
		],
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'tailwind',
					'apply',
					'variants',
					'responsive',
					'screen',
					'function',
					'if',
					'each',
					'include',
					'mixin',
					'use'
				]
			}
		],
		'rule-empty-line-before': [
			'always',
			{
				ignore: ['after-comment', 'first-nested']
			}
		],
		'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
		'order/order': [
			[
				'dollar-variables',
				'custom-properties',
				'at-rules',
				'declarations',
				{
					type: 'at-rule',
					name: 'supports'
				},
				{
					type: 'at-rule',
					name: 'media'
				},
				'rules'
			],
			{ severity: 'warning' }
		]
	},
	ignoreFiles: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx']
}
