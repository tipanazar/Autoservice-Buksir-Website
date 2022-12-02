const { Schema, model } = require("mongoose");

const adminSchema = Schema(
  {
    login: {
      type: String,
      required: [true, "Login is required!"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    token: {
      type: String,
    },
  },
  { versionKey: false, timestamps: false }
);

const Admin = model("admin", adminSchema);

module.exports = { Admin };
