const router = require("express").Router();
const nodemailer = require("nodemailer");

// Matches with "/api/messages"
router.route("/")
  .post(function (req, res) {
    console.log(req.body);
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kdev.spring2018@gmail.com',
        pass: 'gtatl20180508fsf'
      }
    });

    var mailOptions = {
      from: 'kdev.spring2018@gmail.com',
      to: 'kdev.spring2018@gmail.com ',
      subject: 'KDEV ' + req.body.sender + " sent: " + req.body.subject,
      text: "From: " + req.body.email + "\n" + req.body.body
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    res.end();
  });

module.exports = router;