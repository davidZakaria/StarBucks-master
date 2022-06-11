const UserService = require("../Services/user");
// const auth = require("../Middlewares/auth");
const _ = require("lodash");
const bcrypt = require("bcryptjs");
const UserController = {};

UserController.getAllUsers = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
UserController.getUserInfo = async (req, res) => {
  try {
    const userInfo = await UserService.getUserInfo(req.params.id);

    res.status(200).json(userInfo);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};
UserController.createUser = async (req, res) => {
  try {
    const user = await UserService.createUser(req.body);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();
    const token = user.generateAuthToken();

    res
      .status(200)
      .header("x-auth-token", token)
      .send(_.pick(user, ["_id", "nickName", "email"]));
  } catch (error) {
    console.log(error);
    if (user.error) res.status(400).send(user.error);
    res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = UserController;
