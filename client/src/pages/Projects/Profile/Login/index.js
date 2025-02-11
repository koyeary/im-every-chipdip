import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  createNewUser,
  authenticateUser,
  getUserById,
  setAuthToken,
} from "../../../../utils/API";

//Hooks
import useUser from "../../../../hooks/useUser";

//Material UI
import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";

//Icons
import HomeIcon from "@mui/icons-material/Home";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

//Styles
import "../Profile.css";
import { Box, CardHeader } from "@mui/material";

const Login = () => {
  const [createUser, setCreateUser] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const [alert, setAlert] = useState({
    severity: "",
    msg: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [show, setShow] = useState(false);

  const { name, email, password, rePassword } = formData;
  const { user, saveUser } = useUser();
  let navigate = useNavigate();

  const { severity, msg } = alert;

  const handleClose = () => {
    setShow(false);
  };
  const sendToast = (msg, severity) => {
    setAlert({ severity, msg });
    setShow(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (createUser) {
      if (password !== rePassword) {
        console.log("Passwords do not match");
      } else {
        createNewUser(name, email, password, saveUser, sendToast).then(() => {
          setCreateUser(false);
        });
      }
    } else {
      console.log("Login");
      authenticateUser(email, password, saveUser, sendToast).then(() => {
        navigate("/profile");
      });
    }
  };
  /* 
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token && localStorage.user) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);

      navigate("/profile");
    }
  }, []); */

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

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Container component="main" maxWidth="xs" sx={{ mt: 5, pr: 6 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: 1,
              pl: 0,
            }}
          >
            <Box maxWidth="sm" sx={{ minWidth: 360, mt: 3, mb: 3, mx: 0 }}>
              <Button onClick={() => navigate("/")}>
                <HomeIcon sx={{ mr: 1 }} />
                <span style={{ paddingTop: 5 }}>Home</span>
              </Button>
            </Box>
            <Card
              maxWidth="xs"
              variant="outlined"
              sx={{
                p: 1,
                borderRadius: 2,
                width: "100%",
              }}
            >
              <CardHeader title={createUser ? "Create Profile" : "Login"} />

              <form className="login-form" onSubmit={handleSubmit}>
                {createUser && (
                  <TextField
                    sx={{ backgroundColor: "#FFF", width: "100%" }}
                    label="Name"
                    color="secondary"
                    name="name"
                    placeholder="Name"
                    value={name}
                    dense
                    onChange={handleChange}
                    size="small"
                    required
                    margin="dense"
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
                  dense
                  onChange={handleChange}
                  required
                  size="small"
                  margin="dense"
                />
                <FormControl
                  sx={{ width: "100%" }}
                  size="small"
                  margin="dense"
                  label="password"
                  required
                >
                  <InputLabel
                    sx={{ backgroundColor: "#FFF" }}
                    color="secondary"
                    htmlFor="password"
                  >
                    Password
                  </InputLabel>
                  <OutlinedInput
                    color="secondary"
                    name="password"
                    value={password}
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
                {createUser && (
                  <TextField
                    size="small"
                    margin="dense"
                    sx={{ backgroundColor: "#FFF", width: "100%" }}
                    type={showPassword ? "text" : "password"}
                    label="Re-enter Password"
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
            </Card>
          </Box>
        </Container>
      </Box>
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

export default Login;
