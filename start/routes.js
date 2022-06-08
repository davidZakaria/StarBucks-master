const express = require("express");
const home = require("../Routes/home");
const UsersRouter = require("../Routes/user");
const FoodRouter = require("../Routes/food");

module.exports = function (app) {
  app.use(express.json());
  app.use("/", home);
  app.use("/users", UsersRouter);
  app.use("/food", FoodRouter);
};
