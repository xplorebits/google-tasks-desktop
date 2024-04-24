export default defineNuxtConfig({
	app:{
		head: {
			title: 'Invoice',
			htmlAttrs: {
			  lang: 'pl',
			},
			link: [
			  { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
			  { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
			  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins' },
			  { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' } 
			],
		},
	},
	modules: [
		'@nuxtjs/tailwindcss',
	],
	ssr: false,
})