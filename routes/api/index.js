const router = require("express").Router();
const authRoutes = require("./auth");
const financeRoutes = require("./finance");
const picRoutes = require("./pic");
const teamRoutes = require("./team");
const userRoutes = require("./user");
//const docsRoutes = require("./docs");

router.use("/auth", authRoutes);
router.use("/finance", financeRoutes);
router.use("/pic", picRoutes);
router.use("/team", teamRoutes);
router.use("/user", userRoutes);

//router.use("/docs", docsRoutes);

module.exports = router;
