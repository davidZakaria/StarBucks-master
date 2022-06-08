const express = require("express");
const router = express.Router();
const UsersContoller = require("../Controllers/user");

router.get("/me", UsersContoller.getUserInfo);

module.exports = router;
