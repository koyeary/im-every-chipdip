import { useState } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";
import { sendEmail } from "../../actions/Contact";
import "./Contact.css";

const Contact = ({ darkMode }) => {
  const [show, setShow] = useState(false);
  const [severity, setSeverity] = useState("");
  const [msg, setMsg] = useState("");
  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { name, email, subject, message } = emailData;

  const handleChange = (e) => {
    e.preventDefault();

    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const sendToast = (msg, severity) => {
    setSeverity(severity);
    setMsg(msg);
  };

  const handleClear = () => {
    setEmailData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleSend = (e) => {
    e.preventDefault();
    sendEmail(emailData, sendToast, handleClear);
    /*  emailjs
      .send(
        "default_service",
        "template_Rq3s9o8b",
        emailData,
        "user_G4m0Vhk6hpxUONewRQh00",
       
      )
      .then(
        (result) => {
          console.log(result.text);
          sendToast(result.text, "success");
          handleClear();
        },
        (error) => {
          console.log(error.text);
          sendToast(error.text, "error");
        }
      ); */
  };

  return (
    <form
      onSubmit={handleSend}
      style={{
        width: "90%",
        maxWidth: 800,
        margin: "40px auto",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        height: "calc(100% - 50px)",
        overflow: "auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {msg === "" ? (
        <div className="header-wrap">
          <h1 className="contact-header">Send me a message.</h1>
          <h2 className="subheader">
            Or contact me directly at katyeary @ gmail dot com
          </h2>
        </div>
      ) : (
        <>
          <div className="header-wrap">
            <h1 className="contact-header">Send me a message.</h1>
          </div>
          <Alert severity={severity} style={{ zIndex: 1000 }}>
            <AlertTitle>
              {severity.charAt(0).toUpperCase() + severity.slice(1)}
            </AlertTitle>
            {msg}
          </Alert>
        </>
      )}
      <>
        <TextField
          onChange={handleChange}
          name="name"
          id="outlined-basic"
          label="Your Name"
          value={name}
        />
        <TextField
          onChange={handleChange}
          name="email"
          id="outlined-basic"
          label="Your Email"
          value={email}
        />
        <TextField
          onChange={handleChange}
          name="subject"
          id="outlined-basic"
          label="Subject"
          value={subject}
        />
        <TextField
          onChange={handleChange}
          name="message"
          id="outlined-basic"
          label="Message"
          multiline
          rows={10}
          value={message}
        />
        <Button
          style={{ width: 200, margin: "0 auto" }}
          variant="contained"
          type="submit"
        >
          Send
        </Button>
      </>
    </form>
  );
};

export default Contact;
