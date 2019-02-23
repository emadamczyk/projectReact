const router = require("express").Router();
const passport = require("passport");
const userController = require("../../controllers/userController");

router.post("/", passport.authenticate("local"), userController.login)

module.exports = router;