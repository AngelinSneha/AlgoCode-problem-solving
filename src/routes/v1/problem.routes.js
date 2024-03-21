const express = require("express");
const { problemController } = require("../../controllers");

const problemRoute = express.Router();

problemRoute.get("/ping", problemController.pingProblemController);
problemRoute.get("/", problemController.getProblems);
problemRoute.get("/:id", problemController.getProblem);
problemRoute.post("/", problemController.addProblem);
problemRoute.delete("/:id", problemController.deleteProblem);
problemRoute.put("/:id", problemController.updateProblem);

module.exports = problemRoute;
