const db = require("../models");

module.exports = {
  findCurrentProfile: function(req, res) {
    db.PatientProfile
      .findOne({ patientID: req.params.id })
      .then(dbUser => res.json(dbUser))
      .catch(err => console.log(err))
  },
  create: function(req, res) {
    db.Patient.findById(req.body.currentUserID)
      .then(patient => {
        db.PatientProfile.create({...req.body.formData, patientID: patient._id})
          .then(patientProfile => {
            res.json(patientProfile)
          });
      })
      .catch(err => console.log(err));
  },
  update: function(req, res) {
    db.PatientProfile
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
