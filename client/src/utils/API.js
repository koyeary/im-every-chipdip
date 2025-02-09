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

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getOrgChart = async (callback) => {
  try {
    const res = await api.get("/team");
    console.log(res.data);
    callback(res.data.data);
  } catch (err) {
    console.log(err);
  }
};

export const getUser = async () => {
  try {
    const res = await api.get("/user");
    console.log(res.data);
  } catch (err) {
    console.log(err.message);
  }
};

export const getUserPortfolio = async (userId) => {
  try {
    const res = await api.post("/finance", {
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
    const res = await api.get("/finance/all", {
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
    const res = await api.post("/finance/", {
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
    const update = await api.post("/finance/forex/user", {
      currencies: currencies,
    });
    console.log(update);
    setForexData(update);
  } catch (err) {
    console.log(err);
  }
};

export const getForexData = async (currencies, callback) => {
  try {
    const res = await api.post("/finance/forex", {
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
    const res = await api.post("/user", {
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

export const sendEmail = async (emailData, sendToast, reset) => {
  const { name, from, subject, text } = emailData;

  let regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regEmail.test(from)) {
    return sendToast("Invalid Email Address", "error");
  }

  const data = {
    service_id: "gmail",
    template_id: "portfolio",
    user_id: env.EJS_PUBLIC_KEY,
    template_params: {
      name: name,
      email: from,
      subject: subject,
      message: text,
      reply_to: from,
    },
    accessToken: env.EJS_PRIVATE_KEY,
  };

  try {
    const res = await api.post(
      "https://api.emailjs.com/api/v1.0/email/send",
      data
    );

    console.log(res);
    sendToast("Your message has been sent.", "success");
    return reset("success");
  } catch (err) {
    sendToast(`Something went wrong. ${err.message}`, "error");
  }
};

export const getUserById = async (id, saveUser, sendToast, navigate) => {
  try {
    console.log("saving user details");
    console.log(id);
    const res = await api.post("/user/details", {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
      id: id,
    });

    console.log(res.data);
    sendToast("User authenticated", "success");

    navigate("/profile");
    return saveUser(res.data);
  } catch (err) {
    sendToast(err.message, "error");
    console.log(err.message);
  }
};

export const deleteUser = async (email) => {
  try {
    const res = await api.delete("/user/delete", {
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
    const res = await api.post("/user/create", {
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
    const res = await api.put("/user/update/np", {
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
  const { name, email, github, linkedIn, pronouns, site, title, filename } =
    formData;

  try {
    const res = await api.put("/user/update", {
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
      filename: filename,
    });

    saveUser(res.data);
    sendToast("User details updated", "success");
  } catch (err) {
    sendToast(err.message, "error");
    console.log(err.message);
  }
};

export const uploadProfilePic = async (file, user, saveUser, close) => {
  console.log(file);

  const formData = new FormData();
  formData.append("image", file);
  try {
    const res = await api.post("/file", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-auth-token": localStorage.getItem("token"),
        enctype: "multipart/form-data",
      },
    });

    let user = JSON.parse(localStorage.getItem("user"));
    user.filename = res.data.data.filename;
    console.log(user);

    saveUser({ ...user, filename: res.data.data.filename });

    close();
    console.log(res.data.data.filename);

    //updateUserDetails(user, saveUser, () => {});
    // console.log({ filename: res.data });
  } catch (err) {
    console.log(err.message);
  }
};

export const getProfilePic = async (user) => {
  try {
    const res = await api.post("/pic", {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-auth-token": localStorage.getItem("token"),
      },
      data: user,
    });
    console.log(res.data);
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteProfilePic = async (formData) => {
  try {
    const res = await api.post("/pic/delete", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-auth-token": localStorage.getItem("token"),
      },
    });
    console.log(res.data);
  } catch (err) {
    console.log(err.message);
  }
};

export const setAuthToken = (token, user, saveUser) => {
  if (user) {
    //localStorage.setItem("user", JSON.stringify(user));
    saveUser(user);
  }

  if (token) {
    api.defaults.headers.common["x-auth-token"] = token;
    localStorage.setItem("token", token);
  } else {
    delete api.defaults.headers.common["x-auth-token"];
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
    const res = await api.post("/auth", {
      email: email,
      password: password,
    });

    setAuthToken(res.data.token, res.data.user, saveUser);
    sendToast("User authenticated", "success");
  } catch (err) {
    sendToast(err.message, "error");
    console.log(err.message);
  }
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  //localStorage.removeItem("current");
  delete api.defaults.headers.common["x-auth-token"];
  console.log("User logged out and token removed from localStorage");
};
