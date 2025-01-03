import * as React from "react";
import About from "..";
import Contact from "../Contact";
import CV from "../../../components/CV";
import Projects from "../Projects";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Page = ({ linkTitle, dialog }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={handleClickOpen} className="header-sub-div">
        {linkTitle}
      </button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          sx={{
            position: "relative",
            backgroundColor: "#4061d7",
          }}
        >
          <Toolbar style={{ justifyContent: "space-between" }}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography
              variant="h5"
              component="div"
              style={{ fontWeight: 100 }}
            >
              {dialog}
            </Typography>
          </Toolbar>
        </AppBar>
        {dialog === "About" && <About />}
        {dialog === "Contact" && <Contact />}
        {dialog === "C.V." && <CV />}
        {dialog === "Projects" && <Projects />}
      </Dialog>
    </>
  );
};

export default Page;
