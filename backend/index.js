const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const helmet = require("helmet");
const morgan = require("morgan");

// Importing routes
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

mongoose.connect(process.env.MONGO_DB_URL, () => {
  console.log("Mongo db is live");
});

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.get("/", (req, res) => {
  res.status(200).send("App is runinng file");
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
