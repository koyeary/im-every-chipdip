const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
/* 
const transporter = nodemailer.createTransport(
  smtpTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: process.env.GMAIL,
      pass: process.env.GMAIL_PWD,
    },
    dsn: {
      id: "some random message specific id",
      return: "headers",
      notify: "success",
      recipient: "sender@example.com",
    },
  })
); */

/* async function send(from, subject, text) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: from, // sender address
    to: "katyeary@gmail.com", // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
} */

//send().catch(console.error);

/* transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
}); */

// Matches with "/api/contact"

router.post("/", async (req, res) => {
  const { name, from, subject, text } = req.body.data;

  try {
    console.log(req.body);
    console.log(name, from, subject, text);
    //const results = await send(from, subject, text);
    //console.log(results);
    //return res.status(200).json(results.data);
    res.send("OK");
  } catch (error) {
    console.log(error);
    return error;
  }
});

module.exports = router;
