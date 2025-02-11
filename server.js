const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const routes = require("./routes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

// Connect Database

connectDB();

// Define middleware here
app.use("/uploads", express.static("./uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(cors());
app.use(routes);

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
