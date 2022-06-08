const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  type: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  price: {
    type: String,
    required: true,
    minlength: 0,
    maxlength: 255,
  },
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
