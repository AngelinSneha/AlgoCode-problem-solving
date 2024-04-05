const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService {
  // helpful when we want to change to different repository
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }
  async createProblem(problemData) {
    // sanitize the markdown for description
    problemData.description = sanitizeMarkdownContent(problemData.description);

    const problem = await this.problemRepository.createProblem(problemData);

    return problem;
  }
  async getAllProblems() {
    const problems = await this.problemRepository.getAllProblems();
    return problems;
  }
  async getProblem(id) {
    const problem = await this.problemRepository.getProblem(id);
    return problem;
  }
  async deleteProblem(id) {
    const problem = await this.problemRepository.deleteProblem(id);
    return problem;
  }
  async updateProblem(id, updatedData) {
    // sanitize the markdown for description
    if(updatedData.description) {
      updatedData.description = sanitizeMarkdownContent(updatedData.description);
    }

    const problem = await this.problemRepository.updateProblem(id, updatedData);
    return problem;
  }
}

module.exports = ProblemService;
