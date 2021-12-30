const mongoose = require('mongoose');
const extendSchema = require('mongoose-extend-schema');

// schemas
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, lowercase: true, required: true },
    password: { type: String, required: true },
    profil: { type: String },
    phone: { type: String },
    address: { type: String },
    gender: { type: String }
}, { timestamps: true });

const StudentSchema = extendSchema(UserSchema, {
    codeStudent: { type: String, required: true },
    birthDate: { type: String },
    classe: {
        label: { type: String },
        academicYear: { type: [Date, Date] }
    }
}, { timestamps: true });

const TeacherSchema = extendSchema(UserSchema, {
    speciality: { type: String },
    level: { type: String }
}, { timestamps: true });

const StaffSchema = extendSchema(UserSchema, {
    status: { type: String }
}, { timestamps: true });

// models
const User = mongoose.model('users', UserSchema);
const Student = mongoose.model('students', StudentSchema);
const Teacher = mongoose.model('teachers', TeacherSchema);
const Staff = mongoose.model('staffs', StaffSchema);

module.exports = { User, Student, Teacher, Staff }
