import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { getUserById, updateUserDetails, logoutUser } from "../../../utils/API";

import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";

import useUser from "../../../hooks/useUser";
import { useFormControl } from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import { set } from "mongoose";

const ProfileForm = () => {
  const { user, saveUser } = useUser();
  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedIn: "",
    github: "",
    password: "",
    rePassword: "",
    curPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [updatePassword, setUpdatePassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { name, email, linkedIn, github, password, rePassword, curPassword } =
    formData;

  const handleCancel = (e) => {
    e.preventDefault();
    setEdit(false);
    setFormData({
      name: user.name,
      email: user.email,
      linkedIn: user.linkedIn,
      github: user.github,
    });
  };
  const handleEdit = (e) => {
    e.preventDefault();
    setEdit(true);
  };

  const handleChange = (e) => {
    e.preventDefault();

    edit ? setFormData({ ...formData, [e.target.name]: e.target.value }) : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateUserDetails(formData, saveUser);
    setEdit(false);
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    console.log("update password");
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const checkPasswordMatch =
    password === "" && rePassword === ""
      ? "secondary"
      : password === rePassword
      ? "success"
      : "error";

  const fetchData = useCallback(async () => {
    await getUserById(user, saveUser);
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      return logoutUser(navigate("/login"));
    }

    if (localStorage.getItem("token")) {
      fetchData().then(() => {
        const userDetails = JSON.parse(localStorage.getItem("user"));
        setFormData({
          name: userDetails.name,
          email: userDetails.email,
          linkedIn: userDetails.linkedIn,
          github: userDetails.github,
        });
      });
    }
  }, [fetchData]);

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
      <form
        className="profile-form"
        style={{ cursor: edit ? "auto" : "pointer" }}
      >
        <TextField
          variant="standard"
          margin="dense"
          readOnly={!edit}
          size="small"
          label="Name"
          color="secondary"
          sx={{ backgroundColor: edit && "#FFF", width: "100%" }}
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />

        <TextField
          variant="standard"
          readOnly={!edit}
          margin="dense"
          size="small"
          label="Email"
          color="secondary"
          sx={{ backgroundColor: edit && "#FFF", width: "100%" }}
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <TextField
          variant="standard"
          readOnly={!edit}
          margin="dense"
          size="small"
          label="LinkedIn"
          color="secondary"
          sx={{ backgroundColor: edit && "#FFF", width: "100%" }}
          type="url"
          id="linkedIn"
          name="linkedIn"
          value={linkedIn}
          onChange={handleChange}
        />

        <TextField
          variant="standard"
          readOnly={!edit}
          margin="dense"
          size="small"
          label="GitHub"
          color="secondary"
          sx={{ backgroundColor: edit && "#FFF", width: "100%" }}
          type="url"
          id="github"
          name="github"
          value={github}
          onChange={handleChange}
        />
      </form>
      {!edit ? (
        <Button variant="contained" onClick={handleEdit}>
          Edit
        </Button>
      ) : (
        <div style={{ margin: "auto", width: "fit-content" }}>
          <Button type="submit" variant="contained" onClick={handleSubmit}>
            Save
          </Button>
          <Button onClick={handleCancel} type="submit" variant="contained">
            Cancel
          </Button>
        </div>
      )}
      {!updatePassword ? (
        <Button onClick={() => setUpdatePassword(!updatePassword)}>
          Update password
        </Button>
      ) : (
        <form onSubmit={handleUpdatePassword}>
          <FormControl
            sx={{ width: "100%" }}
            size="small"
            margin="dense"
            required
          >
            <InputLabel color="secondary" htmlFor="curPassword">
              Current Password
            </InputLabel>
            <OutlinedInput
              sx={{ backgroundColor: "#FFF" }}
              label="Current Password"
              size="small"
              color="secondary"
              name="curPassword"
              value={curPassword}
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
              placeholder="Curent Password"
            />
          </FormControl>

          <TextField
            size="small"
            margin="dense"
            sx={{ backgroundColor: "#FFF", width: "100%" }}
            label="Enter New Password"
            color="secondary"
            name="password"
            value={password}
            onChange={handleChange}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
          />

          <TextField
            size="small"
            margin="dense"
            sx={{ backgroundColor: "#FFF", width: "100%" }}
            type="password"
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
            placeholder="Re-enter Password"
            required
          />
          {/*    <MyFormHelperText />
          </FormControl> */}
          {updatePassword ? (
            <>
              <Button
                disabled={checkPasswordMatch === "error"}
                onClick={() => console.log("update password")}
                type="submit"
              >
                Update
              </Button>
              <Button onClick={() => console.log("cancel update password")}>
                Cancel
              </Button>
            </>
          ) : (
            <Button onClick={() => setUpdatePassword(!updatePassword)}>
              Update Password
            </Button>
          )}
        </form>
      )}
    </div>
  );
};

export default ProfileForm;
