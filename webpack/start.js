const express = require('express')
const app = express()
const webpackConfig = require('./webpack.config.js')
const webpack = require('webpack')
const compiler = webpack(webpackConfig)
const webpackDevMiddleware = require('webpack-dev-middleware')
app.use(webpackDevMiddleware(compiler, { 
    //绑定中间件的公共路径,与webpack配置的路径相同
    publicPath: webpackConfig.output.publicPath,
    quiet: true  //向控制台显示任何内容 
}))

app.get('/',(req,res)=>{res.send('hello word')})
app.listen(3000,()=>console.log('app listening on 3000!'))
