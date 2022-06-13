const express = require("express");
const home = require("../Routes/home");
const UserRouter = require("../Routes/user");
const FoodRouter = require("../Routes/food");
const DrinksRouter = require("../Routes/drinks");

module.exports = function (app) {
  app.use(express.json());
  app.use("/", home);
  app.use("/user", UserRouter);
  app.use("/food", FoodRouter);
  app.use("/drinks", DrinksRouter);
};
