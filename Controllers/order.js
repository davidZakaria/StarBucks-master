const OrderService = require("../Services/order");
const OrderController = {};

OrderController.getAllOrder = async (req, res) => {
  try {
    const allorder = await OrderService.getAllOrder(req.params.id);
    res.status(200).json(allorder);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};
OrderController.getOrderById = async (req, res) => {
  try {
    const order = await OrderService.getOrderById(req.params.id);
    res.status(200).json(order);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};
OrderController.createOrder = async (req, res) => {
  try {
    const order = await OrderService.createOrder(req.body);
    res.status(200).json(order);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};
OrderController.deleteOrder = async (req, res) => {
  try {
    const order = await OrderService.deleteOrder(req.params.id);
    res.status(200).json(order);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = OrderController;
