const mongoose = require('mongoose')
const Student = require('../models/student')

/* --------------------------- */
/* **** Student Services  ***** */

// *Method* Create Student
const createStudent = async (student) => {
    try {
        const cl = await Student.create(student);
        console.log('Student created successfully');
        console.log(cl);
    } catch (e) {
        console.error(e.message);
    }
};

// *Method* get a Student
const getAStudent = async (req, res) => {
    try {
        let student = await Student.findById(req.params.id);
        res.json(student);
    } catch (e) { console.error(e.message); }
};

// *Method* get all Students
const getAllStudent = async (req, res) => {
    try {
        let all = await Student.find();
        res.json(all);
    } catch (e) { console.error(e.message); }
};

// *Method* Delete Student
const deleteStudentById = async (id) => {
    try {
        await Student.findByIdAndDelete(id);
        console.log('Student deleted successfully');
    } catch (e) {
        console.error(e.message);
    }
};

// *Method* Update Student
const UpdateStudentById = async (req, res) => {
    try {
        let inputData = req.body;
        await Student.findByIdAndUpdate(req.params.id, inputData);
        let newStudent = await Student.findById(req.params.id);
        res.json(newStudent);
        console.log('Student updated successfully');
    } catch (e) { console.error(e.message); }
};

// *Method* Delete Student
const deleteStudentById = async (req, res) => {
    try {
        let cl = await Student.findByIdAndDelete(req.params.id);
        res.json(cl)
        console.log('Student deleted successfully');
    } catch (e) { console.error(e.message); }
}

module.exports = {
    student : getAStudent,
    students : getAllStudent ,
    createStudent: createStudent,
    delete : deleteStudentById,
    update : UpdateStudentById   
}