const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3000,
  ATLAS_DB_URL: process.env.ATLAS_DB_VARIABLE,
  LOG_DB_URL: process.env.LOG_DB_URL,
  NODE_ENV: process.env.NODE_ENV || "development",
  AZZURE_END_POINT: process.env.AZZURE_END_POINT,
  AZZURE_KEY: process.env.AZZURE_KEY,
  AZZURE_DATABASE_ID: process.env.AZZURE_DATABASE_ID || "winston-error-logging",
  AZZURE_CONTAINER_ID: process.env.AZZURE_CONTAINER_ID || "errorlogs",
  
};
