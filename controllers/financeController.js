const Stock = require("../models/Stock");
const Currency = require("../models/Currency");

//GET
module.exports = {
  getForex: () => Currency.find({}),
  getUserForex: (currencies) =>
    Currency.find({ currencyCode: { $in: currencies } }),
  getAllTickers: () => Stock.find({}),
  updateCurrency: (currencyCode, rate) => {
    Currency.updateOne(
      {
        currencyCode: currencyCode,
      },
      {
        $set: {
          rate: rate,
          date: Date(),
        },
      },
      { upsert: true }
    );
  },
};
