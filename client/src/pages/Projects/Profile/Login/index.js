import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { createNewUser, authenticateUser } from "../../../../utils/API";

//Hooks
import { useFormControl } from "@mui/material/FormControl";
import useUser from "../../../../hooks/useUser";

//Material UI
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

//Styles
import "../Profile.css";

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
  let navigate = useNavigate();

  const finishLogin = () => {
    console.log("FinishLogin");
    /*     if (status === "success") {
      console.log("User authenticated - redirecting to profile");

      navigate("/profile");
    } else {
      console.error("FinishLogin" + status + message);
    } */
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
      authenticateUser(email, password, saveUser, finishLogin).then(() => {
        navigate("/profile");
      });
      console.log(user);
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

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/profile");
    }
    () => {
      console.log("Login page unmounted");
    };
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="profile-header">
        <h1>Sign My Guestbook.</h1>

        <h2>Create a login and build a profile.</h2>
        <h3>
          It's a work in progress. For now, the atmosphere leave something to be
          desired, and your avatar will look like me. But very soon you'll be
          able to upload photos and resumes, add a bio, and probably other great
          stuff.
        </h3>
        <h3>
          If you'd like to see my work in more detail, this portfolio has its
          own repo, which you can find by clicking on the right bottom corner.
        </h3>
      </div>
      <h2 style={{ margin: "50px auto 10px auto", width: "fit-content" }}>
        {createUser ? "Create profile" : "Login"}
      </h2>
      <form className="profile-form" onSubmit={handleSubmit}>
        {createUser && (
          <TextField
            sx={{ backgroundColor: "#FFF", width: "100%" }}
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
          sx={{ backgroundColor: "#FFF", width: "100%" }}
          label="Email"
          color="secondary"
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <FormControl sx={{ width: "100%" }}>
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
          <FormControl sx={{ width: "100%" }}>
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
        <Button type="submit" variant="contained" /* fullWidth */>
          Submit
        </Button>
        <Button
          onClick={() => setCreateUser(!createUser)}
          /* fullWidth */
          variant="text"
        >
          {createUser ? "Go to Login" : "Go to Create Profile"}
        </Button>
      </form>
    </div>
  );
};

export default Login;
