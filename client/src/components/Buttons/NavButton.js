import { useState, useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./NavButton.css";
import CloseIcon from "@mui/icons-material/Close";

const NavButton = () => {
  const [open, setOpen] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);
  const [hover, setHover] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    invoice: "",
    password: "",
  });

  const buttonStyle = {
    border: "none",
    color: "#FFF",
    backgroundColor: "#598cfa90",
    padding: "7px 20px",
    margin: "0 5px",
    textAlign: "center",
    textDecoration: "none",
    cursor: "pointer",
    borderRadius: "16px",
    minWidth: "fit-content",
    textWrap: "nowrap",
  };

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleOpenAccount = (e) => {
    e.preventDefault();
    setOpenAccount(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenAccount(false);
    setHover(false);
  };

  const handleChange = (e) => {
    e.preventDefault();

    if (e.target.name === "email") {
      setFormData({
        email: e.target.value,
        invoice: "",
      });
    } else if (e.target.name === "invoice") {
      setFormData({
        invoice: e.target.value,
        email: "",
      });
    }
    if (e.target.name === "password") {
      setFormData({
        password: e.target.value,
      });
    }
    console.log(formData);
  };

  const handleMouseOut = (e) => {
    e.preventDefault();
    //handleStyle();
    setTimeout(() => {
      setHover(false);
    }, 2000);
  };

  const handleMouseOver = (e) => {
    e.preventDefault();
    setHover(true);
  };

  //const ref = useRef(null);

  const handleStyle = () => {
    ref !== null
      ? ref.current.style.backgroundColor === "#598cfa"
        ? (ref.current.style.backgroundColor = "#598cfa90")
        : (ref.current.style.backgroundColor = "#598cfa")
      : null;
    //ref.current.style.backgroundColor = "#598cfa";
  };

  return (
    <>
      <div className="button-row" onMouseOver={handleMouseOver}>
        <Button
          /* ref={ref} */
          style={buttonStyle}
          onMouseOut={handleMouseOut}
          //onMouseOver={handleStyle}
        >
          Client Portal
        </Button>

        {hover && (
          <>
            <Button
              /* ref={ref} */
              style={buttonStyle}
              onClick={handleOpen}
              //onMouseOver={handleStyle}
              onMouseOut={handleMouseOut}
            >
              Make a Payment
            </Button>
            <Button
              /* ref={ref} */
              style={buttonStyle}
              onClick={handleOpenAccount}
              //onMouseOver={handleStyle}
              onMouseOut={handleMouseOut}
            >
              My Account
            </Button>
          </>
        )}
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Invoice Number</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your email or invoice number to make a payment.
          </DialogContentText>
          <TextField
            onChange={handleChange}
            autoFocus
            margin="dense"
            id="email"
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={handleChange}
            autoFocus
            margin="dense"
            id="name"
            name="invoice"
            label="Invoice Number"
            type="string"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openAccount}
        onClose={handleClose}
        /*         PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }} */
      >
        <DialogTitle>Login to My Account</DialogTitle>
        <DialogContent>
          <TextField
            onChange={handleChange}
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={handleChange}
            autoFocus
            required
            margin="dense"
            id="password"
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            style={{ marginBottom: "20px" }}
          />
          <DialogContentText>
            If you haven't received an email with your login information, or you
            you can't find your password, please contact me at katyeary @
            gmail.com. You can still make a payment without logging in.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default NavButton;
