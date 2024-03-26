class BaseError extends Error {
  constructor(name, statusCode, description, details) {
    // pass message to the Error class
    super(description);
    
    this.name = name;
    this.statusCode = statusCode;
    this.details = details;
    // captures the call stack where the error occurs
    // Error.captureStackTrace(this);
  }
}

module.exports = BaseError;
