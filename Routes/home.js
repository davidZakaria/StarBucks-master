const express = require("express");
const router = express.Router();
const Drinks = require("../Models/drinks");
const Food = require("../Models/food");

router.get("/", async (req, res) => {
  const drinks = await Drinks.find().sort("name");
  const food = await Food.find().sort("name");
  res.send([].concat(...food, ...drinks));
});

module.exports = router;
