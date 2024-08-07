const router = require("express").Router();

// Matches with "/api/contact"
router.post("https://api.emailjs.com/api/v1.0/email/send");

module.exports = router;
