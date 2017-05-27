var express = require("express");
var router = express.Router();
var businessUnitsController = require("../controllers/business-units");

router.get("/", businessUnitsController);

module.exports = router;
