const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");

passport.use(
  new LocalStrategy(function(username, password, done) {
    console.log("LOCAL STRATEGY", username, password, done)
    User.findOne({ username: username }, function(err, user) {
      if (err) {
        console.log(err)
        return done(err);
      }
      if (!user) {
        console.log("NO USER")
        return done(null, false, { message: "Incorrect username." });
      }

      if (user.password !== password) {
        return done(null, false, { message: "Incorrect password." });
      }
      console.log("PASSPORT SUCCESS")
      return done(null, user);
    });
  })
);

passport.serializeUser(function(user, done) {
  console.log("PASSPORT SERIALIZE USER")
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  console.log("PASSPORT DESERIALIZE USER")
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
