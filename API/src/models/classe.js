const mongoose = require('mongoose')

const ClasseSchema = new mongoose.Schema({
  label: String,
  academicYear: [Date, Date],
  students: [mongoose.Types.ObjectId]
}, { timestamps: true });

const Classe = mongoose.model('classes', ClasseSchema);
module.exports = Classe
