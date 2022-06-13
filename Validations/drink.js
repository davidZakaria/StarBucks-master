const Joi = require("joi");

const createUser = {
  body: Joi.object()
    .keys({
      firstName: Joi.string().min(3).required(),
      lastName: Joi.string().min(3).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required(),
      avatar: Joi.string(),
    })
    .required(),
};

module.exports = {
  createUser,
};
