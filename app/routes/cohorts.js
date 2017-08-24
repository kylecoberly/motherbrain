var express = require("express");
var router = express.Router();
var cohortController = require("../controllers/cohorts");
var studentController = require("../controllers/students");

router.get("/:cohort_id", cohortController.single);
router.get("/:cohort_id/students", studentController.byCohort);

module.exports = router;
