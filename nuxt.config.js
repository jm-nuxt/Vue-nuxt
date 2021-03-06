module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'starter',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  modules: [
    ['@nuxtjs/proxy']
  ],
  proxy: {
    '/v2': {
      target: 'https://api.douban.com',
      ws: false,
      // changeOrigin: true
    }
  },

  /*
   ** Global CSS
   */
  css: ['~/assets/css/main.css', '~/node_modules/element-ui/lib/theme-default/index.css'],
  /*
   ** Add axios globally
   */
  plugins: ['~plugins/element-ui'],
  build: {
    vendor: ['axios', 'element-ui'],

    babel: {
      plugins: [
        ['component', [{
          libraryName: 'element-ui',
          styleLibraryName: 'theme-default'
        }]]
      ]
    },

    loaders: [{
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ],
    postcss: [
      require('autoprefixer')({
        browsers: ['last 3 versions']
      })
    ]
  },


  /*
   ** Run ESLINT on save
   */
  extend(config, ctx) {
    if (ctx.isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      })
    }
  }
}
