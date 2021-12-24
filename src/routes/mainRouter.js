const express = require('express');
const route = express.Router();

const controller = require('../controllers/mainController');


route.get('/', controller.home)
route.get('/news', controller.news)
route.get('/mission', controller.mission)
route.get('/contact', controller.contact)


/**
 * @description for authenticate
 * @method GET /login
 */
route.get('/login', controller.login)


module.exports = route