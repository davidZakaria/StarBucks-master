const UserService = {};
const User = require("../Models/user");

UserService.getAllUser = async () => {
  try {
    const user = await User.find().select("-password");
    return user;
  } catch (error) {
    console.log(error);
    return { error: "Internal server error" };
  }
};

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
    if (user.nickName === error.keyValue.nickName)
      return { error: "Nickname already exists" };
    if (user.email === error.keyValue.email)
      return { error: "Email already exists" };
    throw error;
  }
};

UserService.deleteUser = async (id) => {
  try {
    const user = await User.findByIdAndDelete(id);
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = UserService;
