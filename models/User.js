const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  title: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  created: {
    type: Date,
  },
  pronouns: {
    type: String,
  },
  linkedIn: {
    type: String,
  },
  github: {
    type: String,
  },
  site: {
    type: String,
  },
  profilePic: {
    type: String,
  },
  activeInvoice: {
    type: String,
  },
});

module.exports = mongoose.model("user", UserSchema);
