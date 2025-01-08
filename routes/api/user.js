const router = require("express").Router();
const bcrypt = require("bcryptjs");
const auth = require("../../middleware/auth");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

//POST /api/user/create (Create a new user)
router.post("/create", async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const newUser = new User({ email, username, password });
    await newUser.save();
    res
      .status(201)
      .send({ message: "User created successfully", data: newUser });
  } catch (error) {
    res.status(500).send({ message: "Error creating user", error });
  }
});

//PUT /api/user/update (Update a user password)
router.put("/update", async (req, res) => {
  const { email, newPassword } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    user.password = newPassword;
    await user.save();
    res
      .status(200)
      .send({ message: "Password updated successfully", data: user });
  } catch (error) {
    res.status(500).send({ message: "Error updating password", error });
  }
});

//DELETE /api/user/delete (Delete a user)
router.delete("/delete", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOneAndDelete({ email });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send({ message: "User deleted successfully", data: user });
  } catch (error) {
    res.status(500).send({ message: "Error deleting user", error });
  }
});
//POST /api/user (Find a user)
router.post("/", async (req, res) => {
  const { email, username, password } = req.body;
  console.log(email);

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send({ message: "User found", data: user });
  } catch (error) {
    return res.status(500).send({ message: "Error finding user", error });
  }
});

//GET /api/user (Get all users)
router.get("/", async (req, res) => {
  try {
    const user = await User.find({});
    if (!user) {
      return res.status(404).send({ message: "Users not found" });
    }
    res.status(200).send({ message: "Users found", data: user });
  } catch (error) {
    return res.status(500).send({ message: "Error finding users", error });
  }
});

module.exports = router;
