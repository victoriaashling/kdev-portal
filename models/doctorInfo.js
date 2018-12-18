const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doctorInfoSchema = new Schema({
	First_Name: { type: String, required: true },
	Last_Name: { type: String, required: true },
  Phone: { type: String, required: true },
  Fax: String,
	Email: { type: String, required: true },
  Street:  { type: String, required: true },
  City: { type: String, required: true },
  State: { type: String, required: true },
  ZIP: { type: Number, required: true },
  Country: { type: String, required: true },
	Specialty: { type: String, required: true },
	Business_hours: { type: String, required: true }, 
	Locations: [{ type: String }],
  Insurances: [{ type: String }],
  Board_Certifications: [{ type: String }],
  Education_and_Training: [{ type: String, required: true }],
  Languages_Spoken: [{ type: String }],
  Gender: String,
  NPI_Number: Number
  // Patient: [{
  //   type: Schema.Types.ObjectId,
  //   ref: "DoctorInfo"
  // }]
});

const DoctorInfo = mongoose.model("DoctorInfo", doctorInfoSchema);

module.exports = DoctorInfo;