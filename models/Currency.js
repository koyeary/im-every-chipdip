const mongoose = require("mongoose");

const CurrencySchema = new mongoose.Schema({
  currencyCode: {
    type: String,
    required: true,
  },
  currencyName: {
    type: String,
    required: true,
  },
  countryCode: {
    type: String,
    required: true,
  },
  countryName: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("currencies", CurrencySchema);
