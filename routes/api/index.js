const router = require("express").Router();
const incidentRoutes = require("./incidents");
const userRoutes = require("./user");

// incident routes
router.use("/incidents", incidentRoutes);
router.use("/login", userRoutes);


module.exports = router;
