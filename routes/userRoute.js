const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/userController");

const router = express.Router();

//Routers
//POST and LOGIN USER

router.post("/login", loginController);

//POST and Register User

router.post("/register", registerController);

module.exports = router;
