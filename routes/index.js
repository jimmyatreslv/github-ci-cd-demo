var express = require("express");
var router = express.Router();

const pkg = require("../package.json");

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express", version: pkg.version });
});

module.exports = router;
