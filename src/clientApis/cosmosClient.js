const { CosmosClient } = require('@azure/cosmos');
const { AZZURE_END_POINT,AZZURE_KEY,AZZURE_DATABASE_ID, AZZURE_CONTAINER_ID} = require('../config/server.config');

const endpoint = AZZURE_END_POINT;
const key = AZZURE_KEY;

const client = new CosmosClient({ endpoint, key });
const database = client.database(AZZURE_DATABASE_ID);
const container = database.container(AZZURE_CONTAINER_ID);

async function logToCosmosDB(level, message) {
    try {
        await container.items.create({
            timeStamp: new Date().toISOString(),
            level:level,
            message:message
        });

        console.log("Log entry created in cosmos DB");
    } catch(e) {
        console.log("error logging to cosmos DB", e);
    }
}

module.exports = {logToCosmosDB}