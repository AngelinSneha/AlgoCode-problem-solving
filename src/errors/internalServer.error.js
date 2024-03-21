const { StatusCodes } = require("http-status-codes");

class InterServerError extends BaseError {
  constructor(propertyName, details) {
    super(
      "InterServerError",
      StatusCodes.INTERNAL_SERVER_ERROR,
      `Something went wrong !!`,
      details
    );
  }
}

module.exports = InterServerError;
