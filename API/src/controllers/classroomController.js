const Classroom = require ('../models/classroom');

//show the list of classrooms
exports.getAllClassroom = async (req, res) => {
    try {
        const classrooms = await Classroom.find();
        console.log(classrooms)
        res.render("pages/classrooms/index", { classrooms })
    } catch (error) {
        console.log('Une erreur s\'est produite');
    }
}

// show single classroom
exports.showClassroom = (req, res) => {
    let classroomID = req.params.id
    Classroom.findById(classroomID)
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

// store classrooms
exports.storeClassroom = (req, res, next) => {
        let classroom = new Classroom({
            numClass: req.body.academicYear,
            label: req.body.label,
            capacity: req.body.capacity           
        })
        classroom.save()
            .then(response => {
                res.json({
                    message: "Classroom ajouté avec succès"
                })
            })
            .catch(error => {
                res.json({
                    message: "Une erreur s'est produite"
                })
            })
}

// update classroom
exports.updateClassroom = (req, res) => {
    let classroomID = req.params.id
    let updatedData = {
        numClass: req.body.numClass,
        label: req.body.label,
        capacity: req.body.capacity   
    }
    Classroom.findByIdAndUpdate(classroomID, { $set: updatedData })
        .then(() => {
            res.json({
                message: "Classroom modifié avec succès"
            })
        })
        .catch(error => {
            res.json({
                message: "Une erreur s'est produite"
            })
        })
}

// delete classroom 
exports.destroyClassroom = (req, res) => {
    let classroomID = req.params.id
    Classroom.findByIdAndRemove(classroomID)
        .then(() => {
            res.json({
                message: "Classroom supprimé avec succès"
            })
        })
        .catch(error => {
            res.json({
                message: "Une erreur s'est produite"
            })
        })
}



