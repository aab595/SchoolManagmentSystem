const Subject = require ('../models/subject');

//show the list of subjects
exports.getAllSubject = async (req, res) => {
    try {
        const subjects = await Subject.find();
        console.log(subjects)
        res.render("pages/subjects/index", { subjects })
    } catch (error) {
        console.log('Une erreur s\'est produite');
    }
}

// show single subject
exports.showSubject = (req, res) => {
    let subjectID = req.params.id
    Subject.findById(subjectID)
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

// store subjects
exports.storeSubject = (req, res, next) => {
        let subject = new Subject({
            label: req.body.label,
            category: req.body.category,
            content: req.body.content                             
        })
        subject.save()
            .then(response => {
                res.json({
                    message: "Subject ajouté avec succès"
                })
            })
            .catch(error => {
                res.json({
                    message: "Une erreur s'est produite"
                })
            })
}

// update subject
exports.updateSubject = (req, res) => {
    let subjectID = req.params.id
    let updatedData = {
        label: req.body.label,
        category: req.body.category,
        content: req.body.content   
    }
    Subject.findByIdAndUpdate(subjectID, { $set: updatedData })
        .then(() => {
            res.json({
                message: "Subject modifié avec succès"
            })
        })
        .catch(error => {
            res.json({
                message: "Une erreur s'est produite"
            })
        })
}

// delete subject 
exports.destroySubject = (req, res) => {
    let subjectID = req.params.id
    Subject.findByIdAndRemove(subjectID)
        .then(() => {
            res.json({
                message: "Subject supprimé avec succès"
            })
        })
        .catch(error => {
            res.json({
                message: "Une erreur s'est produite"
            })
        })
}



