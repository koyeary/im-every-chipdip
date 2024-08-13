const router = require("express").Router();
const contactRoutes = require("./contact");

// Contact routes
router.use("/contact", contactRoutes);

module.exports = router;
