require("dotenv").config();
const mongoose = require("mongoose");

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

mongoose
  .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  });

const connection = mongoose.connection;

module.exports = {
  connection,
};
