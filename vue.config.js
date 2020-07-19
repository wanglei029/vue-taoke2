module.exports = {
  configureWebpack: {
    devServer: {
      port: 8080,
      open: true,
      proxy: {
        '/api/getGoodsDetail': {
          target: 'https://openapi.dataoke.com/api/goods/get-goods-details',
          ws: true,
          changeOrigin: true,
          pathRewrite: {
            '^/api/getGoodsDetail': ''
          }
        },
        '/foo': {
          target: '<other_url>'
        }
      }
    },
    resolve: {
      alias: {
        assets: '@/assets',
        stylus: '@/assets/stylus',
        components: '@/components',
        common: '@/common',
        router: '@/router',
        views: '@/views',
        store: '@/store',
        api: '@/api'

      }
    }
  },
  chainWebpack (config) {
    config.module
      .rule('css')
      .test(/\.css$/)
      .oneOf('vue')
      .resourceQuery(/\?vue/)
      .use('px2rem')
      .loader('px2rem-loader')
      .options({
        remUnit: 37.5 // 1rem=多少像素
      })
  }

}
