const mongoose = require("mongoose");

const professorSchema = new mongoose.Schema({
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
  speciality: {
    type: String,
    required: true
  },
  adress: {
    type: String
  }
});

module.exports = mongoose.model("Professor", professorSchema);
