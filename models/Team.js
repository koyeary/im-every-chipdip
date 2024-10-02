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
  upstream: {
    type: String,
    required: true,
  },
  downstream: {
    type: String,
    required: true,
  },
  groups: {
    type: Array,
  },
  lead: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("teams", TeamSchema);
