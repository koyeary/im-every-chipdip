import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { createNewUser, authenticateUser } from "../../../../utils/API";

import Alert from "@mui/material/Alert";
import useUser from "../../../../hooks/useUser";
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
  const { saveUser } = useUser();
  let navigate = useNavigate();

  const finishLogin = (user) => {
    if (user.message) {
      return <Alert severity="error">{user.message}</Alert>;
    } else if (user.id !== undefined) {
      navigate("/profile");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createUser && password !== rePassword
      ? console.log("Passwords do not match")
      : createUser && password === rePassword
      ? createNewUser(name, email, password, saveUser, finishLogin)
      : authenticateUser(email, password, saveUser, finishLogin);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
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
      {createUser ? <h2>Create profile</h2> : <h2>Login</h2>}
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
            showPassword={true}
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
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
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
              showPassword={true}
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
