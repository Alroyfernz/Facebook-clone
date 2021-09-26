const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const authRouter = require("./routes/auth");
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connection to database succesfull"))
  .catch((error) => {
    console.log("Error while connecting to database");
  });
app.use(express.json());
app.use("/api/auth", authRouter);

app.listen(process.env.PORT, () => {
  console.log("Backend server running");
});
