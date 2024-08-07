import axios from "axios";

export const sendEmail = async (emailData, callback, clear) => {
  const data = {
    service_id: "gmail",
    template_id: "template_Rq3s9o8b",
    user_id: "user_G4m0Vhk6hpxUONewRQh00",
    template_params: {
      name: emailData.name,
      email: emailData.email,
      subject: emailData.subject,
      message: emailData.message,
      reply_to: emailData.email,
    },
    accessToken: "d7d0bcba2d50ec0717447cf511edd8d3",
  };
  try {
    const res = await axios.post(
      "https://api.emailjs.com/api/v1.0/email/send",
      data
    );

    console.log(res);
    callback(res.data.message, "success");
    return clear();
  } catch (err) {
    console.log(err);
    return callback(err.message, "error");
  }
};
