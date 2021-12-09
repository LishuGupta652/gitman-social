const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const helmet = require("helmet");
const morgan = require("morgan");

mongoose.connect(process.env.MONGO_DB_URL, () => {
  console.log("Mongo db is live");
});

// middleware
app.use(express());
app.use(helmet());
app.use(morgan("common"));

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
