const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LabResultDrugSchema = new Schema({
	First_Name: { type: String, required: true },
	Last_Name: { type: String, required: true },
  Time: { type: Date, default: Date.now },
  Alzheimers: Number,
  Anglgesics: Number,
  Asthma:Number,
  Depression:Number,
  Diabetes:Number,
  HIV:Number,
  Hypertension:Number,
});

const LabResultDrug = mongoose.model("LabResultDrug", LabResultDrugSchema);

module.exports = LabResultDrug;