const express = require("express");
const router = express.Router();
const multer = require("multer");
const User = require("../../models/User");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/upload", upload.single("file"), async (req, res) => {
  const { file, userId } = req;
  try {
    console.log(req.file);
    User.findByIdAndUpdate(userId, { $set: { profilePic: file.filename } });
    return res.send("File successfully uploaded");
  } catch (error) {
    console.log(error);
    return res.send("Error uploading file: " + error);
  }
});

router.delete("/delete", async (req, res) => {
  const { userId } = req.body;
  try {
    User.deleteOne({ _id: userId });
    return res.send("File successfully deleted");
  } catch (error) {
    console.log(error);
    return res.send("Error deleting file: " + error);
  }
});

module.exports = router;
