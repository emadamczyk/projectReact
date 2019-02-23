module.exports = {
    login: function(req, res) {
        console.log("USER CONTROLLER LOGIN")
        res.send(req.user);
    }
}