const mongoose = require("mongoose");

const timeTableSchema = new mongoose.Schema({
  schedule: {
    type: String
  },
  day: {
    type: String
  },
  subject: {
    type: mongoose.Types.ObjectId
  }
});
const classeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 20,
    unique: true
  },
  subjects: {
    type: [mongoose.Types.ObjectId]
  },
  effectif: {
    type: Number
  }
});

module.exports = mongoose.model("Classe", classeSchema);
