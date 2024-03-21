const express = require("express");
const problemRoute = require("./problem.routes");

const v1Route = express.Router();

v1Route.use("/problems", problemRoute);

module.exports = v1Route;
