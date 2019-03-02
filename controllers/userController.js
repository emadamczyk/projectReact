const passport = require("passport");

module.exports = {
  login: function(req, res, next) {
    passport.authenticate("local-login", function(err, user, info) {
      if (err) {
        return next(err); // will generate a 500 error
      }
      if (!user) {
        return res.status(409).json({ errMsg: info.errMsg });
      }
      req.login(user, function(err) {
        if (err) {
          console.error(err);
          return next(err);
        }
        return res.json({ success: true, user });
      });
    })(req, res, next);
  },
  signup: function(req, res, next) {
    passport.authenticate("local-signup", function(err, user, info) {
      if (err) {
        return next(err); // will generate a 500 error
      }
      if (!user) {
        return res.status(409).json({ errMsg: info.errMsg });
      }
      req.login(user, function(err) {
        if (err) {
          console.error(err);
          return next(err);
        }
        return res.json({ success: true, user });
      });
    })(req, res, next);
  }
};
