const express      = require('express');
const route        = express.Router();
const controller   = require('../controllers/subjectController');

route.get('/', controller.getAllSubject);
route.post('/create', controller.storeSubject );
route.post('/show/:id', controller.showSubject);
route.post('/:id/update', controller.updateSubject);
route.post('/:id/delete', controller.destroySubject);

module.exports = route