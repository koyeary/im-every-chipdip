import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { updateUserDetails } from "../../../utils/API";
import useUser from "../../../hooks/useUser";

const UserForm = ({ handleCancel }) => {
  const current = JSON.parse(localStorage.getItem("user"));
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedIn: "",
    github: "",
  });

  const { user, saveUser } = useUser();
  const { name, email, linkedIn, github } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserDetails(formData, saveUser);
    handleCancel(e);
  };

  useEffect(() => {
    console.log("track");
    console.log(current);

    setFormData({
      name: current.name,
      email: current.email,
      linkedIn: current.linkedIn,
      github: current.github,
    });
  }, []);

  return (
    <form className="profile-form">
      <TextField
        variant="outlined"
        autoComplete="on"
        margin="dense"
        size="small"
        label="Name"
        color="secondary"
        sx={{ backgroundColor: "#FFF", width: "100%" }}
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
        required
      />

      <TextField
        autoComplete="on"
        variant="outlined"
        margin="dense"
        size="small"
        label="Email"
        color="secondary"
        sx={{ backgroundColor: "#FFF", width: "100%" }}
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleChange}
        required
      />

      <TextField
        variant="outlined"
        margin="dense"
        size="small"
        label="LinkedIn"
        color="secondary"
        sx={{ backgroundColor: "#FFF", width: "100%" }}
        type="text"
        id="linkedIn"
        name="linkedIn"
        value={linkedIn}
        onChange={handleChange}
      />

      <TextField
        variant="outlined"
        margin="dense"
        size="small"
        label="GitHub"
        color="secondary"
        sx={{ backgroundColor: "#FFF", width: "100%" }}
        type="text"
        id="github"
        name="github"
        value={github}
        onChange={handleChange}
      />
      <div style={{ margin: "auto", width: "fit-content" }}>
        <Button type="submit" variant="contained" onClick={handleSubmit}>
          Save
        </Button>
        <Button onClick={handleCancel} type="submit" variant="contained">
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default UserForm;
