const Joi = require("joi");

const createOrder = {
  body: Joi.object()
    .keys({
      orderNo: Joi.number().required(),
      userId: Joi.number().required(),
      date: Joi.date().required(),
      totalPrice: Joi.number().required(),
      items: Joi.array().required(),
    })
    .required(),
};

module.exports = {
  createOrder,
};
