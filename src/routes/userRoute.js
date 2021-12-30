const express      = require('express');
const route        = express.Router();
const controller   = require('../controllers/userController');
const authenticate = require('../middleware/Authentication')


route.get('/', authenticate, controller.getAllUser);
route.post('/create', controller.storeUser);
route.post('/show/:id', controller.showUser);
route.post('/:id/update', controller.updateUser);
route.post('/:id/delete', controller.destroyUser);

route.get('/students', controller.getAllStudent);
route.post('/students/create', controller.storeStudent);
route.post('/students/show/:id', controller.showStudent);
route.post('/students/:id/update', controller.updateStudent);
route.post('/students/:id/delete', controller.destroyStudent);

route.get('/teachers', controller.getAllTeacher);
route.post('/teachers/create', controller.storeTeacher);
route.post('/teachers/show/:id', controller.showTeacher);
route.post('/teachers/:id/update', controller.updateTeacher);
route.post('/teachers/:id/delete', controller.destroyTeacher);

route.get('/staffs', controller.getAllStaff);
route.post('/staffs/create', controller.storeStaff);
route.post('/staffs/show/:id', controller.showStaff);
route.post('/staffs/:id/update', controller.updateStaff);
route.post('/staffs/:id/delete', controller.destroyStaff);


module.exports = route
