const logger = require("../config/logger.config");
const NotFound = require("../errors/notFound.error");
const { Problem } = require("../models");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        codeStubs: problemData.codeStubs,
        testCases: problemData.testCases ? problemData.testCases : [],
      });
      return problem;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async getAllProblems() {
    try {
      const problems = await Problem.find({});
      return problems;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async getProblem(id) {
    try {
      const problem = await Problem.findById(id);
      if (!problem) {
        logger.error(`Problem.Respository: Problem with ${id} not found in the DB`);
        throw new NotFound("Problem", id);
      }
      return problem;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
  async deleteProblem(id) {
    try {
      const problem = await Problem.findByIdAndDelete(id);
      if (!problem) {
        logger.error(`Problem.Respository: Problem with ${id} not found in the DB`);
        throw new NotFound("Problem", id);
      }
      return problem;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
  async updateProblem(id, updatedData) {
    try {
      const problem = await Problem.findByIdAndUpdate(id, updatedData);
      if (!problem) {
        logger.error(`Problem.Respository: Problem with ${id} not found in the DB`);
        throw new NotFound("Problem", id);
      }
      return problem;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
module.exports = ProblemRepository;
