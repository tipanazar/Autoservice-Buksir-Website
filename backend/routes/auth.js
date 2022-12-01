const express = require("express");
// const
const jwt = require("jsonwebtoken");
const router = express.Router();

const { Admin } = require("../models/Admin");
const { auth } = require("../middlewares");
const { createError } = require("../helpers");

const { SECRET_KEY } = process.env;

router.post("/signin", async (req, res, next) => {
  try {
    const { login, password } = req.body;
    if (!login || !password) {
      throw createError(400);
    }
    const admin = await Admin.findOne({ login });
    console.log(admin);
    if (!admin) {
      throw createError(404, "Такого користувача не знайдено!");
    }
    if (password !== admin.password) {
      throw createError(401, "Неправильний пароль!");
    }
    const token = jwt.sign(admin._id, SECRET_KEY, { expiresIn: "5h" });
    console.log(token);
    // const all = await Admin.findById({ _id: "6388c6156588dd3cadc0bfc6" });
    // console.log(all)
    res.status(200).json({});
  } catch (err) {
    next(err);
  }
});

module.exports = router;
