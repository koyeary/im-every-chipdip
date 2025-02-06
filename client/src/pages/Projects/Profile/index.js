import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useUser from "../../../hooks/useUser";
import UserDetails from "./UserDetails";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
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
    if (!localStorage.getItem("token") || !localStorage.getItem("user")) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        overflow: "auto",
        pr: 2,
        pt: 2,
      }}
    >
      {localStorageValue && (
        <Box
          sx={{
            width: "92vw",
            mt: 5,
            mb: 3,
            mx: "auto",

            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row",
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
        </Box>
      )}
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          /*   mt: 5, */
          pr: 6,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            borderRadius: 1,
            pl: 0,
          }}
        >
          <UserDetails currentUser={localStorageValue} />
        </Box>
      </Container>
    </Box>
  );
};

export default Profile;
