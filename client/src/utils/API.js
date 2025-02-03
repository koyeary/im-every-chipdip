import axios from "axios";

import env from "react-dotenv";

export const formatData = (data) => {
  const cLevel = data[1].level;
  const mLevel = data[2].level;
  const dLevel = data[3].level;
  const eLevel = data[4].level;

  const colors = [
    "hsl(214, 70%, 50%)",
    "hsl(43, 70%, 50%)",
    "hsl(168, 70%, 50%)",
    "hsl(34, 70%, 50%)",
    "hsl(51, 70%, 50%)",
    "hsl(15, 70%, 50%)",
    "hsl(140, 70%, 50%)",
  ];

  const locations = [77449, 190542, 34364, 93132];
};

export const getOrgChart = async (callback) => {
  try {
    const res = await axios.get("http://localhost:3001/api/team");
    console.log(res.data);
    callback(res.data.data);
  } catch (err) {
    console.log(err);
  }
};

export const getUser = async () => {
  try {
    const res = await axios.get("http://localhost:3001/api/user");
    console.log(res.data);
  } catch (err) {
    console.log(err.message);
  }
};

export const getUserPortfolio = async (userId) => {
  try {
    const res = await axios.post("http://localhost:3001/api/finance", {
      headers: {
        "Content-Type": "application/json",
      },
      data: userId,
    });
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }
};

export const getAllTickers = async () => {
  try {
    const res = await axios.get("http://localhost:3001/api/finance/all", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};

export const getStockData = async (tickers, setPerformance) => {
  try {
    const res = await axios.post("http://localhost:3001/api/finance/", {
      headers: {
        "Content-Type": "application/json",
      },
      data: tickers,
    });
    const data = res.data;
    let arr = [];
    Object.values(data).map((d) => {
      arr.push(d);
    });
    console.log(arr);
    setPerformance(arr);
  } catch (err) {
    console.log(err);
  }
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
  } catch (err) {
    console.log(err);
  }
};

export const getUserId = async (email) => {
  try {
    const res = await axios.post("http://localhost:3001/api/user", {
      headers: {
        "Content-Type": "application/json",
      },
      email: email,
    });
    console.log(res.data);
  } catch (err) {
    console.log(err.message);
  }
};

export const sendEmail = async (emailData, send, reset) => {
  const data = {
    service_id: "gmail",
    template_id: "portfolio",
    user_id: env.EJS_PUBLIC_KEY,
    template_params: {
      name: emailData.name,
      email: emailData.email,
      subject: emailData.subject,
      message: emailData.message,
      reply_to: emailData.email,
    },
    accessToken: env.EJS_PRIVATE_KEY,
  };
  let regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regEmail.test(data.template_params.email)) {
    return send("Invalid Email Address", "error");
  }

  try {
    const res = await axios.post(
      "https://api.emailjs.com/api/v1.0/email/send",
      data
    );

    if (res.data === "OK") {
      send("Your message has been sent.", "success");
      reset("success");
    } else {
      send("Something went wrong.", "error");
    }
  } catch (err) {
    console.log(err);
    send(err.message, "error");
  }
};

export const getUserById = async (id, saveUser, sendToast) => {
  try {
    console.log("saving user details");
    console.log(id);
    const res = await axios.post("http://localhost:3001/api/user/details", {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
      id: id,
    });

    console.log(res.data);
    sendToast("User authenticated", "success");

    return saveUser(res.data);
  } catch (err) {
    sendToast(err.message, "error");
    console.log(err.message);
  }
};

export const deleteUser = async (email) => {
  try {
    const res = await axios.delete("http://localhost:3001/api/user/delete", {
      headers: {
        "Content-Type": "application/json",
      },
      email: email,
    });
    console.log(res.data);
  } catch (err) {
    console.log(err.message);
  }
};

export const createNewUser = async (
  name,
  email,
  password,
  saveUser,
  sendToast
) => {
  try {
    const res = await axios.post("http://localhost:3001/api/user/create", {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
      name: name,
      email: email,
      password: password,
    });
    sendToast("User created. You can now login to your account", "success");
  } catch (err) {
    sendToast(err.message, "error");
    console.log(err);
  }
};

export const updatePassword = async (newPassword, email, token) => {
  try {
    const res = await axios.put("http://localhost:3001/api/user/update/np", {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
      password: newPassword,
      email: email,
      token: token,
    });
    console.log(res.data);
  } catch (err) {
    console.log(err.message);
  }
};

export const updateUserDetails = async (formData, saveUser, sendToast) => {
  const { name, email, github, linkedIn, pronouns, site, title } = formData;

  try {
    const res = await axios.put("http://localhost:3001/api/user/update", {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },

      name: name,
      email: email,
      github: github,
      linkedIn: linkedIn,
      pronouns: pronouns,
      site: site,
      title: title,
    });

    saveUser(res.data);
    sendToast("User details updated", "success");
  } catch (err) {
    sendToast(err.message, "error");
    console.log(err.message);
  }
};

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
    localStorage.setItem("token", token);
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
    localStorage.removeItem("token");
  }
};

export const authenticateUser = async (
  email,
  password,
  saveUser,
  sendToast
) => {
  try {
    const res = await axios.post("http://localhost:3001/api/auth", {
      headers: {
        "Content-Type": "application/json",
      },
      email: email,
      password: password,
    });

    console.log(res.data);
    setAuthToken(res.data.token);

    const user = localStorage.setItem("user", JSON.stringify(res.data));
    saveUser(user);
    console.log(user);

    return getUserById(res.data.id, saveUser, sendToast);
  } catch (err) {
    console.log(err.message);
  }
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  //localStorage.removeItem("current");
  delete axios.defaults.headers.common["x-auth-token"];
  console.log("User logged out and token removed from localStorage");
};
