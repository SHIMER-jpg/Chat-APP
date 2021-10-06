const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const formData = require("express-form-data");

require("./db.js");

const app = express();
const server = require("http").createServer(app);
app.name = "API";

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.urlencoded({ extended: true, limit: "50mb" })); //review if needed
app.use(express.json({ limit: "50mb" })); //review if needed
app.use(cookieParser());
app.use(morgan("dev"));
app.use(formData.parse());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

module.exports = { app, server };
