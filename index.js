const express = require("express");
const app = express();
<<<<<<< HEAD
require("dotenv").config();
=======
const port = process.env.PORT || 8080;
const dotenv = require("dotenv");
>>>>>>> 68b76576aec65f7bbd0e6f1e4b93245222299a85

// const path = require("path");
// const multer = require("./multer.js");
// const db = require("./mysql");

require("./Start/routes")(app);
require("./Start/mongo")();

//if you wanna use Docker replace PORT with DB_URL
const port = process.env.PORT || 5000;
const server = app.listen(port, async () => {
  console.log(`Server started on port localhost:${port}`);
});

module.exports = server;
