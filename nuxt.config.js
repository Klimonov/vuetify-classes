export default {
  target: 'static',
  head: {
    titleTemplate: 'Vuetify Classes',
    title: 'Vuetify Classes',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'All vuetify classes in one place' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'name', itemscope: true, itemtype: 'http://schema.org/WebPage', content: 'Vuetify Classes' },
      { name: 'description', itemscope: true, itemtype: 'http://schema.org/WebPage', content: 'All vuetify classes in one place' },
      { name: 'image', itemscope: true, itemtype: 'http://schema.org/WebPage', content: '/meta.png' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:url', content: 'https://vuetify-classes.netlify.app/' },
      { property: 'og:type', content: 'Vuetify Classes' },
      { property: 'og:title', content: 'Vuetify Classes' },
      { property: 'og:description', content: 'All vuetify classes in one place' },
      { property: 'og:image', content: '/meta.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Vuetify Classes' },
      { name: 'twitter:description', content: 'All vuetify classes in one place' },
      { name: 'twitter:image', content: 'summary_large_image' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
