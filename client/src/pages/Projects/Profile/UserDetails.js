import { useState } from "react";
import { Link } from "react-router-dom";
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
            maxWidth: 345,
          }}
        >
          {
            <CardMedia
              sx={{ height: "fit-content" }}
              component="img"
              image={
                currentUser?.filename
                  ? Img
                  : `https://robohash.org/${currentUser?.name.replace(
                      /\s+/g,
                      ""
                    )}`
              }
              alt={currentUser?.name}
            />
          }

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <span style={{ alignSelf: "flex-end" }}>{currentUser?.name}</span>
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {currentUser?.title ? currentUser?.title : "Title"}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {currentUser?.pronouns ? currentUser?.pronouns : ""}
            </Typography>
            <Typography variant="body1" sx={{ ml: 1, mt: 2 }}>
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 5,
                  alignContent: "center",
                }}
              >
                <EmailIcon sx={{ m: 0.5, color: colors[1] }} />
                <span style={{ paddingTop: 4 }}>{currentUser?.email}</span>
              </span>{" "}
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 5,
                  alignContent: "center",
                }}
              >
                <LinkedInIcon sx={{ m: 0.5, color: colors[2] }} />
                <span style={{ paddingTop: 4 }}>
                  {currentUser?.linkedIn ? (
                    <Link to={currentUser?.linkedIn} target="_blank">
                      {currentUser?.linkedIn.replace("https://www.", "")}
                    </Link>
                  ) : (
                    "LinkedIn"
                  )}
                </span>
              </span>
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 5,
                  justifyContent: "left",
                }}
              >
                <GitHubIcon sx={{ m: 0.5, color: colors[3] }} />
                <span style={{ paddingTop: 4 }}>
                  {currentUser?.github ? (
                    <Link to={currentUser?.github} target="_blank">
                      {currentUser?.github.replace("https://www.", "")}
                    </Link>
                  ) : (
                    "GitHub"
                  )}
                </span>
              </span>
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 5,
                  alignContent: "center",
                }}
              >
                <LinkIcon sx={{ m: 0.5, color: colors[4] }} />
                <span style={{ paddingTop: 4 }}>
                  {currentUser?.site ? (
                    <Link to={currentUser?.site} target="_blank">
                      {currentUser?.site.replace("https://www.", "")}
                    </Link>
                  ) : (
                    "Website"
                  )}
                </span>
              </span>
            </Typography>
          </CardContent>

          <CardActions
            sx={{
              alignSelf: "flex-end",
              ml: 2,
              mb: 1,
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
