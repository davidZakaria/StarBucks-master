const Joi = require("joi");

const createFood = {
  body: Joi.object()
    .keys({
      name: Joi.string().max(20).required(),
      type: Joi.string().max(20).required(),
      price: Joi.number().required(),
    })
    .required(),
};

module.exports = {
  createFood,
};
