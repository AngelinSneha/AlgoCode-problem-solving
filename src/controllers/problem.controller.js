const { StatusCodes } = require("http-status-codes");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");
const NotImplemented = require("../errors/notImplemented.error");

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
  return res.status(200).json({ message: "Problem controller is up" });
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

async function deleteProblem(req, res, next) {
  try {
    const response = await problemService.deleteProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully deleted a problem",
      error: {},
      data: response,
    });

  } catch (e) {
    next(e);
  }
}

async function updateProblem(req, res, next) {
  try {
    const response = await problemService.updateProblem(req.params.id, req.body);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully updated a problem",
      error: {},
      data: response,
    });

  } catch (e) {
    next(e);
  }
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblemController,
};
