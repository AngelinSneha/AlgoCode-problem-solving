const winston = require('winston');
const { LOG_DB_URL } = require('./server.config');
require('winston-mongodb');

// can store all the places where the log can be transported, eg: console, files, etc
const allowedTransport = [];
// display logs in console
allowedTransport.push(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format:"YY-MM-DD HH:mm:ss"
        }),
        winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`),
    )

}));
// display logs in mongogoDB Database
allowedTransport.push(new winston.transports.MongoDB({
    // only error logs are going to be stored in DB
    level: 'error',
    db: LOG_DB_URL,
    collection: 'logs',
}))

// display logs  in files
allowedTransport.push(new winston.transports.File({
    filename: `app.log`,
    level: "error"
}))

const logger = winston.createLogger({
    // default formatting to be displayed for the logger for all transports
    format: winston.format.combine(
        winston.format.timestamp({
            format: "YYYY-MM-DD HH:mmm:ss"
        }),
        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`),

    ),
    transports: allowedTransport,
  });

module.exports = logger;