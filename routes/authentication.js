const passport = require("passport");
const Strategy = require("passport-local").Strategy;
const db = require("../models");


module.exports = app => {
  passport.use("local-patient-signin", new Strategy(
    (username, password, cb) => {
      db.Patient.findOne({ username: username }).then(user => {
        if (!user) return cb(null, false);
        if (user.password !== password) return cb (null, false);

        return cb(null, user);
      })
    })
  );

  passport.use("local-patient-create", new Strategy(
    (username, password, cb) => {
      db.Patient.findOne({ username: username }).then(user => {
        if (user) return cb(null, false);
        
        db.Patient.create({ username: username, password: password }).then(newUser => {
          return cb(null, newUser);
        })
      })
    }
  ));

  passport.serializeUser((user, cb) => cb(null, user._id));

  passport.deserializeUser((_id, cb) => {
    db.Patient.findById({ _id }).then(user => cb(null, user));
  });

  function ensureAuthenticated (req, res, next) {
    if (req.isAuthenticated()) { 
        return next();
    }
    console.log("not authenticated");
    res.json({"isAuth": false});
  };


  app.post("/createaccount", passport.authenticate("local-patient-create", {failureMessage: "Please try again."}), (req, res) => {
    res.json({"accountCreated": true});
  });

  app.post("/login", passport.authenticate("local-patient-signin", {failureMessage: "Please try again."}), (req,res) => {
    res.json({"isLoggedIn": true});
  });

  app.get("/isauth", ensureAuthenticated, (req, res) => {
    res.json({"isAuth": true});
  });

  app.get("/getcurrentuser", ensureAuthenticated, (req, res) => {
    res.json(req.user);
  })

  app.get("/logout", (req, res) => {
    req.logout();
    res.json({"logoutStatus": true});
  });
};