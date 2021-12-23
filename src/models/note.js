const mongoose = require("mongoose");
const noteSchema = new mongoose.Schema({
  value: {
    type: Number
  },
  codestudent: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  codesubject: {
    type: mongoose.Types.ObjectId,
    required: true
  }
});

module.exports = mongoose.model("Note", noteSchema);
