import { useState } from "react";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  IconButton,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const PasswordForm = () => {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [updateMode, setUpdateMode] = useState(false);

  const checkPasswordMatch =
    password === "" && rePassword === ""
      ? "secondary"
      : password === rePassword
      ? "success"
      : "error";

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      setPassword(value);
    } else {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Handle password change logic here
      console.log("Password changed successfully");
    } else {
      console.log("Passwords do not match");
    }
  };

  return !updateMode ? (
    <Button onClick={setUpdateMode(true)}>Update password</Button>
  ) : (
    <form onSubmit={handleSubmit}>
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
          value={password}
          onChange={handleChange}
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
      {/*       {updateMode && (
        <>
          <Button
            disabled={checkPasswordMatch === "error"}
            onClick={() => setUpdateMode(false)}
            type="submit"
          >
            Save Update
          </Button>
          <Button type="reset" onClick={() => setUpdateMode(false)}>
            Cancel
          </Button>
        </>
      )} */}
    </form>
  );
};

export default PasswordForm;
