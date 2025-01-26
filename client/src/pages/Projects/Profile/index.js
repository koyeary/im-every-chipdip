import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Login from "./Login";
import { logoutUser, updateUserDetails } from "../../../utils/API";
import useUser from "../../../hooks/useUser";
import ProfileForm from "./ProfileForm";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Profile = ({ auth }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  let navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    logoutUser(navigate("/login"));
  };

  return (
    <div className="profile">
      <h1>Hello World! This is your profile</h1>

      {auth ? (
        <div className="profile-container">
          <h1>Welcome to My Profile</h1>
          <Button onClick={handleLogout}>Logout</Button>
          <ProfileForm user={user} />
        </div>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "fit-content",
          }}
        >
          <Login />
        </Box>
      )}
    </div>
  );
};

export default Profile;
