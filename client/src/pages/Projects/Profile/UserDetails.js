import { useState } from "react";
import useUser from "../../../hooks/useUser";

import Alert from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Snackbar from "@mui/material/Snackbar";
import Typography from "@mui/material/Typography";

import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import UserForm from "./UserForm";

const UserDetails = () => {
  const { user } = useUser();
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const [edit, setEdit] = useState(false);
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState({
    severity: "",
    msg: "",
  });

  const { severity, msg } = alert;
  const handleClose = () => {
    setShow(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEdit(true);
  };

  const sendToast = (msg, severity) => {
    setAlert({ msg, severity });
    setShow(true);
  };

  const Img = `https://github.com/koyeary/im-every-chipdip/blob/user-details/${currentUser?.filename}?raw=true`;
  const colors = ["#21387a", "#598cfa", "#4078c0", "#6cc644", "#7366f0"];

  return (
    <>
      {!edit ? (
        <Card
          raised={true}
          sx={{
            display: "flex",
          }}
        >
          <CardMedia
            sx={{ width: "fit-content", height: "auto" }}
            component="img"
            image={Img}
            alt={currentUser?.name}
          />
          <Box sx={{ display: "flex" }}>
            <CardContent
              sx={{
                flex: "1 0 auto",
                ml: 1,
                height: "100%",
                /*       minWidth: 275, */
              }}
            >
              <Typography variant="h5" component="div">
                <span style={{ alignSelf: "flex-end" }}>
                  {currentUser.name}
                </span>
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {currentUser?.title ? currentUser.title : "Title"}
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {currentUser?.pronouns ? currentUser.pronouns : ""}
              </Typography>
              <Typography variant="body1" sx={{ ml: 1, mt: 2 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 5,
                    alignContent: "center",
                  }}
                >
                  <EmailIcon sx={{ m: 0.5, color: colors[1] }} />
                  <div style={{ paddingTop: 4 }}>{currentUser.email}</div>
                </div>{" "}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 5,
                    alignContent: "center",
                  }}
                >
                  <LinkedInIcon sx={{ m: 0.5, color: colors[2] }} />
                  <div style={{ paddingTop: 4 }}>
                    {currentUser?.linkedIn
                      ? currentUser?.linkedIn.replace("https://www.", "")
                      : "LinkedIn"}{" "}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 5,
                    justifyContent: "left",
                  }}
                >
                  <GitHubIcon sx={{ m: 0.5, color: colors[3] }} />
                  <div style={{ paddingTop: 4 }}>
                    {currentUser?.github
                      ? currentUser?.github.replace("https://www.", "")
                      : "GitHub"}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 5,
                    alignContent: "center",
                  }}
                >
                  <LinkIcon sx={{ m: 0.5, color: colors[4] }} />
                  <div style={{ paddingTop: 4 }}>
                    {currentUser?.site
                      ? currentUser?.site.replace("https://www.", "")
                      : "Website"}
                  </div>
                </div>
              </Typography>
            </CardContent>
          </Box>
          <CardActions
            sx={{
              alignSelf: "flex-end",
              ml: -2,
            }}
          >
            <Button size="small" variant="outlined" onClick={handleEdit}>
              Edit
            </Button>
          </CardActions>
        </Card>
      ) : (
        <UserForm
          user={user}
          setEdit={setEdit}
          sendToast={sendToast}
          setShow={setShow}
        />
      )}

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
    </>
  );
};

export default UserDetails;
