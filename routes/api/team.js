const router = require("express").Router();
const Team = require("../../models/Team");

// Matches with "/api/team"

router.get("/", async (req, res) => {
  try {
    const results = {
      message: "success",
      data: await Team.find(),
    };
    return res.status(200).json(results);
  } catch (error) {
    return error;
  }
});

router.post("/", async (req, res) => {
  console.log(Team);
  const newMember = await Team.create(req.body);

  try {
    console.log(req.body);

    const results = {
      message: "success",
      data: newMember,
    };

    return res.status(200).json(results);
  } catch (error) {
    return console.log(error);
  } finally {
    console.log("done");
  }
});

router.put("/", async (req, res) => {
  //const { name, email, department, upstream, downstream, group } = req.body;
  console.log(req.body.query, req.body.update);

  try {
    const results = {
      message: "success",
      data: await Team.findOneAndUpdate(req.body.query, req.body.update, {
        new: true,
      }),
    };
    console.log(req.body.query, req.body.update);
    return res.status(200).json(results);
  } catch (error) {
    return error;
  }
});

router.delete("/", async (req, res) => {
  const { name } = req.body;
  try {
    const results = {
      message: "success",
      data: await Team.findOneAndDelete({ name: name }),
    };
    return res.status(200).json(results);
  } catch (error) {
    return error;
  }
});

module.exports = router;
