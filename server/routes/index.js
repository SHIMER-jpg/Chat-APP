const express = require("express");
const router = express.Router();
const authRouter = require("./api/auth");

/* GET home page. */
// router.get("/", function (req, res, next) {
//   res.status(200).json({ title: "Express" });
// });

router.use("/auth", authRouter);

module.exports = router;
