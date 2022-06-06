const { defineConfig } = require('@vue/cli-service')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/dist",
  devServer: {
    compress: true,
    open: true,
    proxy: {
      "/github": {
        target: "https://api.github.com",
        changeOrigin: true,
        pathRewrite: {"^/github": "/"}
      },
      "/tenapi": {
        target: "https://tenapi.cn",
        changeOrigin: true,
        pathRewrite: {"^/tenapi": "/"}
      }
    },
  },
  configureWebpack: (config) => {
    // 将每个依赖包打包成单独的js文件
    let optimization = {
      runtimeChunk: 'single',
      splitChunks: {
        // 你的配置
      },
      minimizer: [new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true
          }
        }
      })]
    }
    Object.assign(config, {
      optimization
    })
  },
})
