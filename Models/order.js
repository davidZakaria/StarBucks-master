const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  // _id: mongoose.Types.ObjectId,
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
  items: [
    { type: mongoose.Types.ObjectId, ref: "Item", required: true },
    { quantity: { type: Number, required: true } },
  ],
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
