const express      = require('express');
const route        = express.Router();
const controller   = require('../controllers/classroomController');

route.get('/', controller.getAllClassroom);
route.post('/create', controller.storeClassroom );
route.post('/show/:id', controller.showClassroom);
route.post('/:id/update', controller.updateClassroom);
route.post('/:id/delete', controller.destroyClassroom);

module.exports = route