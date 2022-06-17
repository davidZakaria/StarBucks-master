const OrderService = {};
const Order = require("../Models/order");
const Item = require("../Models/item");

OrderService.getAllOrder = async (id) => {
  try {
    const order = await Order.find({ user: id }).sort("name");
    return order;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

OrderService.getOrderById = async (userId) => {
  try {
    const order = await Order.find({ userId: this.userId });
    return order;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

OrderService.createOrder = async (order) => {
  try {
    const neworder = new Order(order);

    const i = await Item.find({ _id: order.items.map((item) => item.id) });

    neworder.items = i;
    console.log(neworder);
    // const gded = Item.findOne({ name: [neworder.items] }).populate("Order");
    // console.log("///////////////////////////////////// %s", gded);

    const savedorder = await neworder.save();
    return savedorder;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

OrderService.deleteOrder = async (id) => {
  try {
    const deletedorder = await Order.findByIdAndDelete(id);
    if (!deletedorder) throw error;
    return deletedorder;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = OrderService;
