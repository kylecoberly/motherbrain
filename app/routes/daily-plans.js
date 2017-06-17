var express = require("express");
var router = express.Router();
var controller = require("../controllers/daily-plans");

router.get("/", controller.multiple);
router.get("/:daily_plan_id", controller.single);

module.exports = router;
