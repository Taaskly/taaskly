import { fileURLToPath, URL } from 'node:url'
import eslintPlugin from 'vite-plugin-eslint'

export default {
	ssr: false,
	target: 'static',
	app: {
		head: {
		title: 'Taaskly',
		htmlAttrs: { lang: 'en' },
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				'http-equiv': 'Content-Security-Policy',
				content: 'upgrade-insecure-requests'
			},
			{
				hid: 'description',
				name: 'description',
				content: 'The best place to get tasks done and make extra cash by the side'
			},
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
			{
				href: 'https://fonts.googleapis.com',
				rel: 'preconnect'
			},
			{
				href: 'https://fonts.gstatic.com',
				rel: 'preconnect'
			},
			{
				href: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700&display=swap',
				rel: 'stylesheet'
			}
		]
	}
	},

	alias: {
		'@': './src'
	},
	modules: ['@vueuse/nuxt', '@nuxtjs/tailwindcss'],

	css: ['/src/assets/css/main.css'],
	components: [
		'@/components',
		{ path: '@/components/core', extensions: ['vue'] }
	],
 tailwindcss: {
    cssPath: '@/assets/css/main.css'
  },
	build: {
		postcss: {
			postcssOptions: require('./postcss.config.js')
		}
	},
	plugins: ['@/plugins/draggable.ts'],
	dir: {
		layouts: './src/layouts',
		pages: './src/pages',
		middleware: './src/middleware'
	},
	vite: {
		plugins: [eslintPlugin({ useEslintrc: true })],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url))
			}
		}
	}
}
