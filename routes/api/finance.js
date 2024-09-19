const router = require("express").Router();
const {
  getForex,
  getUserForex,
  updateCurrency,
} = require("../../controllers/financeController");
const Stock = require("../../models/Stock");
const Currency = require("../../models/Currency");
const axios = require("axios");

// Matches with "/api/finance"

router.get("/forex", async (req, res) => {
  const forex = await axios.get(
    `https://api.currencybeacon.com/v1/latest${process.env.CB_API_KEY}`
  );
  try {
    const data = forex.data;
    const rates = forex.data.response;

    console.log(rates);
    //rates.map((d) => updateCurrency(d));
    res.status(200).send(data);
  } catch (error) {
    return console.error(error);
  }
});

router.post("/forex", async (req, res) => {
  const { currencies } = req.body;
  const forex = await axios.get(
    `https://api.currencybeacon.com/v1/latest?symbols=${currencies}&${process.env.CB_API_KEY}`
  );
  try {
    const rates = forex.data.response.rates;
    const filterArray = currencies;

    const filteredRates = Object.keys(rates)
      .filter((key) => filterArray.includes(key))
      .reduce((obj, key) => {
        obj[key] = rates[key];
        return obj;
      }, {});

    Object.keys(filteredRates).map((item) =>
      updateCurrency(item, filteredRates[item])
    );

    const updatedList = await getUserForex(currencies);
    console.log(updatedList);
    return res.status(200).send(updatedList);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.post("/", async (req, res) => {
  const tickers = Array(req.body.data).toString();

  const stocks = await axios.get(
    `https://api.twelvedata.com/quote?symbol=${tickers}&interval=1day&outputsize=31&apikey=${process.env.TWELVEDATA_API_KEY}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `apikey ${process.env.TWELVEDATA_API_KEY}`,
      },
    }
  );
  try {
    const data = stocks.data;

    res.status(200).send(data);
  } catch (error) {
    return console.error(error);
  }
});

router.post("/forex/user", async (req, res) => {
  const { currencies } = req.body;
  const forexData = await Currency.find({ currencyCode: { $in: currencies } });
  try {
    res.status(200).send(forexData);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
