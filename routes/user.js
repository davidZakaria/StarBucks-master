const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/user");
const RequestValidator = require("../middlewares/requestValidator");
const UserValidator = require("../validations/user");
const auth = require("../Middlewares/auth");
const admin = require("../Middlewares/admin");

router.get("/:id", auth, UserController.getUserInfo);
router.get("/", auth, UserController.getAllUser);
router.post(
  "/",
  RequestValidator.validate(UserValidator.createUser),
  UserController.createUser
);
router.delete("/:id", auth, admin, UserController.deleteUser);

module.exports = router;
