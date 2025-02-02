import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { updateUserDetails, updatePassword } from "../../../utils/API";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Divider from "@mui/material/Divider";
import EmailIcon from "@mui/icons-material/Email";
import FormControl from "@mui/material/FormControl";
import GitHubIcon from "@mui/icons-material/GitHub";
import Img from "../../About/Images/sm-Kat_Yeary-6BW.png";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LinkIcon from "@mui/icons-material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import TextField from "@mui/material/TextField";
import UserProfile from "./UserProfile";
import UserForm from "./UserForm";

import PasswordForm from "./PasswordForm";

import useUser from "../../../hooks/useUser";
import Container from "@mui/material/Container";

const currentUser = () => {
  const { user, saveUser } = useUser();
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const [edit, setEdit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [updateMode, setUpdateMode] = useState(false);
  const [data, setData] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    email: "",
    linkedIn: "",
    github: "",
    site: "",
    password: "",
    rePassword: "",
    newPassword: "",
  });

  const { name, email, linkedIn, github, password, rePassword, newPassword } =
    formData;

  const checkPasswordMatch =
    password === "" && rePassword === ""
      ? "secondary"
      : password === rePassword
      ? "success"
      : "error";

  const handleCancel = (e) => {
    e.preventDefault();

    setEdit(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEdit(true);
  };

  /*   const handleChange = (e) => {
    e.preventDefault();

    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  }; */

  const handleSubmit = (e, formData) => {
    e.preventDefault();

    updateUserDetails(formData, saveUser);
    setEdit(false);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    updatePassword(password, email);
  };

  const fields = ["name", "email", "linkedIn", "github"];
  const icons = [
    <PermIdentityIcon />,
    <EmailIcon />,
    <LinkedInIcon />,
    <GitHubIcon />,
  ];
  const colors = ["#21387a", "#598cfa", "#4078c0", "#6cc644", "#7366f0"];

  return (
    <div
      style={{
        margin: "auto",
        width: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          justifyContent: "center",
          gap: 20,
          height: "100vh",
        }}
      >
        {!edit ? (
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined" sx={{ padding: 1, borderRadius: 2 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ display: "flex", flexDirection: "row" }}
                >
                  <Avatar alt={currentUser.name} src={Img} sx={{ mx: 1 }} />
                  <span style={{ alignSelf: "flex-end" }}>
                    {currentUser.name}
                  </span>
                </Typography>
                <Typography sx={{ color: "text.secondary", mt: 1.5, mx: 1 }}>
                  {currentUser.pronouns ? currentUser.pronouns : ""}
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 1.5, mx: 1 }}>
                  {currentUser.title ? currentUser.title : "Title"}
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
                      {currentUser.linkedIn
                        ? currentUser.linkedIn.replace("https://www.", "")
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
                      {currentUser.github
                        ? currentUser.github.replace("https://www.", "")
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
                      {currentUser.site
                        ? currentUser.site.replace("https://www.", "")
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
          </Box>
        ) : (
          <UserForm user={user} handleCancel={handleCancel} />
        )}{" "}
        :
        {/*} (
          <UserProfile
            user={user}
            colors={colors}
            icons={icons}
            fields={fields}
            edit={edit}
            setEdit={setEdit}
          />
        )} */}
        {/*       {!edit ? (
          <Button variant="contained" onClick={handleEdit}>
            Edit Profile
          </Button>
        ) : (
          <>
            <ButtonGroup fullWidth>
              <Button type="submit" variant="contained" onClick={handleSubmit}>
                Save
              </Button>
              <Button onClick={handleCancel} type="reset">
                Cancel
              </Button>
            </ButtonGroup>
            <Button
              onClick={(e) => {
                e.preventDefault();
                setUpdateMode(true);
              }}
            >
              Change Password
            </Button>
          </>
        )} */}
      </Container>

      {/*       {updateMode && (
        <>
          <PasswordForm
            formData={formData}
            setFormData={setFormData}
            checkPasswordMatch={checkPasswordMatch}
="reset" onClick={() => setUpdateMode(false)}>
              Cancel
            </Button>
          </ButtonGroup>
        </>
      )} */}
    </div>
  );
};

export default currentUser;
