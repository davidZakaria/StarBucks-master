const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nickName: {
    type: String,
    required: true,
    maxlength: 16,
  },
  firstName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 16,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 16,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 1024,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
