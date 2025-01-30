import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useUser from "../../../hooks/useUser";
import UserDetails from "./UserDetails";
import Button from "@mui/material/Button";
import "./Profile.css";

const Profile = () => {
  const [localStorageValue, setLocalStorageValue] = useState(
    localStorage.getItem("user")
  );

  let navigate = useNavigate();

  const { user, logout } = useUser();

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "myKey") {
        setLocalStorageValue(e.newValue);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    if (user._id) {
      console.log("User is logged in");
    }
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <Button onClick={() => navigate("/")}>Home</Button>
      <Button onClick={() => logout()}>Logout</Button>
      <div
        style={{
          margin: "0 auto",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ width: "fit-content", margin: "50px auto" }}></div>
        <UserDetails currentUser={localStorageValue} />
      </div>
    </div>
  );
};

export default Profile;
