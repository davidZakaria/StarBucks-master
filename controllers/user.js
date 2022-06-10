const UserService = require("../Services/user");
const UserController = {};

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

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    if (user.error) res.status(400).send(user.error);
    res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = UserController;
