const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RxSchema = new Schema({
	rx: String,
	DoctorID: String,
	Doctor_Speciality: { type: String, required: true },
	// Diagnosis: { type: String, required: true },
	// Lab_Result: [{
  //   type: Schema.Types.ObjectId,
  //   ref: "Lab_Result"
  // }],
	rxInfo: String,
	Time: { type: Date, default: Date.now }
});

const Rx = mongoose.model("Rx", RxSchema);

module.exports = Rx;