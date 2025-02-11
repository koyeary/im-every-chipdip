const router = require("express").Router();
const authRoutes = require("./auth");
const financeRoutes = require("./finance");
const fileRoutes = require("./file");
const teamRoutes = require("./team");
const userRoutes = require("./user");

router.use("/auth", authRoutes);
router.use("/finance", financeRoutes);
router.use("/file", fileRoutes);
router.use("/team", teamRoutes);
router.use("/user", userRoutes);

module.exports = router;
