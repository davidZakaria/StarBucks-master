const express = require("express");
const UserRouter = require("../Routes/user");
const ItemRouter = require("../Routes/item");
const OrdeRouter = require("../Routes/order");
// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("../swagger.json");
// const swaggerConfig = require("../Config/swagger");
const passport = require("passport");
require("../Config/google-passport")(passport);
module.exports = function (app) {
  app.use(express.json());
  // app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig));
  app.use("/user", UserRouter);
  app.use("/item", ItemRouter);
  app.use("/order", OrdeRouter);
  app.use(passport.initialize());
  app.use(passport.session());
};
