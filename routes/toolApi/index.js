const router = require("express").Router();
const toolRoutes = require("./tools");

// Book routes
router.use("/tools", toolRoutes);

module.exports = router;
