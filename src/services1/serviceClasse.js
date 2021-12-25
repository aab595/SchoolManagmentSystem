const mongoose = require('mongoose')
const Classe = require('../models/classe')

/* --------------------------- */
/* **** Classe Services  ***** */

// *Method* Create Classe
const createClasse = async (classe) => {
    try {
        const cl = await Classe.create(classe);
        console.log('Classe created successfully');
        console.log(cl);
    } catch (e) {
        console.error(e.message);
    }
};

// *Method* get a Classe
const getAClasse = async (req, res) => {
    try {
        let classe = await Classe.findById(req.params.id);
        res.json(classe);
    } catch (e) { console.error(e.message); }
};

// *Method* get all Classes
const getAllClasse = async (req, res) => {
    try {
        let all = await Classe.find();
        res.json(all);
    } catch (e) { console.error(e.message); }
};

// *Method* Delete Classe

const deleteClasseById = async (id) => {
    try {
        await Classe.findByIdAndDelete(id);
        console.log('Classe deleted successfully');
    } catch (e) {
        console.error(e.message);
    }
};

// *Method* Update Classe
const UpdateClasseById = async (req, res) => {
    try {
        let inputData = req.body;
        await Classe.findByIdAndUpdate(req.params.id, inputData);
        let newClasse = await Classe.findById(req.params.id);
        res.json(newClasse);
        console.log('Classe updated successfully');
    } catch (e) { console.error(e.message); }
};
// *Method* Delete Classe
const deleteClasseById = async (req, res) => {
    try {
        let cl = await Classe.findByIdAndDelete(req.params.id);
        res.json(cl)
        console.log('Classe deleted successfully');
    } catch (e) { console.error(e.message); }
}

module.exports = {
    classe : getAClasse,
    classes : getAllClasse ,
    createClasse: createClasse,
    delete : deleteClasseById,
    update : UpdateClasseById 
  
}