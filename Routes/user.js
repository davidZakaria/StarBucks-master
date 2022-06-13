const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/user");
const RequestValidator = require("../Middlewares/requestValidator");
const UserValidator = require("../Validations/user");
const auth = require("../Middlewares/auth");
const admin = require("../Middlewares/admin");

router.get("/:id", auth, UserController.getUserInfo);
router.get("/", auth, UserController.getAllUser);
router.post(
  "/signup",
  RequestValidator.validate(UserValidator.createUser),
  UserController.createUser
);
router.post("/login", UserController.userLogin);
router.delete("/:id", auth, admin, UserController.deleteUser);

module.exports = router;
