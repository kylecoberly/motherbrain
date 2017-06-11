var express = require("express");
var router = express.Router();

router.get("/", require("../controllers/business-units").multiple);
router.get("/:business_unit_id/cohorts", require("../controllers/cohorts").byBusinessUnit);
router.get("/:business_unit_id/cohorts/:cohort_id", require("../controllers/cohorts").single);
router.get("/:business_unit_id", require("../controllers/business-units").single);

module.exports = router;
