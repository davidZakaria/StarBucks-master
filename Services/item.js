const ItemService = {};
const Item = require("../Models/item");

ItemService.getAllItem = async () => {
  try {
    const item = await Item.find().sort("name");
    return item;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
ItemService.getItemById = async (id) => {
  try {
    const item = Item.findById(id);
    console.log(item);
    return item;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
ItemService.createItem = async (item) => {
  try {
    const newitem = new Item(item);
    const saveditem = await newitem.save();
    return saveditem;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
ItemService.updateItem = async (id, item) => {
  try {
    const updateditem = await Item.findByIdAndUpdate(id, item, {
      new: true,
      runValidators: true,
    });
    if (!updateditem) throw error;
    return updateditem;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
ItemService.deleteItem = async (id) => {
  try {
    const deleteditem = await Item.findByIdAndDelete(id);
    if (!deleteditem) throw error;
    return deleteditem;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
ItemService.deleteAllItem = async () => {
  try {
    const deleteditem = await Item.deleteMany();
    if (!deleteditem) throw error;
    return deleteditem;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = ItemService;
