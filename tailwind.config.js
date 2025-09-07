export default {
	darkMode: 'media',
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['sans-serif']
			},
			gridTemplateColumns: {
				'70/30': '70% 28%'
			},
		},
	},
	plugins: [],
}

module.exports = {
	darkMode: 'media',
}
