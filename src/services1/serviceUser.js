const mongoose = require('mongoose')
const User = require('../models/user')

/* --------------------------- */
/* ***** User Services  ***** */

// *Method* Create User
const createUser = async (user) => {
    try {
        const u = await User.create(user);
        console.log('User created successfully');
        console.log(u);
    } catch (e) {
        console.error(e.message);
    }
};

// *Method* get a user
const getAUser = async (req, res) => {
    try {
        let user = await User.findById(req.params.id);
        res.json(user);
    } catch (e) { console.error(e.message); }
};

// *Method* get all user
const getAllUsers = async (req, res) => {
    try {
        let all = await User.find();
        res.json(all);
    } catch (e) { console.error(e.message); }
};

// *Method* Delete user
const deleteUserById = async (id) => {
    try {
        await User.findByIdAndDelete(id);
        console.log('User deleted successfully');
    } catch (e) {
        console.error(e.message);
    }
};

// *Method* Update User
const UpdateUserById = async (req, res) => {
    try {
        let inputData = req.body;
        await User.findByIdAndUpdate(req.params.id, inputData);
        let newUser = await User.findById(req.params.id);
        res.json(newUser);
        console.log('User updated successfully');
    } catch (e) { console.error(e.message); }
};
// *Method* Delete User
const deleteUserById = async (req, res) => {
    try {
        let u = await User.findByIdAndDelete(req.params.id);
        res.json(u)
        console.log('User deleted successfully');
    } catch (e) { console.error(e.message); }
}

module.exports = {
    user : getAUser,
    users : getAllUsers ,
    createUser: createUser,
    delete : deleteUserById,
    update : UpdateUserById 
  
}