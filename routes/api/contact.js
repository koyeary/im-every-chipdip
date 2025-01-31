const router = require("express").Router();
const axios = require("axios");
// Matches with "/api/contact"
router.post("/", async (req, res) => {
  console.log(req.body);
  const { name, email, subject, message } = req.body;
  console.log(req.body);
  const data = req.body;

  try {
    const res = await axios.post(
      `https://www.googleapis.com//gmail/v1/users/${process.env.GMAIL_USER}/drafts/send`,
      data
    );
    console.log(res.data);
    return res.status(200).json(res.data.message);
  } catch (error) {
    console.log(error);
    return error;
  }
});

module.exports = router;
