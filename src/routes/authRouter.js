const express = require('express')
const route = express.Router()
const controller = require('../controllers/authController')

route.get('/login', controller.login)
route.post('/login', controller.login)

module.exports = route