const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LabResultXRaySchema = new Schema({
	First_Name: { type: String, required: true },
  Last_Name: { type: String, required: true },
  Time: { type: Date, default: Date.now },
  Note:{ type: String},
  URL:{type:String},
});

const LabResultXRay = mongoose.model("LabResultXRay", LabResultXRaySchema);

module.exports = LabResultXRay;