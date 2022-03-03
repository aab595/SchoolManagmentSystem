const express      = require('express');
const route        = express.Router();
const controller   = require('../controllers/gradeController');

route.get('/', controller.getAllGrade);
route.post('/create', controller.storeGrade );
route.post('/show/:id', controller.showGrade);
route.post('/:id/update', controller.updateGrade);
route.post('/:id/delete', controller.destroyGrade);

module.exports = route