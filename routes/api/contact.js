const router = require("express").Router();

// Matches with "/api/contact"
router.post("/", async (req, res) => {
  /*   console.log(req.body);
  const { name, email, subject, message } = req.body;
  console.log(req.body);
  const data = {
    service_id: "gmail",
    template_id: "portfolio",
    user_id: process.env.EJS_PUBLIC_KEY,
    template_params: {
      name: name,
      email: email,
      subject: subject,
      message: message,
      reply_to: email,
    },
    accessToken: process.env.EJS_PRIVATE_KEY,
  }; */

  try {
    /*   const res = await axios.post(
      "https://api.emailjs.com/api/v1.0/email/send",
      data
    );
    console.log(res);
    return res.status(200).json(res.data.message);  */
    console.log(req);
    console.log(req.body);
  } catch (error) {
    console.log(req);
    return error;
  }
});

module.exports = router;
