import { useState } from "react";
import { uploadProfilePic } from "../../../utils/API";
import useUser from "../../../hooks/useUser";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Button from "@mui/material/Button";
import CollectionsIcon from "@mui/icons-material/Collections";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";

const ProfilePic = ({ close }) => {
  const { user, saveUser } = useUser();
  const [file, setFile] = useState();

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const handleSave = (e) => {
    e.preventDefault();
    uploadProfilePic(file, user, saveUser, close);
  };

  return (
    <>
      {file === undefined ? (
        <>
          <Button
            fullWidth
            sx={{ mt: 1, mx: "auto" }}
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Choose Image
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => {
                setFile(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
            />
          </Button>
          <Tooltip
            title="Coming soon!"
            placement="bottom"
            slotProps={{
              tooltip: { sx: { bgcolor: "#00bfa5", p: 1, fontSize: 14 } },
            }}
          >
            <span>
              <Button
                disabled
                fullWidth
                variant="outlined"
                sx={{ mt: 1, mx: "auto" }}
              >
                <CollectionsIcon sx={{ mr: 1 }} />
                Pick from Library
              </Button>
            </span>
          </Tooltip>
        </>
      ) : (
        <Button
          fullWidth
          sx={{ mt: 1, mx: "auto" }}
          variant="contained"
          startIcon={<AddPhotoAlternateIcon />}
          onClick={handleSave}
        >
          Save ({file.name})
        </Button>
      )}
      {file === undefined ? (
        <Button
          fullWidth
          onClick={close}
          sx={{ mt: 1, mx: "auto" }}
          variant="outlined"
        >
          Go Back
        </Button>
      ) : (
        <Button
          fullWidth
          onClick={close}
          variant="outlined"
          sx={{ mt: 1, mx: "auto" }}
        >
          Undo Change Image
        </Button>
      )}
    </>
  );
};

export default ProfilePic;
