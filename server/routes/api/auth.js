const express = require("express");

const router = express.Router();

const {
  validateLogin,
  validateRegister,
} = require("../../middleware/validate");
const { loginUser, registerUser, logout } = require("../../controllers/auth");

router.route("/register").post(validateRegister, registerUser);
router.route("/login").post(validateLogin, loginUser);
router.route("/logout").get(logout);

module.exports = router;
