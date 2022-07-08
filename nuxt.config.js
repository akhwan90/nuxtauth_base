module.exports = {
	/*
	** Headers of the page
	*/
	server: {
		port: '3000',
		host: 'localhost'
	},
	head: {
		title: 'jendelaKu',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'a project' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Raleway&display=swap'
			}
		]
	},
	axios: {
		baseURL: process.env.NUXT_ENV_BASE_URL_API, // Used as fallback if no runtime config is provided
		// proxy: true,
	},
	/*
	proxy: {
		'/api': { target: process.env.NUXT_ENV_BASE_URL_API + '/api', pathRewrite: { '^/api/': '/' } }
	},
	/*
	** Customize the progress bar color
	*/
	loading: { color: '#3B8070' },
	/*
	** Build configuration
	*/
	build: {
		/*
		** Run ESLint on save
		*/
		extend (config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	},
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/auth-next',
		'bootstrap-vue/nuxt',
		'@nuxtjs/toast',
	],
	bootstrapVue: {
		// icons: true
		components: [
			'BIcon',
			'BIconArrowLeftCircle',
			'BIconKeyFill',
			'BIconPeopleFill',
			'BIconTable',
			'BIconSearch',
			'BIconPlusCircle',
			'BIconPatchMinus',
			'BIconPencil',
			'BIconCheck',
			'BIconSearch',
			'BIconChat',
			'BIconEnvelope',
			'BIconFilePerson',
			'BIconFileText',
			'BIconBriefcase',
			'BIconGeoAlt',
			'BIconRss',
			'BIconCollectionPlay',
			'BIconCameraVideo',
			'BIconCalendarCheck',
			'BIconPatchPlus',
			'BIconInbox',
			'BIconPin',
			'BIconQuestionCircle',
			'BIconSlack',
			'BIconCartCheck',
			'BIconBriefcase',
			'BIconMap',
			'BIconImage',
			'BIconWrench',
			'BIconCreditCard',
			'BIconXCircle',
			'BIconYoutube',
			'BIconArrowRightCircle',
			'BIconBank',
			'BIconPersonCircle',

			'BPagination',
			'BInputGroup',
			'BFormInput',
			'BInputGroupAppend',
			'BButton',
			'BDropdownItem',
			'BNavItemDropdown',
			'BNav',
			'BCard',
			'BCardBody',
			'BCardTitle',
			'BListGroup',
			'BListGroupItem',
			'BModal',
		]
	},
	auth: {
		strategies: {
			local: {
				token: {
					property: 'token',
					global: true,
					// required: true,
					// type: 'Bearer'
				},
				user: {
					property: 'user',
					// autoFetch: true
				},
				endpoints: {
					login: { 
						url: '/api/login', 
						method: 'post' 
					},
					logout: { 
						url: '/api/logout', 
						method: 'get' 
					},
					user: { 
						url: '/api/admin/get_user', 
						method: 'get',
						propertyName: false
					}
				}
			}
		},
		redirect: {
			logout: '/'
		},
		watchLoggedIn: true,
		rewriteRedirects: true
	},
	plugins: [
		{ src: '~/plugins/notifications-client', ssr: false },
		{ src: '~/plugins/aos.js', ssr: false },
		{ src: '~/plugins/carousel-slider.js', ssr: false, components: true },
	],
	toast: {
		position: 'top-right',
		duration: 2000
	},
	publicRuntimeConfig: {
		baseURL: process.env.NUXT_ENV_BASE_URL_APP,
		baseURL_API: process.env.NUXT_ENV_BASE_URL_API,
	},
	privateRuntimeConfig: {
		baseURL: process.env.NUXT_ENV_BASE_URL_APP,
		baseURL_API: process.env.NUXT_ENV_BASE_URL_API,
	},
	router: {
		base: '/sso_new/'
	}
}

