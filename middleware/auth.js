const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");

function errHandler(err) {
  console.error("There was an error performing the operation");
  console.log(err);
  console.log(err.code);
  return console.error(err.message);
}

passport.serializeUser(function(user, done) {
  console.log("PASSPORT SERIALIZE USER");
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  console.log("PASSPORT DESERIALIZE USER");
  User.findById(id, function(err, user) {
    if(err) {
      console.error('There was an error accessing the records of' +
      ' user with id: ' + id);
      return console.log(err.message);
    }
    return done(null, user);
  });
});


passport.use(
  "local-login",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true
    },
    function(req, username, password, done) {
      console.log("PASSPORT LOGIN", username, password)
      User.findOne({ username: username }, function(err, user) {
        if (err) {
          console.log(err);
          return done(err);
        }
        if (!user) {
          console.log("NO USER");
          return done(null, false, { message: "Incorrect username." });
        }

        if (user.password !== password) {
          return done(null, false, { message: "Incorrect password." });
        }
        console.log("PASSPORT SUCCESS");
        return done(null, user);
      });
    }
  )
);

passport.use(
  "local-signup",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true
    },
    function(req, username, password, done) {
      console.log("50", req.session.passport);
      process.nextTick(function() {
        User.findOne({ username: username }, function(err, user) {
          if (err) errHandler(err);
          if (user) {
            console.log("user already exists %o", user);
            return done(null, false, { errMsg: "username already exists" });
          } else {
            var newUser = new User();
            newUser.username = req.body.username;
            newUser.password = password;
            newUser.save(function(err) {
              if (err) {
                console.log(err);
                if (err.message == "User validation failed") {
                  console.log(err.message);
                  return done(null, false, {
                    errMsg: "Please fill all fields"
                  });
                }
                return errHandler(err);
              }
              console.log("New user successfully created...", newUser.username);
              console.log("username", username);
              console.log(newUser);
              return done(null, newUser);
            });
          }
        });
      });
    }
  )
);

