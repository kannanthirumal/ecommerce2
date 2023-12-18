const express = require("express");
const serverConfig = require("./configs/server.config");
const bodyParser = require("body-parser");

// initiaizing express
const app = express();

/**
 * Using the body-parser middleware
 *
 * Using for parsing the request.
 * Parsing the request of the type json and convert that to object
 *
 * */

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = app;
