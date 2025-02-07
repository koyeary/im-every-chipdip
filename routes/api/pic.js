const express = require("express");
const router = express.Router();
const multer = require("multer");

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
  try {
    console.log(req.file);
    return res.send("File successfully uploaded");
  } catch (error) {
    console.log(error);
    return res.send("Error uploading file: " + error);
  }
});

module.exports = router;
