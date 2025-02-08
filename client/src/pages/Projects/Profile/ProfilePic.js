import { useState } from "react";
import { uploadProfilePic } from "../../../utils/API";
import useUser from "../../../hooks/useUser";

const ProfilePic = () => {
  const { user, saveUser } = useUser();
  const [file, setFile] = useState();

  const handleUpload = (e) => {
    e.preventDefault();
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(file);
    uploadProfilePic(file, user, saveUser);
  };

  return (
    <>
      <h1>File Uploader</h1>
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files[0]);
          console.log(e.target.files[0]);
        }}
      />
      <button onClick={() => uploadProfilePic(file, user, saveUser)}>
        Upload File
      </button>

      {/*     <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="file">Upload a file</label>
        <input
          onChange={handleUpload}
          type="file"
          name="file"
          id="file"
          accept="image/*"
        />
      </div>

      <div>
        <input type="submit" value="Upload" />
      </div>
    </form> */}
    </>
  );
};

export default ProfilePic;
