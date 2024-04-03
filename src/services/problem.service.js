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
    const problems = await this.problemRepository.getProblem(id);
    return problems;
  }
}

module.exports = ProblemService;
