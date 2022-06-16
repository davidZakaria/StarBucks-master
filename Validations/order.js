const Joi = require("joi");

const createOrder = {
  body: Joi.object()
    .keys({
      orderNo: Joi.number(),
      userId: Joi.number(),
      date: Joi.date(),
      totalPrice: Joi.number(),
      items: Joi.array().required(),
    })
    .required(),
};

module.exports = {
  createOrder,
};
