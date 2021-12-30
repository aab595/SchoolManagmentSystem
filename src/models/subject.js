const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
  course: { type: String },
  exercise: { type: String }
});

const subjectSchema = new mongoose.Schema({
  label: { type: String, required: true, minLength: 2, maxLength: 50 },
  category: { type: String },
  content: { type: contentSchema }
}, { timestamps: true });

module.exports = mongoose.model("Subject", subjectSchema);
