const bcrypt = require('bcryptjs')
const { User, Student, Teacher, Staff } = require('../models/user');

/**
 * User METHODS
 */

// show dashboard
exports.dash = async (req, res) => {
    try {
        const users = await User.find();
        res.render("pages/users/dashboard", { users })
    } catch (error) {
        console.log('Une erreur s\'est produite');
    }
}

// show the list of users
exports.getAllUser = async (req, res) => {
    try {
        const users = await User.find();
        res.render("pages/users/user", { users })
    } catch (error) {
        console.log('Une erreur s\'est produite');
    }
}

// show single user
exports.showUser = (req, res) => {
    let userID = req.params.id
    User.findById(userID)
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

// store user 
exports.storeUser = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
        if (err) {
            res.json({
                error: err
            })
        }
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            profil: req.body.profil,
            phone: req.body.phone,
            address: req.body.address,
            gender: req.body.gender
        })
        user.save()
            .then(response => {
                res.json({
                    message: "Utilisateur ajouté avec succès"
                })
            })
            .catch(error => {
                res.json({
                    message: "Une erreur s'est produite"
                })
            })
    })
}

// update user
exports.updateUser = (req, res) => {
    let userID = req.params.id
    let updatedData = {
        name: req.body.name,
        email: req.body.email,
        profil: req.body.profil,
        phone: req.body.phone,
        address: req.body.address,
        gender: req.body.gender
    }
    User.findByIdAndUpdate(userID, { $set: updatedData })
        .then(() => {
            res.json({
                message: "Utilisateur modifié avec succès"
            })
        })
        .catch(error => {
            res.json({
                message: "Une erreur s'est produite"
            })
        })
}

// delete user
exports.destroyUser = (req, res) => {
    let userID = req.params.id
    User.findByIdAndRemove(userID)
        .then(() => {
            res.json({
                message: "User deleted successfully"
            })
        })
        .catch(error => {
            res.json({
                message: "Une erreur s'est produite"
            })
        })
}

/**
 * Student METHODS
 */

// show the list of students
exports.getAllStudent = async (req, res) => {
    try {
        const students = await Student.find();
        res.render("pages/students/index", { students })
    } catch (error) {
        console.log('Une erreur s\'est produite');
    }
}

// show single student
exports.showStudent = (req, res) => {
    let studentID = req.params.id
    Student.findById(studentID)
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

// store student 
exports.storeStudent = (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
        if (err) {
            res.json({
                error: err
            })
        }
        let student = new Student({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            profil: req.body.profil,
            phone: req.body.phone,
            address: req.body.address,
            gender: req.body.gender,
            codeStudent: req.body.codeStudent,
            birthDate: req.body.birthDate,
            classe: req.body.classe
        })
        student.save()
            .then(response => {
                res.json({
                    message: "Elève ajouté avec succès"
                })
            })
            .catch(error => {
                res.json({
                    message: "Une erreur s'est produite"
                })
            })
    })
}

// update student
exports.updateStudent = (req, res) => {
    let studentID = req.params.id
    let updatedData = {
        name: req.body.name,
        email: req.body.email,
        profil: req.body.profil,
        phone: req.body.phone,
        address: req.body.address,
        gender: req.body.gender,
        codeStudent: req.body.codeStudent,
        birthDate: req.body.birthDate,
        classe: req.body.classe
    }
    Student.findByIdAndUpdate(studentID, { $set: updatedData })
        .then(() => {
            res.json({
                message: "Elève modifié avec succès"
            })
        })
        .catch(error => {
            res.json({
                message: "Une erreur s'est produite"
            })
        })
}

// delete student
exports.destroyStudent = (req, res) => {
    let studentID = req.params.id
    User.findByIdAndRemove(studentID)
        .then(() => {
            res.json({
                message: "Elève supprimé avec succès"
            })
        })
        .catch(error => {
            res.json({
                message: "Une erreur s'est produite"
            })
        })
}


/**
 * Teacher METHODS
 */

// show the list of teachers
exports.getAllTeacher = async (req, res) => {
    try {
        const teachers = await Teacher.find();
        res.render("pages/teachers/index", { teachers })
    } catch (error) {
        console.log('Une erreur s\'est produite');
    }
}

// show single teacher
exports.showTeacher = (req, res) => {
    let teacherID = req.params.id
    Teacher.findById(teacherID)
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

// store teacher 
exports.storeTeacher = (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
        if (err) {
            res.json({
                error: err
            })
        }
        let teacher = new Teacher({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            profil: req.body.profil,
            phone: req.body.phone,
            address: req.body.address,
            gender: req.body.gender,
            speciality: req.body.speciality,
            level: req.body.level
        })
        teacher.save()
            .then(response => {
                res.json({
                    message: "Enseignant ajouté avec succès"
                })
            })
            .catch(error => {
                res.json({
                    message: "Une erreur s'est produite"
                })
            })
    })
}

// update teacher
exports.updateTeacher = (req, res) => {
    let teacherID = req.params.id
    let updatedData = {
        name: req.body.name,
        email: req.body.email,
        profil: req.body.profil,
        phone: req.body.phone,
        address: req.body.address,
        gender: req.body.gender,
        speciality: req.body.speciality,
        level: req.body.level
    }
    Teacher.findByIdAndUpdate(teacherID, { $set: updatedData })
        .then(() => {
            res.json({
                message: "Enseignant modifié avec succès"
            })
        })
        .catch(error => {
            res.json({
                message: "Une erreur s'est produite"
            })
        })
}

// delete teacher
exports.destroyTeacher = (req, res) => {
    let teacherID = req.params.id
    Teacher.findByIdAndRemove(teacherID)
        .then(() => {
            res.json({
                message: "Enseignant deleted successfully"
            })
        })
        .catch(error => {
            res.json({
                message: "Une erreur s'est produite"
            })
        })
}


/**
 * Staff METHODS
 */

// show the list of staffs
exports.getAllStaff = (req, res) => {
    Staff.find()
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

// show single staff
exports.showStaff = (req, res) => {
    let staffID = req.params.id
    Staff.findById(staffID)
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

// store staff 
exports.storeStaff = (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
        if (err) {
            res.json({
                error: err
            })
        }
        let staff = new Staff({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            profil: req.body.profil,
            phone: req.body.phone,
            address: req.body.address,
            gender: req.body.gender,
            status: req.body.status
        })
        staff.save()
            .then(response => {
                res.json({
                    message: "Personnel ajouté avec succès"
                })
            })
            .catch(error => {
                res.json({
                    message: "Une erreur s'est produite"
                })
            })
    })
}

// update Staff
exports.updateStaff = (req, res) => {
    let staffID = req.params.id
    let updatedData = {
        name: req.body.name,
        email: req.body.email,
        profil: req.body.profil,
        phone: req.body.phone,
        address: req.body.address,
        gender: req.body.gender,
        status: req.body.status
    }
    Staff.findByIdAndUpdate(staffID, { $set: updatedData })
        .then(() => {
            res.json({
                message: "Personnel modifié avec succès"
            })
        })
        .catch(error => {
            res.json({
                message: "Une erreur s'est produite"
            })
        })
}

// delete Staff
exports.destroyStaff = (req, res) => {
    let staffID = req.params.id
    Staff.findByIdAndRemove(staffID)
        .then(() => {
            res.json({
                message: "Personnel deleted successfully"
            })
        })
        .catch(error => {
            res.json({
                message: "Une erreur s'est produite"
            })
        })
}