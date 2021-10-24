module.exports = {
  /*
  ** Headers of the page
  */
  server: {
    port: '3005',
    host: 'localhost'
  },
  head: {
    title: 'TTS - Trouble Ticketing System',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'a project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.0/css/bootstrap.min.css' }
    ]
  },
  axios: {
    baseURL: 'http://sambat.test', // Used as fallback if no runtime config is provided
    proxy: true,
  },
  proxy: {
    '/api': { target: 'http://sambat.test/api', pathRewrite: { '^/api/': '/' } }
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
    '@nuxtjs/auth-next'
  ],
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
          login: { url: '/api/login', method: 'post' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: '/api/user/detil', method: 'get' }
        }
      }
    }
  },
  plugins: [
    { src: '~/plugins/notifications-client', ssr: false }
  ]
}

