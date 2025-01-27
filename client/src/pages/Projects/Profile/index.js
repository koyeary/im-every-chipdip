import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Login from "./Login";
import { logoutUser } from "../../../utils/API";
import useUser from "../../../hooks/useUser";
import ProfileForm from "./ProfileForm";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Profile = () => {
  //const user = localStorage.getItem("user");
  const { user, saveUser } = useUser();
  let navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    logoutUser(navigate("/login"));
  };

  return (
    <div className="profile">
      <h1>Hello World! This is your profile</h1>

      {user ? (
        <div className="profile-container">
          <h1>Welcome to My Profile</h1>
          <Button onClick={handleLogout}>Logout</Button>
          <ProfileForm />
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
