const mongoose = require("mongoose");

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    section: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 55,
    },
    category: {
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

module.exports = Product;

// module.exports.Food = foodSchema;
