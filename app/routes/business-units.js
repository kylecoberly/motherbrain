var express = require("express");
var router = express.Router();
var businessUnitController = require("../controllers/business-units");
var cohortController = require("../controllers/cohorts");

router.get("/", businessUnitController.multiple);
router.get("/:business_unit_id/cohorts", cohortController.byBusinessUnit);
router.get("/:business_unit_id/cohorts/:cohort_id", cohortController.single);
router.get("/:business_unit_id", businessUnitController.single);

module.exports = router;
