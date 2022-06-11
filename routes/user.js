const express = require("express");
const router = express.Router();
const UsersController = require("../Controllers/user");
const RequestValidator = require("../middlewares/requestValidator");
const UserValidator = require("../validations/user");
const auth = require("../Middlewares/auth");

router.get("/:id", auth, UsersController.getUserInfo);
router.get("/", UsersController.getAllUsers);
router.post(
  "/",
  RequestValidator.validate(UserValidator.createUser),
  UsersController.createUser
);

module.exports = router;
