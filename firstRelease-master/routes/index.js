var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Landing" });
});

/* GET home page. */
router.get("/home", function (req, res, next) {
  res.render("index", { title: "Landing" });
});

/* GET About page. */
router.get("/contact", function (req, res, next) {
  res.render("index", { title: "contact" });
});

/* GET Products page. */
router.get("/about", function (req, res, next) {
  res.render("index", { title: "about" });
});

/* GET Services page. */
router.get("/page3", function (req, res, next) {
  res.render("index", { title: "Page 3" });
});

module.exports = router;
