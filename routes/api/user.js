const router = require("express").Router();
const passport = require("passport");
const userController = require("../../controllers/userController");
const db = require("../../models");

// router.post("/", passport.authenticate("local"), userController.login)
router.post("/", function(req, res){
    console.log(req.body)
    db.User.create(req.body, function(error, user){
        if (error) {console.error(error)}
        res.json(user);
    })
})

router.post("/login", userController.login)
router.post("/signup", userController.signup)


module.exports = router;