import axios from "axios";
import creds from "../creds";

/* export const sendEmail = async (data, callback) => {
  try {
    const res = await axios.post("/api/contact", data);
    console.log(data);
    callback(res.data.message, "success");
  } catch (err) {
    callback(err.message, "error");
  }
}; */

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
