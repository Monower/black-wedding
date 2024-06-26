/** @type {import('tailwindcss').Config} */
const plugin 		= require( 'tailwindcss/plugin' )
const defaultTheme 	= require( 'tailwindcss/defaultTheme' )

export default {
	content: [ "./public/index.html", "./src/**/*.{js,ts,jsx,tsx}" ],
	theme: {
		extend: {
			colors: {
				brandBlack: "#151623",
				gray2: "#525252",
				brandBrown: "#BC7155",

			},
			screens: {
				'2xl': '1440px',
			},
			textShadow: {
				sm: '0 1px 2px var(--tw-shadow-color)',
				DEFAULT: '0 2px 4px var(--tw-shadow-color)',
				lg: '0 8px 16px var(--tw-shadow-color)',
			},
		},
		fontFamily: {
			'mona-sans': [ 'mona-sans', 'sans-serif' ],
			// 'sans': [ '"Mona Sans"', ...defaultTheme.fontFamily.sans ],
		}
	},
	plugins: [
		plugin( function ( { matchUtilities, theme } )
		{
			matchUtilities(
				{
					'text-shadow': ( value ) => ( {
						textShadow: value,
					} ),
				},
				{ values: theme( 'textShadow' ) }
			)
		} ),
	],
};