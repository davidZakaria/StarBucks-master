const mongoose = require("mongoose");
const Items = require("./item");

const orderSchema = new mongoose.Schema({
  orderNo: {
    type: Number,
    required: true,
    unique: true,
  },
  userId: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  items: {
    type: [Items.itemSchema],
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
