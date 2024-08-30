const router = require("express").Router();
const contactRoutes = require("./contact");
const financeRoutes = require("./finance");
const userRoutes = require("./user");
// Contact routes

router.use("/contact", contactRoutes);
router.use("/finance", financeRoutes);
router.use("/user", userRoutes);

module.exports = router;
