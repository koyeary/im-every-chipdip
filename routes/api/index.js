const router = require("express").Router();
const authRoutes = require("./auth");
const financeRoutes = require("./finance");
const userRoutes = require("./user");
const teamRoutes = require("./team");
//const docsRoutes = require("./docs");

router.use("/auth", authRoutes);
router.use("/finance", financeRoutes);
router.use("/user", userRoutes);
router.use("/team", teamRoutes);
//router.use("/docs", docsRoutes);

module.exports = router;
