const Joi = require("joi");

const createItem = {
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
      category: Joi.string().required(),
      price: Joi.number().required(),
    })
    .required(),
};

module.exports = {
  createItem,
};
