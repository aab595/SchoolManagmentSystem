const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  label: String,
  volume: Number,
  teacher: mongoose.Types.ObjectId,
  classe: mongoose.Types.ObjectId,
});

const Course = mongoose.model("Course", CourseSchema);
module.exports = Course
