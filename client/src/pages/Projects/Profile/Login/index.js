import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import {
  createNewUser,
  authenticateUser,
  getUserById,
} from "../../../../utils/API";

import Alert from "@mui/material/Alert";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";

import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { useFormControl } from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import useUser from "../../../../hooks/useUser";
import "../Profile.css";
import { FormHelperText, OutlinedInput } from "@mui/material";

const Login = () => {
  const [createUser, setCreateUser] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const { name, email, password, rePassword } = formData;
  const { user, saveUser } = useUser();
  const navigate = useNavigate();

  const finishLogin = (message, status) => {
    if (status === "success") {
      navigate("/profile");
    } else {
      console.log(message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (createUser) {
      if (password !== rePassword) {
        console.log("Passwords do not match");
      } else {
        createNewUser(name, email, password, saveUser);
      }
    } else {
      authenticateUser(email, password, saveUser, finishLogin);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  const MyFormHelperText = () => {
    const { focused } = useFormControl() || {};

    const helperText = useMemo(() => {
      if (focused) {
        return checkPasswordMatch === "error"
          ? "Passwords do not match"
          : checkPasswordMatch === "success"
          ? "Passwords match"
          : "";
      }
      return "";
    }, [focused]);

    return <FormHelperText>{helperText}</FormHelperText>;
  };

  return (
    <Box sx={{ width: 360, maxWidth: "100%", margin: "auto", padding: 20 }}>
      <h2>{createUser ? "Create profile" : "Login"}</h2>
      <form className="profile-form" onSubmit={handleSubmit}>
        {createUser && (
          <TextField
            sx={{ backgroundColor: "#FFF" }}
            fullWidth
            label="Name"
            color="secondary"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleChange}
            required
          />
        )}
        <TextField
          fullWidth
          sx={{ backgroundColor: "#FFF" }}
          label="Email"
          color="secondary"
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <FormControl fullWidth>
          <InputLabel color="secondary" htmlFor="password">
            Password
          </InputLabel>
          <OutlinedInput
            sx={{ backgroundColor: "#FFF" }}
            label="Password"
            color="secondary"
            name="password"
            value={password}
            onChange={handleChange}
            required={createUser}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            placeholder="Password"
          />
        </FormControl>
        {createUser && (
          <FormControl fullWidth>
            <InputLabel htmlFor="rePassword" color="secondary">
              Re-enter Password
            </InputLabel>
            <OutlinedInput
              sx={{ backgroundColor: "#FFF" }}
              type="password"
              label="Re-enter Password"
              color={checkPasswordMatch}
              name="rePassword"
              value={rePassword}
              onChange={handleChange}
              placeholder="Re-enter Password"
              required
            />
            <MyFormHelperText />
          </FormControl>
        )}
        <Button type="submit" variant="contained" fullWidth>
          Submit
        </Button>
        <Button
          onClick={() => setCreateUser(!createUser)}
          fullWidth
          variant="text"
        >
          {createUser ? "Go to Login" : "Go to Create Profile"}
        </Button>
      </form>
    </Box>
  );
};

export default Login;
