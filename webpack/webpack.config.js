const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'my-first-webpack.bundle.js'
    },
    module: {
        rules: [
          { test: /\.txt$/, use: 'raw-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'})
    ],
    
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    }
    
  };
