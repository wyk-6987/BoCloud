const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭eslint检查
  publicPath:process.env.NODE_ENV=="production" ? './' : "/",
  runtimeCompiler: true, //关键点在这,
  devServer:{
    open:true,
    port:9000,
    https: false,
    proxy:{
      '/api':{
        target: 'http://47.97.178.65:3006',
        changeOrigin: true,
        // secure: false,
        ws: true,
        // pathRewrite:{
        //   '^/api':'/'
        // }
      },
      // '/av':{
      //   changeOrigin: true,
      //   secure: false,
      //   target: 'http://47.97.178.65:3006',
      //   pathRewrite:{
      //     '^/av':'/'
      //   }
      // }
    }
  }
})
