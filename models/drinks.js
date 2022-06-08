const mongoose = require("mongoose");
// const Joi = require('joi');
// Joi.objectId = require('joi-objectid')(Joi);
// const {validatedrinks, drinksSchema} = require('./drinks');

const drinksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  hotOrCold: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
    minlength: 0,
    maxlength: 255,
  },
});

const Drinks = new mongoose.model("Drinks", drinksSchema);

module.exports = Drinks;
