/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Plus Jakarta Sans', 'sans-serif'],
			},
			// Definisi warna custom BRAND ada di sini
			colors: {
				zinc: {
					850: '#1f1f22',
					900: '#18181b',
					950: '#09090b',
				},
				brand: {
					500: '#3b82f6', // Sama dengan blue-500
					600: '#2563eb', // Sama dengan blue-600
				}
			},
			animation: {
				'fade': 'fadeIn 0.5s ease-out forwards',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				}
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}