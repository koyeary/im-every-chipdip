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
  const { user } = useUser();
  let navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    logoutUser(navigate("/login"));
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div
      style={{
        margin: "0 auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Hello World! This is your profile</h1>
      <h2>Welcome to My Profile</h2>
      <Button onClick={handleLogout}>Logout</Button>
      <ProfileForm />
    </div>
  );
};

export default Profile;
