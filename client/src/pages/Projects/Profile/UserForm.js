import React, { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import { updateUserDetails } from "../../../utils/API";
import useUser from "../../../hooks/useUser";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CollectionsIcon from "@mui/icons-material/Collections";
import Snackbar from "@mui/material/Snackbar";

import Tooltip from "@mui/material/Tooltip";
import { Card } from "@mui/material";
import ProfilePic from "./ProfilePic";

const UserForm = ({ setEdit, sendToast }) => {
  const current = JSON.parse(localStorage.getItem("user"));
  const [changeMode, setChangeMode] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    pronouns: "",
    title: "",
    email: "",
    linkedIn: "",
    github: "",
    site: "",
    filename: "",
  });

  const { saveUser } = useUser();

  const { name, pronouns, title, email, linkedIn, github, site, filename } =
    formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePickAvatar = (e) => {
    e.preventDefault();
    setFormData({ ...formData, filename: "default.png" });
  };

  const handleShowUpload = (e) => {
    e.preventDefault();
    setShowUpload(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserDetails(formData, saveUser, sendToast);

    setEdit(false);
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
      filename: current.filename,
    });
  }, []);

  return (
    <div className="profile-form">
      <Card variant="outlined" sx={{ p: 2, maxWidth: "90vw" }}>
        <form>
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

          {showUpload ? (
            <ProfilePic close={(e) => setShowUpload(false)} />
          ) : (
            <>
              <Button
                variant="contained"
                onClick={handleShowUpload}
                fullWidth
                sx={{ mt: 1, mx: "auto" }}
              >
                <AddPhotoAlternateIcon sx={{ mr: 1 }} />
                Add Your Photo
              </Button>
              <Button
                onClick={handlePickAvatar}
                fullWidth
                variant="outlined"
                sx={{ mt: 1, mx: "auto" }}
              >
                <CollectionsIcon sx={{ mr: 1 }} />
                Pick from Library
              </Button>

              <ButtonGroup fullWidth sx={{ mt: 1, mx: "auto" }}>
                <Button
                  variant="contained"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Save Changes
                </Button>
                <Button
                  type="reset"
                  onClick={(e) => {
                    e.preventDefault();
                    setEdit(false);
                  }}
                >
                  Cancel
                </Button>
              </ButtonGroup>
            </>
          )}
        </form>
      </Card>
      <Tooltip
        title="Coming soon!"
        placement="bottom"
        slotProps={{
          tooltip: { sx: { bgcolor: "#00bfa5", p: 1, fontSize: 14 } },
        }}
      >
        <span>
          <Button
            sx={{ my: 2, mx: "auto", borderRadius: 2 }}
            fullWidth
            variant="outlined"
            disabled
            color="secondary"
            onClick={() => setChangeMode(true)}
          >
            Change Password
          </Button>
        </span>
      </Tooltip>
    </div>
  );
};

export default UserForm;
