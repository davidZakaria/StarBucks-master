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

module.exports = UserService;
