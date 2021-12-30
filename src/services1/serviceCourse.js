const mongoose = require('mongoose')
const Course = require('../models/course')

/* --------------------------- */
/* **** Course Services  ***** */

// *Method* Create course
const createCourse = async (course) => {
    try {
        const cours = await Course.create(course);
        console.log('Course created successfully');
        console.log(cours);
    } catch (e) {
        console.error(e.message);
    }
};

// *Method* get a Course
const getACourse = async (req, res) => {
    try {
        let course = await Course.findById(req.params.id);
        res.json(course);
    } catch (e) { console.error(e.message); }
};

// *Method* get all Courses
const getAllcourse = async (req, res) => {
    try {
        let all = await Course.find();
        res.json(all);
    } catch (e) { console.error(e.message); }
};

// *Method* Delete Course

const deleteCourseById = async (id) => {
    try {
        await Course.findByIdAndDelete(id);
        console.log('Course deleted successfully');
    } catch (e) {
        console.error(e.message);
    }
};

// *Method* Update Course
const UpdateCourseById = async (req, res) => {
    try {
        let inputData = req.body;
        await Course.findByIdAndUpdate(req.params.id, inputData);
        let newcourse = await Course.findById(req.params.id);
        res.json(newcourse);
        console.log('Course updated successfully');
    } catch (e) { console.error(e.message); }
};
// *Method* Delete Course
const deleteCourseById = async (req, res) => {
    try {
        let cl = await course.findByIdAndDelete(req.params.id);
        res.json(cl)
        console.log('course deleted successfully');
    } catch (e) { console.error(e.message); }
}

module.exports = {
    course : getACourse,
    courses : getAllcourse ,
    createCourse: createCourse,
    delete : deleteCourseById,
    update : UpdateCourseById 
  
}