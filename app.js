const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const history = require('connect-history-api-fallback')

const { log } = require('./utils/utils')
const app = express()

const assets = __dirname + '/dist'

// app.use(
//     history({
//         rewrites: [
//             {
//                 from: /^\/api\/.*$/,
//                 to: function (context) {
//                     return context.parsedUrl.path
//                 },
//             },
//         ],
//     }),
// )

// 静态资源
app.use(express.static(assets))

//  json 解析
app.use(bodyParser.json())
//  跨域
app.use(cors())

//  路由

app.get('/api', (req, res) => {
    log(1)
    try {
        // res.sendFile(__dirname + '/index.html')
        res.status('200').json({
            data: '123',
        })
    } catch (error) {
        log(error)
    }
})

//  运行
const __main = (port = 3030, host = '127.0.0.1') => {
    app.listen(port, host, () => {
        log(`Listening server at http://${host}:${port}`)
    })
}

if (require.main === module) {
    __main()
}
