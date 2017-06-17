var express = require("express");
var router = express.Router();
var controller = require("../controllers/instructors");

router.get("/", controller.multiple);
router.get("/:instructor_id", controller.single);

module.exports = router;
