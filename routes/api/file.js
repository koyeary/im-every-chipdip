const express = require("express");
const fileController = require("../../controllers/fileController");
const router = express.Router();
const multer = require("multer");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    console.log(file);
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    cb(null, file.fieldname + "-" + Date.now() + "." + extension);
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("image"), fileController.fileUpload);

module.exports = router;
