import { useState } from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
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

  const handleClose = (severity) => {
    setShow(false);
  };

  const handleClear = (severity) => {
    if (severity === "success") {
      setEmailData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else return;
  };

  const sendToast = (msg, severity) => {
    setMsg(msg);
    setSeverity(severity);
    setShow(true);
    console.log(severity);
  };

  const handleSend = (e) => {
    e.preventDefault();

    sendEmail(emailData, sendToast, handleClear);
  };

  return (
    <div
      style={{
        margin: "40px auto 0 auto",
        minHeight: "fit-content",
        overflow: "auto",
        scrollbarWidth: "none",
      }}
    >
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
          height: "fit-content",
          scrollbarWidth: "none",
          display: "flex",
          overflowX: "hidden",
          justifyContent: "center",
        }}
      >
        <>
          <div className="header-wrap">
            <h1 className="contact-header">Send me a message.</h1>
          </div>
        </>

        <>
          <TextField
            onChange={handleChange}
            name="name"
            id="outlined-basic"
            label="Your Name"
            value={name}
            required
            type="text"
          />
          <TextField
            onChange={handleChange}
            name="email"
            id="outlined-basic"
            label="Your Email"
            value={email}
            type="email"
            required
          />
          <TextField
            onChange={handleChange}
            name="subject"
            id="outlined-basic"
            label="Subject"
            value={subject}
            type="text"
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
            type="text"
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
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={show}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {msg}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;
