const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Patient = new Schema({
  username: String,
  password: String
});

module.exports = mongoose.model("Patient", Patient);