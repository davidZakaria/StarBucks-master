const FoodService = require("../Services/food");
const FoodController = {};

FoodController.getAllFood = async (req, res) => {
  try {
    const allFood = await FoodService.getAllFood(req.params.id);

    res.status(200).json(allFood);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

FoodController.getFoodById = async (req, res) => {
  try {
    const food = await FoodService.getFoodById(req.params.id);

    res.status(200).json(food);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

FoodController.createFood = async (req, res) => {
  try {
    const food = await FoodService.createFood(req.body);
    res.status(200).json(food);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

FoodController.updateFood = async (req, res) => {
  try {
    const food = await FoodService.updateFood(req.params.id, req.body);
    res.status(200).json(food);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

FoodController.deleteFood = async (req, res) => {
  try {
    const food = await FoodService.deleteFood(req.params.id);
    res.status(200).json(food);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

FoodController.deleteAllFood = async (req, res) => {
  try {
    const food = await FoodService.deleteAllFood();
    res.status(200).json(food);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = FoodController;
