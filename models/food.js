const mongoose = require("mongoose");

const Food = mongoose.model('Food', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 55,
  },
  type: {
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
}));

module.exports = Food;

// module.exports.Food = foodSchema;

