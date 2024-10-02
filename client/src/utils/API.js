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

export const getAllTickers = () => {
  axios
    .get("http://localhost:3001/api/finance/all", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
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

export const getUserForex = async (currencies, setForexData) => {
  try {
    const update = await axios.post(
      "http://localhost:3001/api/finance/forex/user",
      {
        currencies: currencies,
      }
    );
    console.log(update);
    setForexData(update);
    /*     console.log(update);
    if (update.status === 200) {
      const get = await axios.post(
        "http://localhost:3001/api/finance/forex/user",
        {
          filter: currencies,
        }
      );
      console.log(get);
      return setForexData(get.data);
    } */
  } catch (err) {
    console.log(err);
  }
};

export const getForexData = async (currencies, callback) => {
  try {
    const res = await axios.post("http://localhost:3001/api/finance/forex", {
      currencies: currencies,
    });
    const rates = res;
    callback(rates.data);
    console.log(rates.data);
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
