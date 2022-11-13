let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// connect to our Game Model
let Game = require("../models/game");

let gameController = require("../controllers/game");


/* GET Route for the Game Info page - READ OPeration */
router.get("/", gameController.displayGameInfo);

/* GET Route for displaying Add page - Create OPeration */
router.get("/add", gameController.addpage);

/* POST Route for processing Add page - Create OPeration */
router.post("/add", gameController.addprocesspage);

/* GET Route for displaying Edit page -UPDATE OPeration */
router.get("/edit/:id", gameController.displayeditpage);

/*POST Route for processing Edit page - UPDATE OPeration */
router.post("/edit/:id", gameController.processingeditpage);

/* GET to perform game deletion -Delete OPeration */
router.get("/delete/:id", gameController.deletepage);
module.exports = router;
