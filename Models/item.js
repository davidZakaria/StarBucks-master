const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  // _id: mongoose.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = itemSchema;
module.exports = Item;
