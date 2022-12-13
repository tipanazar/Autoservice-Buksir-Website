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
    if (!admin) {
      throw createError(404, "Такого користувача не знайдено!");
    }
    if (password !== admin.password) {
      throw createError(401, "Невірний пароль!");
    }
    const token = jwt.sign({ id: admin.id }, SECRET_KEY, { expiresIn: "5h" });
    const result = await Admin.findByIdAndUpdate(admin.id, { token });
    res.json({
      token: token,
      login: result.login,
    });
  } catch (err) {
    next(err);
  }
});

router.get("/current", auth, async (req, res, next) => {
  try {
    res.json({
      login: req.admin.login,
    });
  } catch (err) {
    next(err);
  }
});

router.get("/logout", auth, async (req, res, next) => {
  try {
    const { id } = req.admin;
    await Admin.findByIdAndUpdate(id, { token: "" });
    res.json({});
  } catch (err) {
    next(err);
  }
});

module.exports = router;
