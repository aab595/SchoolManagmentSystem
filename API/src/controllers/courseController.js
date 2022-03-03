const Course = require ('../models/course');

//show the list of courses
exports.getAllCourse = async (req, res) => {
    try {
        const courses = await Course.find();
        console.log(courses)
        res.render("pages/courses/index", { courses })
    } catch (error) {
        console.log('Une erreur s\'est produite');
    }
}

// show single course
exports.showCourse = (req, res) => {
    let courseID = req.params.id
    Course.findById(courseID)
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

// store courses
exports.storeCourse = (req, res, next) => {
        let course = new Course({
            label: req.body.label,
            volume: req.body.volume,
            teacher: req.body.teacher,
            classe: req.body.classe           
        })
        course.save()
            .then(response => {
                res.json({
                    message: "Course ajouté avec succès"
                })
            })
            .catch(error => {
                res.json({
                    message: "Une erreur s'est produite"
                })
            })
}

// update course
exports.updateCourse = (req, res) => {
    let courseID = req.params.id
    let updatedData = {
        label: req.body.label,
        volume: req.body.volume,
        teacher: req.body.teacher,
        classe: req.body.classe
        
    }
    Course.findByIdAndUpdate(courseID, { $set: updatedData })
        .then(() => {
            res.json({
                message: "Course modifié avec succès"
            })
        })
        .catch(error => {
            res.json({
                message: "Une erreur s'est produite"
            })
        })
}

// delete course 
exports.destroyCourse = (req, res) => {
    let courseID = req.params.id
    Course.findByIdAndRemove(courseID)
        .then(() => {
            res.json({
                message: "Course supprimé avec succès"
            })
        })
        .catch(error => {
            res.json({
                message: "Une erreur s'est produite"
            })
        })
}



