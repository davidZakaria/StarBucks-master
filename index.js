const express = require("express");
const bodyParser = require("body-parser");
const home = require("./routes/home");
const UsersRouter = require("./routes/user");

// const path = require("path");
// const multer = require("./multer.js");
// const db = require("./mysql");

const port = process.env.PORT || 5000;
const app = express();

require("dotenv").config();
require("./start/mongo")();

app.use(bodyParser.json());
app.use("/", home);
app.use("/users", UsersRouter);

const server = app.listen(port, async () => {
  console.log("Server started on port " + port);
});

module.exports = server;
