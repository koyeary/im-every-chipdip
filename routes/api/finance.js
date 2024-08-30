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

router.get("/forex", async (req, res) => {
  try {
    const results = await getForex();
    return res.status(200).json(results);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post("/forex", async (req, res) => {
  const { currencies } = req.body;
  console.log("req", currencies);
  try {
    const results = await axios.get(
      `https://api.currencybeacon.com/v1/latest${process.env.CB_API_KEY}`
    );
    const localData = await getUserForex(currencies);
    const currentEx = results.data;
    const update = localData.map(
      async (data) =>
        await updateCurrency(
          data.currencyCode,
          currentEx.rates[data.currencyCode],
          currentEx.date
        )
    );

    res.status(200).json(update);

    /*     const update = await updateCurrencies(
      localData,
      current.data.date,
      current.data.rates
    ); */
    //console.log("finished");
    /*     const newData = localData.map((l, index) =>
      updateCurrencies(
        l,
        current.data.date,
        current.data.rates[`${l.currencyCode}`]
      )
    ); */

    //return res.status(200).json(update);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
