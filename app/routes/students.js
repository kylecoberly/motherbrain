var express = require("express");
var router = express.Router();
var controller = require("../controllers/students");

router.get("/", controller.multiple);
router.get("/:student_id", controller.single);

module.exports = router;
