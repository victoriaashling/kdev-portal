const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/kdevproject"
);

const LabResultXRay = [
  {
    First_Name:"Tom",
    Last_Name: "Hello",
    Time: Date.now,
    Note:"Good",
    URL:"https://www.verywellhealth.com/thmb/OqgFlM2ZWzgTRAxCX_iBpwkgkm0=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/iStock_22401848_MEDIUM-58262cb63df78c6f6adebb27.jpg",
  }
];

const LabResultDrug = [
  {
    First_Name: "Tom",
	  Last_Name: "Hello",
    Time: Date.now,
    Alzheimers: 20,
    Anglgesics: 30,
    Asthma:55,
    Depression:100,
    Diabetes:66,
    HIV:77,
    Hypertension:99,
  }
];

const LabResultBlood = [
  {
    First_Name: "Tom",
	  Last_Name: "Hello",
    Insurances: "Humana",
    Time: Date.now,
    Age: 50,
    Gender: "Female",
    WBC:6.9,
    RBC:100,
    HB:111,
    HCT:222,
    MCV:333,
    MCH:444,
    MCHC:555,
    RDW:666,
    Platelet:777,
  }
];

const rxSeed = [
  {
  rx: "Gabapentin",
	DoctorID: "5001",
	Doctor_Speciality:"Pain Management",
	rxInfo: "It is used to treat seizures. It is used to treat painful nerve diseases.",
  Time: Date.now
  }
];

const visitSeed = [
  {
    patientID: "1001",
    DoctorID: "5001",
    Doctor_Speciality: "Dental",
    Prescription: "Morphine",
    Diagnosis: "Crown needed",
    Data: "Come again",
    Time: Date.now
  },
  {
    patientID: "1002",
    DoctorID: "5002",
    Doctor_Speciality: "Psychiatry",
    Prescription: "Zophran",
    Diagnosis: "She's crazy",
    Data: "Hope this helps!",
    Time: Date.now
  },
  {
    patientID: "1003",
    DoctorID: "5003",
    Doctor_Speciality: "Cardiology",
    Prescription: "Q10 Vitamins",
    Diagnosis: "Clogged artery",
    Data: "Just needs to exercise..",
    Time: Date.now
  },
  {
    patientID: "1004",
    DoctorID: "5004",
    Doctor_Speciality: "Dermatology",
    Prescription: "Aquaphor",
    Diagnosis: "Eczema",
    Data: "Auto-immune reaction to wheat allergy",
    Time: Date.now
  },
  {
    patientID: "1005",
    DoctorID: "5005",
    Doctor_Speciality: "Ophthalmologists",
    Prescription: "Carrots",
    Diagnosis: "Cataracts",
    Data: "Easy surgery should suffice",
    Time: Date.now
  },
  {
    patientID: "1006",
    DoctorID: "5006",
    Doctor_Speciality: "General Practitioner",
    Prescription: "Vitamins",
    Diagnosis: "All good",
    Data: "He's okay",
    Time: Date.now
  }
];

const doctorInfoSeed = [
  {
    First_Name: "Anne",
	  Last_Name: "Hathaway",
    Phone: "404-411-1212",
    Fax: "678-888-8888",
	  Email: "anne.hathaway@gmail.com",
    Street: "1890 S. Main Street",
    City: "Alpharetta",
    State: "GA",
    ZIP: "30009",
    Country: "USA",
	  Specialty: "Internist",
	  Business_hours: "9AM - 5PM Mon-Fri", 
	  Locations: ["Emory Hospital Decatur", "Northside Hospital Cumming"],
    Insurances: ["Ambetter", "Blue Cross Blue Shield"],
    Board_Certifications: ["American Board of Internal Medicine"],
    Education_and_Training: ["Medical School - Smt. N.H.L. Municipal Medical College, Bachelor of Medicine, Bachelor of Surgery",
    "New York Medical College, Our Lady of Mercy Medical Center (Internship)",
    "The Brookdale Hospital Medical Center, Residency in Internal Medicine",
    "Children’s Hospital of Austin (Internship)"],
    Languages_Spoken: ["English", "Spanish"],
    Gender: "Female",
    NPI_Number: 1891863141
  },
  {
    First_Name: "Chris",
	  Last_Name: "Hemsworth",
    Phone: "404-455-5500",
    Fax: "678-888-9090",
	  Email: "c.hemsworth@gmail.com",
    Street: "2090 Pleasant Hill Dr",
    City: "Duluth",
    State: "GA",
    ZIP: "30033",
    Country: "USA",
	  Specialty: "Optometrist",
	  Business_hours: "10AM - 4PM Mon-Sat", 
	  Locations: ["Emory Hospital Decatur", "Northside Hospital Cumming"],
    Insurances: ["Amica", "United Healthcare"],
    Board_Certifications: ["American Board of Internal Medicine"],
    Education_and_Training: ["Medical School - Smt. N.H.L. Municipal Medical College, Bachelor of Medicine, Bachelor of Surgery",
    "New York Medical College, Our Lady of Mercy Medical Center (Internship)",
    "The Brookdale Hospital Medical Center, Residency in Internal Medicine",
    "Children’s Hospital of Austin (Internship)"],
    Languages_Spoken: ["English", "Spanish"],
    Gender: "Female",
    NPI_Number: 1891863141
  }
];

db.Rx
.remove({})
.then(() => db.Rx.collection.insertMany(rxSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
  // process.exit(0);
})
.catch(err => {
  console.error(err);
  // process.exit(1);
});

db.LabResult_XRay
  .remove({})
  .then(() => db.LabResult_XRay.collection.insertMany(LabResultXRay))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    // process.exit(0);
      })
  .catch(err => {
    console.error(err);
    // process.exit(1);
      });


db.LabResult_Drug
  .remove({})
  .then(() => db.LabResult_Drug.collection.insertMany(LabResultDrug))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    // process.exit(0);
      })
  .catch(err => {
    console.error(err);
    // process.exit(1);
      });


db.LabResult_Blood
  .remove({})
  .then(() => db.LabResult_Blood.collection.insertMany(LabResultBlood))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    // process.exit(0);
      })
  .catch(err => {
    console.error(err);
    // process.exit(1);
      });

      

db.Visit
  .remove({})
  .then(() => db.Visit.collection.insertMany(visitSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    // process.exit(1);
  });

db.DoctorInfo
  .remove({})
  .then(() => db.DoctorInfo.collection.insertMany(doctorInfoSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    // process.exit(1);
  });


  // Patient Seeds

  const patientSeed = [
    {
      username: "user1",
      password: "password"
    },
    {
      username: "user2",
      password: "password"
    }
  ]

  db.Patient
  .remove({})
  .then(() => db.Patient.collection.insertMany(patientSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    // process.exit(1);
  });