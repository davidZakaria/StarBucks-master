const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const config = require('./config/database');
const home = require("./routes/home");
const mysql = require("mysql");
const { Sequelize, DataTypes } = require("sequelize");
// const multer = require("multer");
const path = require("path");
const multer = require("./multer.js");

require("dotenv").config();
const db = require("./mysql");
const app = express();

const port = process.env.PORT || 5000;

// const DB_NAME = process.env.CONNECTION_STRING;
// mongoose.connect(`${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true})
//     .then(() => console.log(`Connected to ${DB_NAME} MongoDb...`));

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to MongoDb on ${port}...`))
  .catch((err) => console.log("Couldn't connect to MongoDb..."));

app.use(bodyParser.json());
app.use("/", home);

// Create mysql db
app.get("/createdb", (req, res) => {
  let sql = "CREATE Db Hookahmysql";
  mysqldb.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created...");
  });
});

app.get("/createHookahmysql", (req, res) => {
  let sql =
    "CREATE Db Hookahmysql(id int AUTO_INCREMENT, flavour string , price decimal, PRIMARY KEY (id))";
  mysqldb.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Hookahmysql created...");
  });
});

// Server Port
const server = app.listen(port, async () => {
  console.log("Server started on port " + port);
  db.execute("SELECT 1+? as test1", [10], (err, rows) => {
    console.log(rows);
  });
});

module.exports = server;
