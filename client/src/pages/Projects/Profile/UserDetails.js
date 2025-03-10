import { useState } from "react";
import useUser from "../../../hooks/useUser";

import Alert from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Snackbar from "@mui/material/Snackbar";
import Typography from "@mui/material/Typography";

import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Img from "../../About/Images/sm-Kat_Yeary-6BW.png";
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

  const colors = ["#21387a", "#598cfa", "#4078c0", "#6cc644", "#7366f0"];

  return (
    <>
      {!edit ? (
        <Card
          maxWidth="xs"
          variant="outlined"
          sx={{
            p: 1,
            my: 5,
            borderRadius: 2,
            width: "100%",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <Avatar alt={currentUser?.name} src={Img} sx={{ mx: 1 }} />
              <span style={{ alignSelf: "flex-end" }}>{currentUser.name}</span>
            </Typography>
            <Typography sx={{ color: "text.secondary", mt: 1.5, mx: 1 }}>
              {currentUser?.pronouns ? currentUser.pronouns : ""}
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 1.5, mx: 1 }}>
              {currentUser?.title ? currentUser.title : "Title"}
            </Typography>
            <Typography variant="body1" sx={{ ml: 2, mt: 1 }}>
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
          <CardActions>
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
