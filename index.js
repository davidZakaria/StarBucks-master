const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// const path = require("path");
// const multer = require("./multer.js");
// const db = require("./mysql");

require("./Start/routes")(app);
require("dotenv").config();
require("./Start/mongo")();

const server = app.listen(port, async () => {
  console.log(`Server started on port localhost:${port}`);
});

module.exports = server;
