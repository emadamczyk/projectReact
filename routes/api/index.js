const router = require("express").Router();
const incidentRoutes = require("./incidents");
const userRoutes = require("./user");
const loginRoutes = require("./login")

// incident routes
router.use("/incidents", incidentRoutes);
router.use("/user", userRoutes);
router.use("/login", loginRoutes);



module.exports = router;
