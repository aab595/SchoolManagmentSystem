const TimeTables = require ('../models/timeTables');

//show the list of timeTabless
exports.getAllTimeTables = async (req, res) => {
    try {
        const timeTables = await TimeTables.find();
        console.log(timeTables)
        res.render("pages/timeTables/index", { timeTables })
    } catch (error) {
        console.log('Une erreur s\'est produite');
    }
}

// show single timeTables
exports.showTimeTables = (req, res) => {
    let timeTablesID = req.params.id
    TimeTables.findById(timeTablesID)
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

// store timeTabless
exports.storeTimeTables = (req, res, next) => {
        let timeTables = new TimeTables({
            subject: req.body.subject,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            classroom: req.body.classroom,
            semester: req.body.semester,
            classe: req.body.classe                                       
        })
        timeTables.save()
            .then(response => {
                res.json({
                    message: "TimeTables ajouté avec succès"
                })
            })
            .catch(error => {
                res.json({
                    message: "Une erreur s'est produite"
                })
            })
}

// update timeTables
exports.updateTimeTables = (req, res) => {
    let timeTablesID = req.params.id
    let updatedData = {
            subject: req.body.subject,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            classroom: req.body.classroom,
            semester: req.body.semester,
            classe: req.body.classe  
    }
    TimeTables.findByIdAndUpdate(timeTablesID, { $set: updatedData })
        .then(() => {
            res.json({
                message: "TimeTables modifié avec succès"
            })
        })
        .catch(error => {
            res.json({
                message: "Une erreur s'est produite"
            })
        })
}

// delete timeTables 
exports.destroyTimeTables = (req, res) => {
    let timeTablesID = req.params.id
    TimeTables.findByIdAndRemove(timeTablesID)
        .then(() => {
            res.json({
                message: "TimeTables supprimé avec succès"
            })
        })
        .catch(error => {
            res.json({
                message: "Une erreur s'est produite"
            })
        })
}



