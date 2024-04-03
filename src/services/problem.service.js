const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService {
  // helpful when we want to change to different repository
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }
  async createProblem(problemData) {
    try {
      // sanitize the markdown for description
      problemData.description = sanitizeMarkdownContent(
        problemData.description
      );

      const problem = await this.problemRepository.createProblem(problemData);

      return problem;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}

module.exports = ProblemService;
