let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let passport = require("passport");

// create the User Model instance
let userModel = require("../models/user");
let User = userModel.User; // alias

module.exports.displayHomePage = (req, res, next) => {
  res.render("home", {
    title: "Ace Of Race",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.displayGamePage = (req, res, next) => {
  res.render("game", {
    title: "Game",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.displayAboutPage = (req, res, next) => {
  res.render("about", {
    title: "About",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.displayProjectsPage = (req, res, next) => {
  res.render("projects", {
    title: "Projects",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.displayServicesPage = (req, res, next) => {
  res.render("services", {
    title: "Services",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.displayContactPage = (req, res, next) => {
  res.render("contact", {
    title: "Contact",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.displayContactPage = (req, res, next) => {
  res.render("contact", {
    title: "Contact",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.displayLoginPage = (req, res, next) => {
  // check if the user is already logged in
  if (!req.user) {
    res.render("auth/login", {
      title: "Login",
      messages: req.flash("loginMessage"),
      displayName: req.user ? req.user.displayName : "",
    });
  } else {
    return res.redirect("/");
  }
};

module.exports.processLoginPage = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    // server err?
    if (err) {
      return next(err);
    }
    // is there a user login error?
    if (!user) {
      req.flash("loginMessage", "Authentication Error");
      return res.redirect("/login");
    }
    req.login(user, (err) => {
      // server error?
      if (err) {
        return next(err);
      }

      // const payload = {
      //   id: user._id,
      //   displayName: user.displayName,
      //   username: user.username,
      //   email: user.email,
      // };

      // const authToken = jwt.sign(payload, DB.Secret, {
      //   expiresIn: 604800, // 1 week
      // });

      /* TODO - Getting Ready to convert to API
          res.json({success: true, msg: 'User Logged in Successfully!', user: {
              id: user._id,
              displayName: user.displayName,
              username: user.username,
              email: user.email
          }, token: authToken});
          */

      return res.redirect("/game-info");
    });
  })(req, res, next);
};

module.exports.displayRegisterPage = (req, res, next) => {
  // check if the user is not already logged in
  if (!req.user) {
    res.render("auth/register", {
      title: "Register",
      messages: req.flash("registerMessage"),
      displayName: req.user ? req.user.displayName : "",
    });
  } else {
    return res.redirect("/");
  }
};

module.exports.processRegisterPage = (req, res, next) => {
  // instantiate a user object
  let newUser = new User({
    username: req.body.username,
    //password: req.body.password
    email: req.body.email,
    displayName: req.body.displayName,
  });

  User.register(newUser, req.body.password, (err) => {
    if (err) {
      console.log("Error: Inserting New User");
      if (err.name == "UserExistsError") {
        req.flash(
          "registerMessage",
          "Registration Error: User Already Exists!"
        );
        console.log("Error: User Already Exists!");
      }
      return res.render("auth/register", {
        title: "Register",
        messages: req.flash("registerMessage"),
        displayName: req.user ? req.user.displayName : "",
      });
    } else {
      // if no error exists, then registration is successful

      // redirect the user and authenticate them

      /* TODO - Getting Ready to convert to API
          res.json({success: true, msg: 'User Registered Successfully!'});
          */

      return passport.authenticate("local")(req, res, () => {
        res.redirect("/game-info");
      });
    }
  });
};

module.exports.performLogout = (req, res, next) => {
  req.logout();
  res.redirect("/");
};
