const express = require('express'),
router = express.Router(),
home = require('../controllers/homeController')


router.get('/', home.homeController)


module.exports = router