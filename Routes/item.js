const express = require("express");
const router = express.Router();
const ItemController = require("../Controllers/item");
const RequestValidator = require("../Middlewares/requestValidator");
const ItemValidator = require("../Validations/item");
const auth = require("../Middlewares/auth");
const admin = require("../Middlewares/admin");

router.get("/", auth, ItemController.getAllItem);
router.get("/:id", auth, ItemController.getItemById);
router.post(
  "/",
  auth,
  admin,
  RequestValidator.validate(ItemValidator.createItem),
  ItemController.createItem
);
router.put("/:id", ItemController.updateItem);
router.delete("/:id", auth, admin, ItemController.deleteItem);
router.delete("/", auth, admin, ItemController.deleteAllItem);

module.exports = router;
