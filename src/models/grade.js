const mongoose = require("mongoose");

const GradeSchema = new mongoose.Schema({
  value: Number,
  courseLabel: String,
  codeStudent: String,
  semestre: String
},{ timestamps: true });

const Grade = mongoose.model("Note", GradeSchema);
module.exports = Grade
