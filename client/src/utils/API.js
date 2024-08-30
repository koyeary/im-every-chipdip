import axios from "axios";

export const getUser = async () => {
  await axios
    .get("http://localhost:3001/api/user")
    .then((res) => {
      console.log(res.data);

      //return setUser(res.data.data);
    })
    .catch((err) => console.log(err.message));
};

export const getUserPortfolio = async (userId) => {
  await axios
    .post("http://localhost:3001/api/finance", {
      headers: {
        "Content-Type": "application/json",
      },
      data: userId,
    })

    .then((res) => {
      console.log(res);

      /*    setData(res.data.data);
      setMessage(res.data.message); */

      return setData(arr.push(res.data.data));
    })
    .catch((err) => console.log(err.message));
};

export const getStockData = (tickers, setPerformance) => {
  axios
    .post("http://localhost:3001/api/finance/", {
      headers: {
        "Content-Type": "application/json",
      },
      data: tickers,
    })
    .then((res) => {
      const data = res.data;

      let arr = [];
      Object.values(data).map((d) => {
        arr.push(d);
      });
      console.log(arr);
      return setPerformance(arr);
    })
    .catch((err) => console.log(err));
};

export const getForexData = async (currencies, setForexData) => {
  try {
    const res = await axios.post("http://localhost:3001/api/finance/forex", {
      currencies: currencies,
    });
    /*     const filterData = res.data.data.filter((currency) =>
      currencies.includes(currency.symbol)
    ); */
    console.log(currencies);
    return setForexData(res.data);

    /*     let rates = res.data.response.rates;
    let watched = [{ USD: 1 }];

    Object.keys(rates).map((rate) => {
      currencies.includes(rate) && watched.push({ [rate]: rates[rate] });
    });
    setForexData(watched); */
  } catch (err) {
    console.log(err);
  }
};

export const getUserId = async (email) => {
  await axios
    .post("http://localhost:3001/api/user", {
      headers: {
        "Content-Type": "application/json",
      },
      email: email,
    })
    .then((res) => {
      console.log(res.data);

      //return setUserId(res.data.data);
    })
    .catch((err) => console.log(err.message));
};

export const sendEmail = async (emailData, callback) => {
  const data = {
    service_id: "gmail",
    template_id: "portfolio",
    user_id: creds.EJS_PUBLIC_KEY,
    template_params: {
      name: emailData.name,
      email: emailData.email,
      subject: emailData.subject,
      message: emailData.message,
      reply_to: emailData.email,
    },
    accessToken: creds.EJS_PRIVATE_KEY,
  };
  try {
    const res = await axios.post(
      "https://api.emailjs.com/api/v1.0/email/send",
      data
    );

    console.log(res);
    return callback(res.data.message, "success");
  } catch (err) {
    console.log(err);
    return callback(err.message, "error");
  }
};
