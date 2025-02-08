const moment = require("moment");

module.exports = {
  fileUpload: (req, res) => {
    console.log(req.file);
    try {
      res.send({
        status: "success",
        message: `${req.file.originalname} uploaded!`,
      });
    } catch (err) {
      res.send({ status: "err", error: err });
    }
  },
};
