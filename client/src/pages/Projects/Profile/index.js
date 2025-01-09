import React from "react";
import Login from "../../../components/Login";
import { logoutUser } from "../../../utils/API";
import useUser from "../../../hooks/useUser";

const Profile = () => {
  const { user } = useUser();

  const handleLogout = (e) => {
    e.preventDefault();
    logoutUser();
  };

  return (
    <div>
      <h1>Hello World! This is your profile</h1>

      {user.current.id ? (
        <div>
          <h1>Welcome to My Profile</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Profile;
