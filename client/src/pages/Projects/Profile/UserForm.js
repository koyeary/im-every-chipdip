import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import { updateUserDetails } from "../../../utils/API";
import useUser from "../../../hooks/useUser";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const UserForm = ({ handleCancel }) => {
  const current = JSON.parse(localStorage.getItem("user"));
  const [formData, setFormData] = useState({
    name: "",
    pronouns: "",
    title: "",
    email: "",
    linkedIn: "",
    github: "",
    site: "",
  });

  const { user, saveUser } = useUser();
  const { name, pronouns, title, email, linkedIn, github, site } = formData;

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    console.log("Password updated");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserDetails(formData, saveUser, handleCancel);
  };

  useEffect(() => {
    console.log("track");
    console.log(current);

    setFormData({
      name: current.name,
      email: current.email,
      title: current.title,
      linkedIn: current.linkedIn,
      github: current.github,
      site: current.site,
      pronouns: current.pronouns,
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
        variant="outlined"
        margin="dense"
        size="small"
        label="Pronouns"
        color="secondary"
        sx={{ backgroundColor: "#FFF", width: "100%" }}
        type="text"
        id="pronouns"
        name="pronouns"
        value={pronouns}
        onChange={handleChange}
      />
      <TextField
        variant="outlined"
        margin="dense"
        size="small"
        label="Title"
        color="secondary"
        sx={{ backgroundColor: "#FFF", width: "100%" }}
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={handleChange}
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

      <TextField
        variant="outlined"
        margin="dense"
        size="small"
        label="Website address"
        color="secondary"
        sx={{ backgroundColor: "#FFF", width: "100%" }}
        type="text"
        id="website"
        name="site"
        value={site}
        onChange={handleChange}
      />
      <Button>
        <AddPhotoAlternateIcon />
        Add Your Photo
      </Button>
      <ButtonGroup fullWidth>
        <Button type="submit" variant="contained" onClick={handleSubmit}>
          Save Changes
        </Button>
        <Button type="reset" onClick={handleCancel}>
          Cancel
        </Button>
      </ButtonGroup>
    </form>
  );
};

export default UserForm;
