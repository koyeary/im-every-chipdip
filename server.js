const express = require("express");
const session = require("express-session");
const axios = require("axios");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const PORT = process.env.port || 3000;

// Middleware
app.use(
  session({ secret: "your-secret-key", resave: false, saveUninitialized: true })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/favicon.ico", (req, res, next) => {
  res.sendStatus(204);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
