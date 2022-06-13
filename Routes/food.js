const express = require("express");
const router = express.Router();
const FoodController = require("../Controllers/food");
const RequestValidator = require("../Middlewares/requestValidator");
const FoodValidator = require("../Validations/food");

router.get("/", FoodController.getAllFood);
router.get("/:id", FoodController.getFoodById);
router.post(
  "/",
  RequestValidator.validate(FoodValidator.createFood),
  FoodController.createFood
);
router.put("/:id", FoodController.updateFood);
router.delete("/:id", FoodController.deleteFood);
router.delete("/", FoodController.deleteAllFood);

module.exports = router;
