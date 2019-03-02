const router = require("express").Router();
const incidentRoutes = require("./incidents");
const userRoutes = require("./user");

// incident routes
router.use("/incidents", incidentRoutes);
router.use("/user", userRoutes);



module.exports = router;
