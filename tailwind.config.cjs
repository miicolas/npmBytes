/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/***/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'npm-blue': '#562bff',
				'npm-hover-blue': '#4221c5',
			  },
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	  ],
}
