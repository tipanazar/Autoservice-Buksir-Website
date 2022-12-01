const express = require("express");
// const
const jwt = require("jsonwebtoken");
const router = express.Router();

const { Admin } = require("../models/Admin");
const { auth } = require("../middlewares");
const { createError } = require("../helpers");

const { SECRET_KEY } = process.env;

router.post("/login", async (req, res, next) => {
  try {
    console.log("hmmmm")
  } catch (err) {
    next(err);
  }
});

module.exports = router;
