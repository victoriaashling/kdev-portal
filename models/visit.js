const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const visitSchema = new Schema({
	patientID: String,
	DoctorID: String,
	Doctor_Speciality: { type: String, required: true },
	Prescription: String,
	Diagnosis: { type: String, required: true },
	Lab_Result: [{
    type: Schema.Types.ObjectId,
    ref: "Lab_Result"
  }],
	Data: String,
	Time: { type: Date, default: Date.now }
});

const Visit = mongoose.model("Visit", visitSchema);

module.exports = Visit;