const router = require("express").Router();
const authRoutes = require("./auth");
const contactRoutes = require("./contact");
const financeRoutes = require("./finance");
const userRoutes = require("./user");
const teamRoutes = require("./team");
//const docsRoutes = require("./docs");
// Contact routes

router.use("/auth", authRoutes);
router.use("/contact", contactRoutes);
router.use("/finance", financeRoutes);
router.use("/user", userRoutes);
router.use("/team", teamRoutes);
//router.use("/docs", docsRoutes);

module.exports = router;
