import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useUser from "../../../hooks/useUser";
import UserDetails from "./UserDetails";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
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

  const handleLogout = (e) => {
    e.preventDefault();
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
    <div
      style={{
        margin: "0 auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        overflow: "auto",
      }}
    >
      {localStorageValue && (
        <div
          style={{
            margin: "20px auto",
            width: "90%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Button onClick={() => navigate("/")}>
            <HomeIcon sx={{ mr: 1 }} />
            <span style={{ paddingTop: 5 }}>Home</span>
          </Button>
          <Button onClick={handleLogout}>
            <span style={{ paddingTop: 5 }}>Logout</span>
            <LogoutIcon sx={{ ml: 1 }} />
          </Button>
        </div>
      )}

      <UserDetails currentUser={localStorageValue} />
    </div>
  );
};

export default Profile;
