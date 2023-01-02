const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const articlesRouter = require("./articles");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/articles", articlesRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Route not Found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
