var express = require("express");
var router = express.Router();

router.get("/:cohort_id", require("../controllers/cohorts"));

module.exports = router;
