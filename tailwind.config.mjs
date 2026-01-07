/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				display: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				zinc: {
					850: '#1f1f22',
					900: '#18181b',
					950: '#0c0c0e', // Dark mode background
				},
				brand: {
					500: '#3b82f6', // Biru idgo
					600: '#2563eb',
				},
				accent: {
					lime: '#bef264',
				}
			},
			animation: {
				'marquee': 'marquee 25s linear infinite',
				'float': 'float 6s ease-in-out infinite',
				'fade-in': 'fadeIn 0.5s ease-out forwards',
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
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