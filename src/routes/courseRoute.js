const express      = require('express');
const route        = express.Router();
const controller   = require('../controllers/courseController');

route.get('/', controller.getAllCourse);
route.post('/create', controller.storeCourse );
route.post('/show/:id', controller.showCourse);
route.post('/:id/update', controller.updateCourse);
route.post('/:id/delete', controller.destroyCourse);

module.exports = route