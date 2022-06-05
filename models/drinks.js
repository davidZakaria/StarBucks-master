const mongoose = require("mongoose");
// const Joi = require('joi');
// Joi.objectId = require('joi-objectid')(Joi);
// const {validatedrinks, drinksSchema} = require('./drinks');

const Drinks = mongoose.model(
  "Drinks",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 55,
    },
    Hotorcold: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
    },
    price: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
    },
  })
);

module.exports = Drinks;
