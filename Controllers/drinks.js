const DrinksService = require("../Services/drinks");
const DrinksController = {};

DrinksController.getAllDrinks = async (req, res) => {
  try {
    const allDrinks = await DrinksService.getAllDrinks(req.params.id);

    res.status(200).json(allDrinks);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

DrinksController.getDrinkById = async (req, res) => {
  try {
    const drink = await DrinksService.getDrinkById(req.params.id);

    res.status(200).json(drink);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

DrinksController.createDrink = async (req, res) => {
  try {
    const drink = await DrinksService.createDrink(req.body);
    res.status(200).json(drink);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

DrinksController.updateDrink = async (req, res) => {
  try {
    const drink = await DrinksService.updateDrink(req.params.id, req.body);
    res.status(200).json(drink);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

DrinksController.deleteDrink = async (req, res) => {
  try {
    const drink = await DrinksService.deleteDrink(req.params.id);
    res.status(200).json(drink);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

DrinksController.deleteAllDrinks = async (req, res) => {
  try {
    const allDrinks = await DrinksService.deleteAllDrinks();
    res.status(200).json(allDrinks);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = DrinksController;
