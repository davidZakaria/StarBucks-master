const DrinkService = {};
const Drink = require("../Models/drinks");

DrinkService.getAllDrinks = async () => {
  try {
    const allDrinks = await Drink.find().sort("name");
    return allDrinks;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

DrinkService.getDrinkById = async (id) => {
  try {
    const drink = Drink.findById(id);
    return drink;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

DrinkService.createDrink = async (drink) => {
  try {
    const newDrink = new Drink(drink);
    const savedDrink = await newDrink.save();
    return savedDrink;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

DrinkService.updateDrink = async (id, drink) => {
  try {
    const updatedDrink = await Drink.findByIdAndUpdate(id, drink, {
      new: true,
      runValidators: true,
    });
    if (!updatedDrink) throw error;
    return updatedDrink;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

DrinkService.deleteDrink = async (id) => {
  try {
    const deletedDrink = await Drink.findByIdAndDelete(id);
    if (!deletedDrink) throw error;
    return deletedDrink;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

DrinkService.deleteAllDrinks = async () => {
  try {
    const deletedAllDrinks = await Drink.deleteMany();
    if (!deletedAllDrinks) throw error;
    return deletedAllDrinks;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = DrinkService;
