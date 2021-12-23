const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 20
  },
  email: {
    type: String,
    lowercase: true
  },
  password: {
    type: password
  },
  profil: {
    type: String,
    required: true
  },
  statut: {
    type: String
  }
});

module.exports = mongoose.model("User", userSchema);
