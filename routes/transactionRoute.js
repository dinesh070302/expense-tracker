const express = require("express");
const transactionController = require("../controllers/transactionController");

const router = express.Router();

// Routes

//add transaction post

router.post("/addTransaction", transactionController.addTransaction);

router.post("/editTransaction", transactionController.editTransaction);

router.post("/deleteTransaction", transactionController.deleteTransaction);
//get transactions
router.post("/getTransactions", transactionController.getAllTransactions);

module.exports = router;
