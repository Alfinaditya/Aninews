module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				main: '#E46295',
				secondary: '#FFD4E5',
				transparant: '#D0D0D0',
				pink: {
					250: '#CDB9B9',
				},
				blue: {
					primary: '#5986FB',
				},
			},
			width: {
				half: '40%',
			},
			margin: {
				13: '3.3rem',
			},
			fontFamily: {
				quicksand: ['Quicksand', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
			},
			borderWidth: {
				1: '1px',
			},
			spacing: {
				120: '500px',
			},
		},
	},
	variants: {
		extend: {
			fontWeight: ['hover'],
		},
	},
	plugins: [],
};
