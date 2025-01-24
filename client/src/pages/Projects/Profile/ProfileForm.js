import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  logoutUser,
  getUserDetails,
  updateUserDetails,
} from "../../../utils/API";
import useUser from "../../../hooks/useUser";
import { TextField } from "@mui/material";

const ProfileForm = () => {
  const { user, saveUser } = useUser();
  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState({
    name: user.current.name,
    email: user.current.email,
    linkedIn: user.current.linkedIn,
    github: user.current.github,
  });

  const { name, email, linkedIn, github } = formData;

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserDetails(formData, saveUser, getUserDetails);
    setEdit(false);
  };

  useEffect(() => {
    getUserDetails(saveUser);
  }, []);

  return (
    <div className="profile-form">
      {" "}
      <button onClick={() => setEdit(!edit)}>Edit</button>
      {edit ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <TextField
              color="secondary"
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder={name || "Name"}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <TextField
              color="secondary"
              type="email"
              id="email"
              name="email"
              placeholder={email || "Email"}
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="linkedIn">LinkedIn:</label>
            <TextField
              color="secondary"
              type="url"
              id="linkedIn"
              name="linkedIn"
              value={linkedIn}
              placeholder={linkedIn || "LinkedIn"}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="github">GitHub:</label>
            <TextField
              color="secondary"
              type="url"
              id="github"
              name="github"
              value={github}
              placeholder={github || "GitHub"}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h1>{user.current.name}</h1>
          <h2>{user.current.email}</h2>
          <h3>{user.current.linkedIn}</h3>
          <h3>{user.current.github}</h3>
        </div>
      )}
    </div>
  );
};

export default ProfileForm;
