const express = require('express')
const { log } = require('../utils/utils')
const Response = require('../models/model')

const thought = express.Router()

thought.get('/', (req, res) => {
    try {
        let data = {
            abc: 123,
        }
        Response.send(res, 200, data)
    } catch (error) {
        log(error)
    }
})

module.exports = thought
