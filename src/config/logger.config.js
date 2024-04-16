const winston = require('winston');
const { LOG_DB_URL } = require('./server.config');
require('winston-mongodb');
const {Writable} = require('stream');
const {logToCosmosDB} = require('../clientApis/cosmosClient')

// can store all the places where the log can be transported, eg: console, files, etc
const allowedTransport = [];

// to create a custom stream to add to cosmos DB and cause winston does not directly support cosmos db
const customStream = new Writable({
    write(chunk, encoding, callback) {
        const message = chunk.toString();
        console.log("Log intercepted in custom transport", message);
        logToCosmosDB("error", message);
        callback();
    }
});
// store logs in cosmosDB
allowedTransport.push(new winston.transports.Stream({
    stream: customStream,   
}))
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