import { h, defineComponent, withDirectives, resolveDirective } from 'vue'

export default defineComponent({
	name: 'Motion',
	props: {
		delay: {
			type: Number,
			default: 50
		}
	},
	setup(props, { slots }) {
		const { delay } = props
		const motion = resolveDirective('motion')

		return () => {
			return withDirectives(
				h(
					'div',
					{},
					{
						default: () => slots.default && slots.default()
					}
				),
				[
					[
						motion,
						{
							initial: { opacity: 0, y: 100 },
							enter: {
								opacity: 1,
								y: 0,
								transition: {
									delay
								}
							}
						}
					]
				]
			)
		}
	}
})
