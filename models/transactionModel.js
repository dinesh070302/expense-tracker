const mongoose = require("mongoose");

const transactionalSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: [true, "Please enter the amount"],
    },
    type: {
      type: String,
      required: [true, "Please select the type"],
    },
    category: {
      type: String,
      required: [true, "Please specify the category"],
    },
    description: {
      type: String,
      required: [true, "Please add description"],
    },
    date: {
      type: Date,
      required: [true, "Please select a date"],
    },
  },
  { timestamps: true }
);

const transactionModel = mongoose.model("transactions", transactionalSchema);

module.exports = transactionModel;
