const express = require('express')
const route = express.Router()
const controller = require('../controllers/authController')

route.post('/login', controller.login)
route.post('/refresh-token', controller.refreshToken)
route.post('/logout', controller.logout)

module.exports = route