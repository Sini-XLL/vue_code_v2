const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
   devServer: {
    proxy: {
      '/devApi': {
        target: 'http://localhost:5000/', // 移除 ?sourceType=pc_r_backup
        changeOrigin: true,
        pathRewrite: {
          '^/devApi': '' // 这将移除请求路径中的 /devApi
        }
      }
    }
  }
});
