const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  crossFunction: {
    type: Array,
  },
});

module.exports = mongoose.model("teams", TeamSchema);
