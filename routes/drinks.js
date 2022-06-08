const express = require("express");
const router = express.Router();
const DrinksController = require("../Controllers/drinks");

router.get("/", DrinksController.getAllDrinks);
router.get("/:id", DrinksController.getDrinkById);
router.post("/", DrinksController.createDrink);
router.put("/:id", DrinksController.updateDrink);
router.delete("/:id", DrinksController.deleteDrink);
router.delete("/", DrinksController.deleteAllDrinks);

module.exports = router;
