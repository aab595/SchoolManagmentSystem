const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
  course: {
    type: Object
  },
  exercise: {
    type: Object
  }
});
const subjectSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50
  },
  category: {
    type: String
  },
  content: {
    type: contentSchema
  }
});

module.exports = mongoose.model("Subject", subjectSchema);
