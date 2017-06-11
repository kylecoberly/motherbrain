var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/api/v1/cohorts", require("./routes/cohorts"));
app.use("/api/v1/business-units", require("./routes/business-units"));
app.use("/api/v1/standards", require("./routes/standards"));
app.use("/", require("./routes/index"));

app.use(function(request, response, next){
    var error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use(function(error, request, response){
    response.locals.message = error.message;
    response.locals.error = request.app.get("env") === "development" ? error : {};

    response.status(error.status || 500);
    response.send(error);
});

module.exports = app;
