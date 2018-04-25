const fs = require('fs')
const http = require('http')
const querystring = require('querystring')
const Mock = require('mockjs')

module.exports = function (app) {
    // 商品列表的接口
    const options = {
        hostname: 'www.lb717.com',
        port: 80,
        path: '/mall/index/getGoodsChannel',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        }
    };
    app.post('/mall/index/getGoodsChannel', function (req, res) {
        let data = '';
        let request = http.request(options, response => {
            response.setEncoding('utf8');
            response.on('data', (chunk) => {
                data += chunk
            });
            response.on('end', () => {
                res.end(JSON.stringify(data));
            });
        })
        request.write(querystring.stringify(req.body))
        request.end()
    });

    // 获取分类列表
    app.get('/mobile/Catagory/catagorySon', function (req, res) {
        let data = fs.readFileSync('catagory.json', {encoding:"utf-8"})
        data = JSON.parse(data)
        data.list.map((item, index) => {
            if (index + 1 == req.query.sonid) {
                res.json(JSON.stringify(item))
            }
        })
    })
}