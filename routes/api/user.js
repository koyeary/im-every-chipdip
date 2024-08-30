const router = require("express").Router();
const User = require("../../models/User");

router.post("/", async (req, res) => {
  const { email } = req.body;
  try {
    const results = {
      message: "success",
      data: User.find({ email: email }),
    };
    return res.status(200).json(results);
  } catch (error) {
    return error;
  }
});

module.exports = router;
