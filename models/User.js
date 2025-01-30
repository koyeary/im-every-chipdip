const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
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
  linkedIn: {
    type: String,
  },
  github: {
    type: String,
  },
  activeInvoice: {
    type: String,
  },
});

module.exports = mongoose.model("user", UserSchema);
