const UserService = {};
const User = require("../Models/users");

UserService.getUserInfo = async (id) => {
  try {
    const user = User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
UserService.createUser = async (user) => {
  try {
    const newUser = new User(user);
    const savedUser = await newUser.save();

    return savedUser;
  } catch (error) {
    console.log(error);
    if (user) return { error: "Email already exists" };
    throw error;
  }
};

module.exports = UserService;
