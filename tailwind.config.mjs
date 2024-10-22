/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
      // Using modern `rgb`
      primary: 'rgb(var(--color-primary))',
      secondary: 'rgb(var(--color-secondary))',

      // Using modern `hsl`
      primary: 'hsl(var(--color-primary))',
      secondary: 'hsl(var(--color-secondary))',

      // Using legacy `rgba`
      primary: 'rgba(var(--color-primary), 1)',
      secondary: 'rgba(var(--color-secondary), 1)',
    }
	},
	plugins: [],
}
