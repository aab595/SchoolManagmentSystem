const mongoose = require('mongoose')
const Note = require('../models/note')

/* --------------------------- */
/* **** Note Services  ***** */

// *Method* Create Note
const createNote = async (note) => {
    try {
        const n = await Note.create(note);
        console.log('Note created successfully');
        console.log(n);
    } catch (e) {
        console.error(e.message);
    }
};

// *Method* get a Note
const getANote = async (req, res) => {
    try {
        let note = await Note.findById(req.params.id);
        res.json(note);
    } catch (e) { console.error(e.message); }
};

// *Method* get all Notes
const getAllNote = async (req, res) => {
    try {
        let all = await Note.find();
        res.json(all);
    } catch (e) { console.error(e.message); }
};

// *Method* Delete Note

const deleteNoteById = async (id) => {
    try {
        await Note.findByIdAndDelete(id);
        console.log('Note deleted successfully');
    } catch (e) {
        console.error(e.message);
    }
};

// *Method* Update Note
const UpdateNoteById = async (req, res) => {
    try {
        let inputData = req.body;
        await Note.findByIdAndUpdate(req.params.id, inputData);
        let newNote = await Note.findById(req.params.id);
        res.json(newNote);
        console.log('Note updated successfully');
    } catch (e) { console.error(e.message); }
};
// *Method* Delete Note
const deleteNoteById = async (req, res) => {
    try {
        let n = await Note.findByIdAndDelete(req.params.id);
        res.json(n)
        console.log('Note deleted successfully');
    } catch (e) { console.error(e.message); }
}

module.exports = {
    note : getANote,
    notes : getAllNote ,
    createNote: createNote,
    delete : deleteNoteById,
    update : UpdateNoteById 
  
}