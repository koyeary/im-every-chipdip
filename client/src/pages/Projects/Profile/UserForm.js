import React, { useState } from "react";

import TextField from "@mui/material/TextField";

const UserForm = ({ user, edit }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    linkedIn: user.linkedIn,
    github: user.github,
  });

  const { name, email, linkedIn, github } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="profile-form">
      <TextField
        variant="outlined"
        autoComplete="on"
        margin="dense"
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
        autoComplete="on"
        variant="outlined"
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
        variant="outlined"
        margin="dense"
        size="small"
        label="LinkedIn"
        color="secondary"
        sx={{ backgroundColor: edit && "#FFF", width: "100%" }}
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
        sx={{ backgroundColor: edit && "#FFF", width: "100%" }}
        type="text"
        id="github"
        name="github"
        value={github}
        onChange={handleChange}
      />
    </form>
  );
};

export default UserForm;
