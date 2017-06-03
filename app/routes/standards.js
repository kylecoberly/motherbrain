var express = require("express");
var router = express.Router();

router.get("/", require("../controllers/standards").multiple);
router.get("/:standard_id", require("../controllers/standards").single);

module.exports = router;
