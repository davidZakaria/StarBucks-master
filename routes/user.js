const express = require("express");
const router = express.Router();
const UsersController = require("../Controllers/user");
const RequestValidator = require("../middlewares/requestValidator");
const UserValidator = require("../validations/user");

router.get("/", UsersController.getUserInfo);
router.post(
  "/",
  RequestValidator.validate(UserValidator.createUser),
  UsersController.createUser
);

module.exports = router;
