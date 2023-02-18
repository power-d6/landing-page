/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	safelist: [
		{
			pattern: /text-(.*)-([1-8]00)/,
			variants: ['hover', 'dark'],
		},
	],
	plugins: [],
}
