const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LabResultBloodSchema = new Schema({
	First_Name: { type: String, required: true },
	Last_Name: { type: String, required: true },
  Time: { type: Date, default: Date.now },
  Insurances: [{ type: String }],
  Age: Number,
  Gender: String,
  WBC:Number,
  RBC:Number,
  HB:Number,
  HCT:Number,
  MCV:Number,
  MCH:Number,
  MCHC:Number,
  RDW:Number,
  Platelet:Number,
});

const LabResultBlood = mongoose.model("LabResultBlood", LabResultBloodSchema);

module.exports = LabResultBlood;