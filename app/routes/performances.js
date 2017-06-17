var express = require("express");
var router = express.Router();

router.get("/", require("../controllers/performances").multiple);
router.get("/:performance_id", require("../controllers/performances").single);

module.exports = router;
