const { StatusCodes } = require("http-status-codes");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");
const NotImplemented = require("../errors/notImplemented.error");

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
  return res.json({ message: "Problem controller is up" });
}

async function addProblem(req, res, next) {
  try {
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created a new problem",
      error: {},
      data: newProblem,
    });
  } catch (e) {
    next(e);
  }
}

async function getProblem(req, res, next) {
  try {
    const response = await problemService.getProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched a problem",
      error: {},
      data: response,
    });
  } catch (e) {
    next(e);
  }
}

async function getProblems(req, res, next) {
  try {
    const response = await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched all problem",
      error: {},
      data: response,
    });
    
  } catch (e) {
    next(e);
  }
}

function deleteProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not implemented",
  });
}

function updateProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not implemented",
  });
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblemController,
};
