const { defineConfig } = require("@vue/cli-service")
const TerserPlugin = require("terser-webpack-plugin")
const path = require("path")

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  publicPath: "/dist",
  devServer: {
    compress: true,
    open: true,
    proxy: {
      "/github": {
        target: "https://api.github.com",
        changeOrigin: true,
        pathRewrite: { "^/github": "/" },
      },
      "/tenapi": {
        target: "https://tenapi.cn",
        changeOrigin: true,
        pathRewrite: { "^/tenapi": "/" },
      },
    },
  },
  configureWebpack: (config) => {
    // 将每个依赖包打包成单独的js文件
    let optimization = {
      runtimeChunk: "single",
      splitChunks: {
        // 你的配置
      },
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
              drop_debugger: true,
            },
          },
        }),
      ],
    }
    Object.assign(config, {
      resolve: {
        alias: {
          "@js": path.resolve(__dirname, "src/assets/js/"),
          "@style": path.resolve(__dirname, "src/assets/style/"),
          "@common": path.resolve(__dirname, "src/components/common/"),
          "@layout": path.resolve(__dirname, "src/components/layout/"),
          "@pages": path.resolve(__dirname, "src/components/pages/"),
          "@api": path.resolve(__dirname, "src/request/api.js"),
        },
      },
      optimization,
    })
  },
})
