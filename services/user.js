const UserService = {};


UserService.getUserInfo = async (id) => {
  try {
    return {
      id: 1,
      name: "zanaty",
      email: "zanaty@gmail.com",
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = UserService;
