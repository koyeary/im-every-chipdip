const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");

// @route    POST api/user
// @desc     Register user
// @access   Public
router.post(
  "/create",
  [
    check("name", "Name is required").notEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      user = new User({
        name,
        email,
        password: hashedPassword,
        created: Date.now(),
      });

      await user.save();

      const payload = {
        user: {
          _id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "5 days" },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send(`Server Error: ${err.message}`);
    }
  }
);

// @route    PUT api/user/update/np
// @desc     Update user password
// @access   Public
router.put("/update/np", async (req, res) => {
  const { newPassword, email, token } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!token) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }

    if (!user) {
      return res.status(400).json({ errors: [{ msg: "User not found" }] });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    user.password = hashedPassword;
    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`Server Error: ${err.message}`);
  }
});

// @route    PUT api/user/update
// @desc     Update user details
// @access   Public
router.put("/update", async (req, res) => {
  const { name, email, github, linkedIn, token } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!token) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }

    if (!user) {
      return res.status(400).json({ errors: [{ msg: "User not found" }] });
    }

    user = await User.findOneAndUpdate(
      { email },
      { name, github, linkedIn },
      { new: true }
    );

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`Server Error: ${err.message}`);
  }
});

module.exports = router;
