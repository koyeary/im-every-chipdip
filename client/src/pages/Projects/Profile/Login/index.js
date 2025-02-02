import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { createNewUser, authenticateUser } from "../../../../utils/API";

//Hooks
import { useFormControl } from "@mui/material/FormControl";
import useUser from "../../../../hooks/useUser";

//Material UI
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
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
        width: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        height: "100vh",
      }}
    >
      <Button onClick={() => navigate("/")}>
        <HomeIcon sx={{ mr: 1 }} />
        <span style={{ paddingTop: 5 }}>Home</span>
      </Button>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          justifyContent: "center",
        }}
      >
        <Box sx={{ minWidth: 275, justifyContent: "center", gap: 20 }}>
          <Card
            variant="outlined"
            sx={{
              padding: 1,
              borderRadius: 2,
              width: 450,
              maxWidth: "90vw",
            }}
          >
            <CardHeader title={createUser ? "Create Profile" : "Login"} />

            <form className="profile-form" onSubmit={handleSubmit}>
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
          </Card>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
