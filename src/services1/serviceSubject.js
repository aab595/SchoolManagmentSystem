const mongoose = require('mongoose')
const Subject = require('../models/subject')

/* --------------------------- */
/* **** Subject Services  ***** */

// *Method* Create Subject
const createSubject = async (sub) => {
    try {
        const s = await Subject.create(sub);
        console.log('Subject created successfully');
        console.log(s);
    } catch (e) {
        console.error(e.message);
    }
};

// *Method* get a Subejct
const getASubject = async (req, res) => {
    try {
        let subject = await Subject.findById(req.params.id);
        res.json(subject);
    } catch (e) { console.error(e.message); }
};

// *Method* get all Subjects
const getAllSubject = async (req, res) => {
    try {
        let all = await Subject.find();
        res.json(all);
    } catch (e) { console.error(e.message); }
};

// *Method* Delete Subject
const deleteSubjectById = async (id) => {
    try {
        await Subject.findByIdAndDelete(id);
        console.log('Subject deleted successfully');
    } catch (e) {
        console.error(e.message);
    }
};

// *Method* Update Subject
const UpdateSubjectById = async (req, res) => {
    try {
        let inputData = req.body;
        await Subject.findByIdAndUpdate(req.params.id, inputData);
        let newSubject = await Subject.findById(req.params.id);
        res.json(newSubject);
        console.log('Subject updated successfully');
    } catch (e) { console.error(e.message); }
};
// *Method* Delete Subject
const deleteSubjectById = async (req, res) => {
    try {
        let s = await Subject.findByIdAndDelete(req.params.id);
        res.json(s)
        console.log('Subject deleted successfully');
    } catch (e) { console.error(e.message); }
}

module.exports = {
    user : getASubject,
    users : getAllSubject ,
    createSubject: createSubject,
    delete : deleteSubjectById,
    update : UpdateSubjectById 
  
}