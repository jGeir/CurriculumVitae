const path = require('path');
const fs = require('fs');

module.exports = {
    configureWebpack:{
        performance: {
        hints: false
    },
    optimization: {
        splitChunks: {
            minSize: 10000,
            maxSize: 250000,
        }
      }
    },
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        }
    },
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
      },
  }

  function addStyleResource (rule) {
    rule.use('style-resource')
      .loader('style-resources-loader')
      .options({
        patterns: [
          path.resolve(__dirname, './src/styles/imports.styl'),
        ],
      })
  }