const { log } = require('../utils/utils')

const Response = class {
    constructor(res, status, data) {
        let response = null
        if (status === 200) {
            response = Object.assign(
                { data },
                {
                    code: status,
                    message: '成功',
                },
            )
        }
        res.send(response)
    }

    static send(res, status, data) {
        return new Response(res, status, data)
    }
}

module.exports = Response
