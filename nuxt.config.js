require('dotenv').config()

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'yoitabio blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/config/_basic.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/apollo',
    '@nuxtjs/markdownit',
    '@nuxtjs/style-resources'
  ],
  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js'
    }
  },
  markdownit: {
    injected: true,
    breaks: true
  },
  styleResources: {
    scss: [
      '~/assets/config/_typography.scss',
      '~/assets/config/_var.scss',
    ]
  },

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    babel: {
      plugins: [
        '@babel/plugin-proposal-optional-chaining'
      ]
    }
  },
  env: {
    GRAPHCMS_API: process.env.GRAPHCMS_API    
  }
}
