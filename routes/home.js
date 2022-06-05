const express = require("express");
const router = express.Router();
const Drinks = require("../models/drinks");
const Food = require("../models/food");
const Hookah = require("../models/hooka");

router.get("/", async (req, res) => {
  const drinks = await Drinks.find().sort("name");
  const food = await Food.find().sort("name");
  console.log(...food, ...drinks);
  res.send([].concat(...food, ...drinks));
});

router.post("/drinks", async (req, res) => {
  const drinks = new Drinks({
    name: req.body.name,
    Hotorcold: req.body.Hotorcold,
    price: req.body.price,
  });
  try {
    const savedDrinks = await drinks.save();
    res.send(savedDrinks);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/food", async (req, res) => {
  const food = new Food({
    name: req.body.name,
    type: req.body.type,
    price: req.body.price,
  });
  try {
    const savedFood = await food.save();
    res.send(savedFood);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/drinks", async (req, res) => {
  const drinks = new drinks({
    name: req.body.name,
    Hotorcold: req.body.Hotorcold,
    price: req.body.price,
  });
  try {
    const savedDrinks = await drinks.save();
    res.send(savedDrinks);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.put("/drinks/:id", async (req, res) => {
  try {
    const drinks = await Drinks.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!drinks) throw err;
    res.send(drinks);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete("/drinks/:id", async (req, res) => {
  try {
    const drinks = await Drinks.findByIdAndDelete(req.params.id);
    if (!drinks) throw err;
    res.send(drinks);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/drinks/:id", async (req, res) => {
  try {
    const drinks = await Drinks.findById(req.params.id);
    if (!drinks) throw err;
    res.send(drinks);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
