const router = require("express").Router();
const incidentRoutes = require("./incidents");

// incident routes
router.use("/incidents", incidentRoutes);

module.exports = router;
