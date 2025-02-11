import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { setAuthToken } from "../../../utils/API";
import { getUserById } from "../../../utils/API";
import useMeasure from "react-use-measure";
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

  const [ref, bounds] = useMeasure();
  let navigate = useNavigate();

  const { user, saveUser } = useUser();

  /*   useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "myKey") {
        setLocalStorageValue(e.newValue);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []); */

  const handleLogout = (e) => {
    e.preventDefault();
    //logout();
    navigate("/login");
  };

  /* useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // if there is a token get the user data

    window.addEventListener("storage", () => {
      if (!localStorage.token) {
        logout();
        navigate("/login");
      }
      if (!localStorage.user) {
        logout();
        navigate("/login");
      }
    });
  }, []); */

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
        scrollbarWidth: "none",
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
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <UserDetails currentUser={localStorageValue} />
      </Container>
    </Box>
  );
};

export default Profile;
