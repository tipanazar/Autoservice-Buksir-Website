const mongoose = require("mongoose");
const app = require("./app");

const { DB_HOST } = process.env;
const { PORT = "3000" } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(PORT, () => {
      console.log("Database connection successful");
    })
  )
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
