const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class NotImplemented extends BaseError {
  constructor(name) {
    super(
      "NotImplemented",
      StatusCodes.NOT_IMPLEMENTED,
      `${name} Not Implemented`,
      {}
    );
  }
}

module.exports = NotImplemented;
