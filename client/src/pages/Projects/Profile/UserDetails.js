import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { updateUserDetails, updatePassword } from "../../../utils/API";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
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

const UserDetails = () => {
  const { user, saveUser } = useUser();
  const [edit, setEdit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [data, setData] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedIn: "",
    github: "",
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

  /*  const handleSubmit = (e, formData) => {
    e.preventDefault();

    updateUserDetails(formData, saveUser);
    setEdit(false);
  }; */

  /*   const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    updatePassword(password, email);
  }; */

  const fields = ["name", "email", "linkedIn", "github"];
  const icons = [
    <PermIdentityIcon />,
    <EmailIcon />,
    <LinkedInIcon />,
    <GitHubIcon />,
  ];
  const colors = ["#21387a", "#598cfa", "#4078c0", "#6cc644"];

  return loading ? (
    /* create hooks loading feature later */
    <div>Loading</div>
  ) : (
    <div
      style={{
        margin: "auto",
        width: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {edit ? (
        <>
          <UserForm user={user} handleCancel={handleCancel} />
        </>
      ) : (
        <>
          <UserProfile
            user={user}
            colors={colors}
            icons={icons}
            fields={fields}
            edit={edit}
            setEdit={setEdit}
          />
          {!edit && (
            <Button variant="contained" onClick={handleEdit}>
              Edit Profile Details
            </Button>
          )}
        </>
      )}

      {/*  <PasswordForm /> */}
      {!changePassword && (
        <Button onClick={setChangePassword(true)}>Update password</Button>
      )}
      {/*  <form onSubmit={handleUpdatePassword}>
          <FormControl
            sx={{ width: "100%", backgroundColor: "#FFF" }}
            size="small"
            margin="dense"
            label="New Password"
            required
          >
            <InputLabel
              sx={{ backgroundColor: "#FFF" }}
              color="secondary"
              htmlFor="password"
            >
              New Password
            </InputLabel>
            <OutlinedInput
              color="secondary"
              name="password"
              value={newPassword}
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <TextField
            size="small"
            margin="dense"
            sx={{ backgroundColor: "#FFF", width: "100%" }}
            type={showPassword ? "text" : "password"}
            label="Re-enter New Password"
            color={checkPasswordMatch}
            helperText={
              checkPasswordMatch === "error"
                ? "Passwords do not match"
                : checkPasswordMatch === "success"
                ? "Passwords match"
                : ""
            }
            name="rePassword"
            value={rePassword}
            onChange={handleChange}
            required
          />
          {changePassword && (
            <>
              <Button
                disabled={checkPasswordMatch === "error"}
                onClick={() => setChangePassword(false)}
                type="submit"
              >
                Save Update
              </Button>
              <Button type="reset" onClick={() => setChangePassword(false)}>
                Cancel
              </Button>
            </>
          )}
        </form> */}
    </div>
  );
};

export default UserDetails;
