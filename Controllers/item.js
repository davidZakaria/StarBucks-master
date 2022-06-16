const ItemService = require("../Services/item");
const ItemController = {};

ItemController.getAllItem = async (req, res) => {
  try {
    const allitem = await ItemService.getAllItem(req.params.id);

    res.status(200).json(allitem);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

ItemController.getItemById = async (req, res) => {
  try {
    const item = await ItemService.getItemById(req.params.id);

    res.status(200).json(item);
  } catch (error) {
    console.log(error);
    res.status(404).send({ Error: `ID: ${req.params.id} not found!` });
  }
};

ItemController.createItem = async (req, res) => {
  try {
    const item = await ItemService.createItem(req.body);
    res.status(200).json(item);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

ItemController.updateItem = async (req, res) => {
  try {
    const item = await ItemService.updateItem(req.params.id, req.body);
    res.status(200).json(item);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

ItemController.deleteItem = async (req, res) => {
  try {
    const item = await ItemService.deleteItem(req.params.id);
    res.status(200).json(item);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

ItemController.deleteAllItem = async (req, res) => {
  try {
    const item = await ItemService.deleteAllItem();
    res.status(200).json(item);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = ItemController;
