const express      = require('express');
const route        = express.Router();
const controller   = require('../controllers/timeTablesController');

route.get('/', controller.getAllTimeTables);
route.post('/create', controller.storeTimeTables );
route.post('/show/:id', controller.showTimeTables);
route.post('/:id/update', controller.updateTimeTables);
route.post('/:id/delete', controller.destroyTimeTables);

module.exports = route