const moment = require("moment");
const User = require("../models/User");

module.exports = {
  fileUpload: async (req, res) => {
    req.body;
    console.log("controller");
    console.log(req.file.path);
    try {
      res.send({
        status: "success",
        data: { filename: req.file.path },
      });
    } catch (err) {
      res.send({ status: "err", error: err });
    }
  },
};
