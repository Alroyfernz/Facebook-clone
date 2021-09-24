const express = require("express");
const mongoose = require("mongoose");
const App = express();
const dotenv = require("dotenv");
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connection to database succesfull"))
  .catch((error) => {
    console.log("Error while connecting to database");
  });

App.listen(process.env.PORT, () => {
  console.log("Backend server running");
});
