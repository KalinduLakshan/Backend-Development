const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRoute = require("./routes/product.route");
const app = express();

dotenv.config();

//MongoDB connection URL
const mongoURL = process.env.MONGO_URL;
var PORT = process.env.PORT || 3000;

/* Middleware */
//By default node not allow to show json data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

//Connect to MongoDB
mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("Connected to MongoDB database");
    //Display in console
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((error) => console.error("MongoDB connection error:", error));
