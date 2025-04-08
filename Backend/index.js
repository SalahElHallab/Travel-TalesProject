const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB)
  .then(() => console.log("DB connection successful"))
  .catch((err) => {
    console.error("DB connection error:", err);
  });

  app.use(express.json())

  

app.listen(5000, () => {
  console.log("Server is running");
});
