const jwt = require("jsonwebtoken");

const { Admin } = require("../models/Admin");
const { createError } = require("../helpers");

const { SECRET_KEY } = process.env;

const auth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw createError(401, "Токен є обов'язковим");
    }
    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer") {
      throw createError(401, "Токен є обов'язковим");
    }
    try {
      const { id } = jwt.verify(token, SECRET_KEY);
      const admin = await Admin.findById(id);
      if (!admin || admin.token !== token) {
        throw createError(401);
      }
      req.admin = admin;
      next();
    } catch (err) {
      throw createError(401, err);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = auth;