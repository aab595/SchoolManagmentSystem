const mongoose = require('mongoose')
const Professor = require('../models/professor')

/* --------------------------- */
/* **** Professor Services  ***** */

// *Method* Create Professor
const createProfessor = async (professor) => {
    try {
        const p = await Professor.create(professor);
        console.log('Professor created successfully');
        console.log(p);
    } catch (e) {
        console.error(e.message);
    }
};

// *Method* get a Professor
const getAProfessor = async (req, res) => {
    try {
        let professor = await Professor.findById(req.params.id);
        res.json(professor);
    } catch (e) { console.error(e.message); }
};

// *Method* get all Professors
const getAllProfessor = async (req, res) => {
    try {
        let all = await Professor.find();
        res.json(all);
    } catch (e) { console.error(e.message); }
};

// *Method* Delete Professor
const deleteProfessorById = async (id) => {
    try {
        await Professor.findByIdAndDelete(id);
        console.log('Professor deleted successfully');
    } catch (e) {
        console.error(e.message);
    }
};

// *Method* Update Professor
const UpdateProfessorById = async (req, res) => {
    try {
        let inputData = req.body;
        await Professor.findByIdAndUpdate(req.params.id, inputData);
        let newProfessor = await Professor.findById(req.params.id);
        res.json(newProfessor);
        console.log('Professor updated successfully');
    } catch (e) { console.error(e.message); }
};
// *Method* Delete Professor
const deleteProfessorById = async (req, res) => {
    try {
        let p = await Professor.findByIdAndDelete(req.params.id);
        res.json(p)
        console.log('Professor deleted successfully');
    } catch (e) { console.error(e.message); }
}

module.exports = {
    professor : getAProfessor,
    professors : getAllProfessor ,
    createProfessor: createProfessor,
    delete : deleteProfessorById,
    update : UpdateProfessorById 
  
}