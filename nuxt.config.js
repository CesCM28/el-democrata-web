export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'El Demócrata',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'title', content: 'El Demócrata' },
      { name: 'description', content: 'Somos un periódico digital enfocado en lo político con sede en la ciudad de Chihuahua' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'http://eldemocrata.mx/' },
      { property: 'og:title', content: 'El Demócrata' },
      { property: 'og:description', content: 'Somos un periódico digital enfocado en lo político con sede en la ciudad de Chihuahua' },
      { property: 'og:image', content: 'http://eldemocrata.mx/favicon.png' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'http://eldemocrata.mx/' },
      { property: 'twitter:title', content: 'El Demócrata' },
      { property: 'twitter:description', content: 'Somos un periódico digital enfocado en lo político con sede en la ciudad de Chihuahua' },
      { property: 'twitter:image', content: 'http://eldemocrata.mx/favicon.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/variables',
    '~assets/scss/colors',
    '~assets/scss/globals',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',
    '@nuxt/http',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: ['./assets/scss/*.scss']
  },
  http: {
    baseURL: 'http://admin.eldemocrata.mx/api'
    // baseURL: 'http://eldemocrata.test/api'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {} // blah blah
  },
  server: {
    host: "0.0.0.0"
  }
}
