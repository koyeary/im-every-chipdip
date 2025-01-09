import { useState } from "react";
import Login from "../../../components/Login";
import { logoutUser } from "../../../utils/API";
import useUser from "../../../hooks/useUser";
import ProfileForm from "./ProfileForm";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
    gitHub: "",
  });
  const { user } = useUser();

  const handleLogout = (e) => {
    e.preventDefault();
    logoutUser();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Hello World! This is your profile</h1>

      {user.current.id ? (
        <div>
          <h1>Welcome to My Profile</h1>
          <button onClick={handleLogout}>Logout</button>
          <ProfileForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Profile;
