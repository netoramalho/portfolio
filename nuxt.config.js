export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Neto Ramalho | Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Checkout my portfolio!' },
      { name: 'theme-color', content: '#ffffff' },
      { property: 'og:image', content: '/ogimage.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/icons/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/icons/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/icons/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/icons/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/icons/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/icons/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/icons/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/icons/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-icon-180x180.png' },
      { rel: 'icon', type: 'type', sizes: '192x192', href: '/icons/android-icon-192x192.png' },
      { rel: 'icon', type: 'type', sizes: '32x32', href: '/icons/favicon-32x32.png' },
      { rel: 'icon', type: 'type', sizes: '96x96', href: '/icons/favicon-96x96.png' },
      { rel: 'icon', type: 'type', sizes: '16x16', href: '/icons/favicon-16x16.png' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/aos', mode: 'client' },
    { src: '@/plugins/visibility', mode: 'client' }
  ],

  purgeCSS: {
    whitelist: ['aos-init', 'aos-animate', 'data-aos-delay', 'data-aos-duration', 'fade-up', 'zoom-in']
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxt/content',
    '@nuxtjs/google-fonts'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  // Storybook Options
  storybook: {
  },

  // Google Fonts
  googleFonts: {
    families: {
      'DM+Sans': {
        wght: [400, 500, 700]
      }
    },
    display: 'swap'
  }
}
