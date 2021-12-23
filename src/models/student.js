const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    maxLength: 20
  },
  lastname: {
    type: String,
    required: true,
    maxLength: 20
  },
  adress: {
    type: String
  },
  sexe: {
    type: String,
    required: true
  },
  classe: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Student", studentSchema);
