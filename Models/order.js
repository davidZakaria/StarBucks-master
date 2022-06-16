const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderNo: {
    type: Number,
    // required: true,
    // unique: true,
  },
  userId: {
    type: Number,
    // required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  totalPrice: {
    type: Number,
    // required: true,
  },
  items: [{ type: mongoose.Types.ObjectId, ref: "Item" }],
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
