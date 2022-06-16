const express = require("express");
const router = express.Router();
const OrderController = require("../Controllers/order");
const RequestValidator = require("../Middlewares/requestValidator");
const OrderValidator = require("../Validations/order");
const auth = require("../Middlewares/auth");
const admin = require("../Middlewares/admin");

router.get("/", OrderController.getAllOrder);
router.get("/:id", OrderController.getOrderById);
router.post(
  "/",
  RequestValidator.validate(OrderValidator.createOrder),
  OrderController.createOrder
);

router.delete("/:id", auth, admin, OrderController.deleteOrder);
module.exports = router;
