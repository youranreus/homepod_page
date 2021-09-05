const express = require('express')
const app = express()

let data = require('./public/profile.json')  //本地json文件数据

let apiRoutes = express.Router();
app.use('/api', apiRoutes)
module.exports = {
    devServer: {
        before(app) {
            app.get('/api/data', (req, res) => {
                res.json({
                    errno: 0,   // 这里是你的json内容
                    data: data
                })
            })
        },
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: null      //设置跨域，即将本文件内任何没有匹配到的静态文件，都指向跨域地址
    },
}