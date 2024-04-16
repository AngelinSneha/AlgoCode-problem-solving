const mongoose = require("mongoose");
const { ATLAS_DB_URL, NODE_ENV } = require("./server.config");

async function connectDB() {
  try {
    if (NODE_ENV === "development") {
      await mongoose.connect(ATLAS_DB_URL);
    }
  } catch (err) {
    console.log("Unable to connect to DB Server");
    console.log(err);
  }
}
module.exports = connectDB;
