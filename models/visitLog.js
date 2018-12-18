const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const visitLogSchema = new Schema({
  patientID: { type: String, required: true },
  Visit_info: [{
    type: Schema.Types.ObjectId,
    ref: "Visit"
  }]
});

const VisitLog = mongoose.model("VisitLog", visitLogSchema);

module.exports = VisitLog;