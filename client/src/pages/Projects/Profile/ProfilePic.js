import { useState } from "react";
import { uploadProfilePic } from "../../../utils/API";
import useUser from "../../../hooks/useUser";

const ProfilePic = () => {
  const { user, saveUser } = useUser();
  const [avatar, setAvatar] = useState("");

  const handleChange = (e) => {
    console.log(e.target.file);
    setAvatar(e.target.file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(avatar);
    uploadProfilePic(avatar, user, saveUser);
  };

  return (
    <form method="POST" action="/api/pic/upload" enctype="multipart/form-data">
      <div>
        <label htmlFor="file">Upload an avatar</label>
        <input
          type="file"
          name="avatar"
          id="avatar"
          accept="image/*"
          /*   onChange={handleChange} */
        />
      </div>

      <div>
        <input type="submit" value="Upload" />
      </div>
    </form>
  );
};

export default ProfilePic;
