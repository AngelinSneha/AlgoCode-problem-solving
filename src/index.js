const express = require("express");
const bodyParser = require("body-parser");
const apiRoute = require("./routes");
const connectDB = require("./config/db.config");
const Problem = require('./models/problem.model')

const { PORT } = require("./config/server.config");
const errorHandler = require("./utils/errorHandler");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoute);

app.get("/ping", function (req, res) {
  return res.status(200).json({ message: "Serive is alive" });
});
app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server starter on port: ${PORT}`);
  await connectDB();
  console.log("Connected to DB");
});
