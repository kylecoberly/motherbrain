var express = require("express");
var router = express.Router();

router.get("/:business_unit_id/cohorts", require("../controllers/business-unit-cohorts"));
router.get("/", require("../controllers/business-units"));

module.exports = router;
