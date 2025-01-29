import { useEffect, useState, lazy } from "react";
import { useNavigate } from "react-router";
import useUser from "../../../hooks/useUser";
import UserDetails from "./UserDetails";
import Button from "@mui/material/Button";

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
    <div
      style={{
        margin: "0 auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Button onClick={handleLogout}>Logout</Button>
      <h1>This is Your Profile</h1>
      <h2>Think of this as an entry in my guestbook.</h2>
      <h3>
        It's a work in progress. For now, as you can see from your avatar, you
        look like me. But soon you'll be able to upload photos and resumes, add
        a bio, and probably other great stuff.
      </h3>
      <h3>
        If you'd like to see more of my work, this portfolio has its own repo,
        which you can find by clicking on the right bottom corner
      </h3>
      <h3>
        If you're interested in working with me, please feel free to reach out
        to me on LinkedIn or GitHub, or use the contact form on the main page.
      </h3>
      <UserDetails currentUser={localStorageValue} />
    </div>
  );
};

export default Profile;
