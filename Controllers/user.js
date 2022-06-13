const UserService = require("../Services/user");
// const auth = require("../Middlewares/auth");
const _ = require("lodash");
const bcrypt = require("bcryptjs");
const UserController = {};

UserController.getAllUser = async (req, res) => {
  try {
    const user = await UserService.getAllUser();
    res.status(200).json(user);
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
    if (user.error) return res.status(400).send(user.error);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();
    const token = user.generateAuthToken();

    res
      .status(200)
      .header("x-auth-token", token)
      .send(`${user.nickName} is successfully registered`);
  } catch (error) {
    console.log(error);

    res.status(500).send({ message: "Internal server error" });
  }
};
UserController.deleteUser = async (req, res) => {
  try {
    const user = await UserService.deleteUser(req.params.id);
    if (!user) return res.status(404).send({ message: "User not found" });
    res.status(200).send(`${user.nickName} is successfully deleted`);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};
UserController.userLogin = async (req, res) => {
  try {
    const user = await UserService.userLogin(req.body);
    if (user.error) return res.status(400).send(user.error);
    const token = user.generateAuthToken();
    res
      .status(200)
      .header("x-auth-token", token)
      .send(`${user.nickName}  is successfully logged in`);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = UserController;
