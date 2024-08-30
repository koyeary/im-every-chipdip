import { useState } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { sendEmail } from "../../utils/API";
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
    severity === "success" && handleClear();
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

    sendEmail(emailData, sendToast);
  };

  return (
    <form
      onSubmit={handleSend}
      style={{
        width: "90%",
        maxWidth: 800,
        margin: "auto",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        height: "calc(100% - 50px)",
        overflow: "auto",
        scrollbarWidth: "none",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {msg === "" ? (
        <div className="header-wrap">
          <h1 className="contact-header">Send me a message.</h1>
          <h2 className="subheader">
            You can also contact me at katyeary @ gmail dot com
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
          required
        />
        <TextField
          onChange={handleChange}
          name="email"
          id="outlined-basic"
          label="Your Email"
          value={email}
          required
        />
        <TextField
          onChange={handleChange}
          name="subject"
          id="outlined-basic"
          label="Subject"
          value={subject}
          required
        />
        <TextField
          onChange={handleChange}
          name="message"
          id="outlined-basic"
          label="Message"
          multiline
          rows={10}
          value={message}
          required
        />
        <Button
          aria-label="Send"
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
