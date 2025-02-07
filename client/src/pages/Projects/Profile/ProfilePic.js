import React from "react";

const ProfilePic = () => {
  return (
    <form
      method="POST"
      action="/profile-upload-single"
      enctype="multipart/form-data"
    >
      <div>
        <label htmlFor="file">Upload an avatar</label>
        <input type="file" accept="image/*" />
      </div>

      <div>
        <input type="submit" value="Upload" />
      </div>
    </form>
  );
};

export default ProfilePic;
