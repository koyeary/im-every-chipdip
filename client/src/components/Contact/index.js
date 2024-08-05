import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./Contact.css";

const Contact = ({ darkMode }) => {
  // Your component logic here

  return (
    <div
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
      <div className="header-wrap">
        <h1 className="contact-header">Send me a message.</h1>
        <h2 className="subheader">
          Or contact me directly at katyeary @ gmail dot com
        </h2>
      </div>
      <TextField id="outlined-basic" label="Your Name" />
      <TextField id="outlined-basic" label="Your Email" />
      <TextField id="outlined-basic" label="Subject" />
      <TextField id="outlined-basic" label="Message" multiline rows={10} />
      <Button style={{ width: 200, margin: "0 auto" }} variant="contained">
        Send
      </Button>
    </div>
  );
};

export default Contact;
