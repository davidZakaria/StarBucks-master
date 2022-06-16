const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/user");
const RequestValidator = require("../Middlewares/requestValidator");
const UserValidator = require("../Validations/user");
const auth = require("../Middlewares/auth");
const admin = require("../Middlewares/admin");

router.get("/:id", auth, UserController.getUserInfo);
router.get("/", auth, admin, UserController.getAllUser);

/**
 * @swagger
 * definitions:
 *   users:
 *     required:
 *       - username
 *       - password
 *     properties:
 *       username:
 *         type: string
 *       password:
 *         type: string
 *       path:
 *         type: string
 */

/**
 * @swagger
 * /signup:
 *   post:
 *     description: Returns users
 *     tags: [Users]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/username'
 *     responses:
 *       200:
 *         description: users
 */
router.post(
  "/signup",
  RequestValidator.validate(UserValidator.createUser),
  UserController.createUser
);
router.post("/login", UserController.userLogin);
router.put("/:id", auth, admin, UserController.updateUser);
router.delete("/:id", auth, admin, UserController.deleteUser);

module.exports = router;
