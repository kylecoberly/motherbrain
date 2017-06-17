var express = require("express");
var router = express.Router();
var controller = require("../controllers/standards");

router.get("/", controller.multiple);
router.get("/:standard_id", controller.single);

module.exports = router;
