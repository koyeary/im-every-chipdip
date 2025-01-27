import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getUserById, updateUserDetails, logoutUser } from "../../../utils/API";
import useUser from "../../../hooks/useUser";
import { TextField } from "@mui/material";

const ProfileForm = () => {
  const { user, saveUser } = useUser();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedIn: "",
    github: "",
  });

  const navigate = useNavigate();
  const { name, email, linkedIn, github } = formData;

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateUserDetails(formData, saveUser);
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      return logoutUser(navigate("/login"));
    }
    if (localStorage.getItem("token")) {
      getUserById(user, saveUser);
    }

    setFormData({
      name: user.name,
      email: user.email,
      linkedIn: user.linkedIn,
      github: user.github,
    });
  }, []);

  return (
    <div className="profile-form">
      <form onSubmit={handleSubmit}>
        <TextField
          margin="dense"
          size="small"
          fullWidth
          label="Name"
          color="secondary"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />

        <TextField
          margin="dense"
          size="small"
          fullWidth
          label="Email"
          color="secondary"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <TextField
          margin="dense"
          size="small"
          fullWidth
          label="LinkedIn"
          color="secondary"
          type="url"
          id="linkedIn"
          name="linkedIn"
          value={linkedIn}
          placeholder={linkedIn || "LinkedIn"}
          onChange={handleChange}
        />

        <TextField
          margin="dense"
          size="small"
          fullWidth
          label="GitHub"
          color="secondary"
          type="url"
          id="github"
          name="github"
          value={github}
          placeholder={github || "GitHub"}
          onChange={handleChange}
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ProfileForm;
