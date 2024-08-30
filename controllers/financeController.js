const Stock = require("../models/Stock");
const Currency = require("../models/Currency");

//GET
module.exports = {
  getForex: () => Currency.find({}),
  getUserForex: (filter) => {
    return Currency.find({ currencyCode: { $in: filter } });
  },
  updateCurrency: (code, rate, date) => {
    console.log(code, rate, date);
    return Currency.findOneAndUpdate(
      { currencyCode: code },
      { $set: { rate: rate, date: date } }
    );
  },
  /* 
  updateCurrencies: async (filter) => {
    try {
      const currencies = Currency.find(Object.keys(filter));

      return currencies;
    } catch (err) {
      return err;
    }
  }, */

  //UPDATE
  /*   export const updateCurrencies = async (filter, update, options) => {
    try {
      const updateMany = await Currency.updateMany(filter, update, options);
      return updateMany;
    } catch (err) {
      return err;
    }
  }; */
  //POST

  //DELETE
};
