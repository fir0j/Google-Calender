module.exports = {
	theme: {
		// refer to tailwind-full.config.js or tailwind documentation for exact key name or syntax like colors  in case you don't know
		extend: {
			colors: {
				'brand-blue': '#1992d4'
			},
			spacing: {
				'72': '18rem'
			},
			screens: {
				portrait: '320px',
				landscape: '480px'
			}
		}
	},
	variants: {
		backgroundColor: [ 'responsive', 'hover', 'focus', 'active' ]
	},
	plugins: []
};
