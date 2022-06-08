const FoodService = {};
const Food = require("../Models/food");

FoodService.getAllFood = async () => {
  try {
    const food = await Food.find().sort("name");
    return food;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

FoodService.getFoodById = async (id) => {
  try {
    const food = Food.findById(id);
    return food;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

FoodService.createFood = async (food) => {
  try {
    const newFood = new Food(food);
    const savedFood = await newFood.save();
    return savedFood;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

FoodService.updateFood = async (id, food) => {
  try {
    const updatedFood = await Food.findByIdAndUpdate(id, food, {
      new: true,
      runValidators: true,
    });
    if (!updatedFood) throw error;
    return updatedFood;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

FoodService.deleteFood = async (id) => {
  try {
    const deletedFood = await Food.findByIdAndDelete(id);
    if (!deletedFood) throw error;
    return deletedFood;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

FoodService.deleteAllFood = async () => {
  try {
    const deletedFood = await Food.deleteMany();
    if (!deletedFood) throw error;
    return deletedFood;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = FoodService;
