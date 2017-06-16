var express = require("express");
var router = express.Router();

router.get("/", require("../controllers/students").multiple);
router.get("/:student_id", require("../controllers/students").single);

module.exports = router;
