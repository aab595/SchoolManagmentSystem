const express      = require('express');
const route        = express.Router();
const controller   = require('../controllers/classeController');

route.get('/', controller.getAllClasse);
route.post('/create', controller.storeClasse );
route.post('/show/:id', controller.showClasse);
route.post('/:id/update', controller.updateClasse);
route.post('/:id/delete', controller.destroyClasse);

module.exports = route



