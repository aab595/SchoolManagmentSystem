const Classe = require ('../models/classe');

//show the list of classes
exports.getAllClasse = async (req, res) => {
    try {
        const classes = await Classe.find();
        console.log(classes)
        res.render("pages/classes/index", { classes })
    } catch (error) {
        console.log('Une erreur s\'est produite');
    }
}

// show single classe
exports.showClasse = (req, res) => {
    let classeID = req.params.id
    Classe.findById(classeID)
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: "Une erreur s'est produite"
            })
        })
}

// store classes
exports.storeClasse = (req, res, next) => {
        let classe = new Classe({
            label: req.body.label,
            academicYear: req.body.academicYear,
            students: req.body.students           
        })
        classe.save()
            .then(response => {
                res.json({
                    message: " ajouté avec succès"
                })
            })
            .catch(error => {
                res.json({
                    message: "Une erreur s'est produite"
                })
            })
}

// update classe
exports.updateClasse = (req, res) => {
    let classeID = req.params.id
    let updatedData = {
        label: req.body.label,
        academicYear: req.body.academicYear,
        students: req.body.students 
    }
    Classe.findByIdAndUpdate(classeID, { $set: updatedData })
        .then(() => {
            res.json({
                message: "Classe modifié avec succès"
            })
        })
        .catch(error => {
            res.json({
                message: "Une erreur s'est produite"
            })
        })
}

// classe student
exports.destroyClasse = (req, res) => {
    let classeID = req.params.id
    Classe.findByIdAndRemove(classeID)
        .then(() => {
            res.json({
                message: "Classe supprimé avec succès"
            })
        })
        .catch(error => {
            res.json({
                message: "Une erreur s'est produite"
            })
        })
}



