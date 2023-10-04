const { User } = require('../models')

const authorizeAdmin = async function (req, res, next) {
    if (req.user.role === 'admin') {
        next()
    } else {
        next({ name: 'forbidden' })
    }
}

module.exports = { authorizeAdmin }