const mongoose = require("mongoose");
const app = require("./app");

const { DB_HOST } = process.env;
const { PORT } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(PORT, () => {
      console.log("Database connection successful");
    })
  )
  .catch(() => process.exit(1));
