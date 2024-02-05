const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");
const connectDb = require("./config/connectDb");

dotenv.config();

connectDb();

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// user routes
app.use("/api/v1/users", require("./routes/userRoute"));

//transactions route
app.use("/api/v1/transactions", require("./routes/transactionRoute"));

//static files read
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const PORT = 8080 || process.env.PORT;

// listen server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
