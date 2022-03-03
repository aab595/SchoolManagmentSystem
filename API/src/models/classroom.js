const mongoose = require('mongoose')

const ClassroomSchema = new mongoose.Schema({
    numClass: String,
    label: String,
    capacity: Number
}, { timestamps: true });

const Classroom = mongoose.model('classrooms', ClassroomSchema)

module.exports = Classroom
