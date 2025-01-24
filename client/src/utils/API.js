import axios from "axios";
import env from "react-dotenv";

const formatData = (data) => {
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

export const sendEmail = async (emailData, callback) => {
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
  try {
    const res = await axios.post(
      "https://api.emailjs.com/api/v1.0/email/send",
      data
    );
    console.log(res);
    callback(res.data.message, "success");
  } catch (err) {
    console.log(err);
    callback(err.message, "error");
  }
};

export const getUserDetails = async (saveUser) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    console.log("No user found in localStorage");
    return;
  }
  try {
    const res = await axios.post("http://localhost:3001/api/user/details", {
      id: user.id,
    });
    saveUser(res.data);
  } catch (err) {
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

export const createNewUser = async (name, email, password, callback) => {
  try {
    const results = await axios.post("http://localhost:3001/api/user/create", {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
      name: name,
      email: email,
      password: password,
    });
    callback(results.data);
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
};

export const updateUserDetails = async (formData, saveUser, finishUpdate) => {
  const { name, email, github, linkedIn } = formData;
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
    });
    saveUser(res.data);
    finishUpdate(res.data);
  } catch (err) {
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
  finishLogin
) => {
  try {
    const res = await axios.post("http://localhost:3001/api/auth", {
      headers: {
        "Content-Type": "application/json",
      },
      email: email,
      password: password,
    });

    setAuthToken(res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data));
    saveUser(res.data);
    finishLogin(res.data);
  } catch (err) {
    finishLogin(err);
    console.log(err.message);
  }
};

export const logoutUser = (finsihLogout) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  delete axios.defaults.headers.common["x-auth-token"];
  console.log("User logged out and token removed from localStorage");
  //finishLogout();
};
