const Grade = require ('../models/grade');

//show the list of grades
exports.getAllGrade = async (req, res) => {
    try {
        const grades = await Grade.find();
        console.log(grades)
        res.render("pages/grades/index", { grades })
    } catch (error) {
        console.log('Une erreur s\'est produite');
    }
}

// show single grade
exports.showGrade = (req, res) => {
    let gradeID = req.params.id
    Grade.findById(gradeID)
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

// store grades
exports.storeGrade = (req, res, next) => {
        let grade = new Grade({
            value: req.body.value,
            courseLabel: req.body.courseLabel,
            codeStudent: req.body.codeStudent,
            semestre: req.body.semestre                    
        })
        grade.save()
            .then(response => {
                res.json({
                    message: "Grade ajouté avec succès"
                })
            })
            .catch(error => {
                res.json({
                    message: "Une erreur s'est produite"
                })
            })
}

// update grade
exports.updateGrade = (req, res) => {
    let gradeID = req.params.id
    let updatedData = {
        value: req.body.value,
            courseLabel: req.body.courseLabel,
            codeStudent: req.body.codeStudent,
            semestre: req.body.semestre    
        
    }
    Grade.findByIdAndUpdate(gradeID, { $set: updatedData })
        .then(() => {
            res.json({
                message: "Grade modifié avec succès"
            })
        })
        .catch(error => {
            res.json({
                message: "Une erreur s'est produite"
            })
        })
}

// delete grade 
exports.destroyGrade = (req, res) => {
    let gradeID = req.params.id
    Grade.findByIdAndRemove(gradeID)
        .then(() => {
            res.json({
                message: "Grade supprimé avec succès"
            })
        })
        .catch(error => {
            res.json({
                message: "Une erreur s'est produite"
            })
        })
}



