const jwt = require("jsonwebtoken");

const { Admin } = require("../models/Admin");
const { createError } = require("../helpers/createError");

const { SECRET_KEY } = process.env;

const auth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw createError(401, "Token is required");
    }
    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer") {
      throw createError(401, "Token is required");
    }
    try {
      const { id } = jwt.verify(token, SECRET_KEY);
      const admin = await Admin.findById(id);
      if (!admin || admin.token !== token) {
        throw createError(401);
      }
      req.admin = admin;
      next();
    } catch {
      throw createError(401);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = auth;
