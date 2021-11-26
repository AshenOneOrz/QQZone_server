const express = require('express')
const add = express.Router()

add.get('/', (request, response) => {
    if (request.query.admin === 'zelda') {
        response.sendFile('static/add/add.html')
    } else {
        response.json('无权访问')
    }
})

module.exports = add