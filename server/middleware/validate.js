const { check, validationResult } = require("express-validator");

const validateRegister = [
  check("name", "Please enter your name").not().isEmpty(),
  check("email", "Please enter a valid email").isEmail(),
  check("password", "Please enter a valid password").isLength({ min: 6 }),
  (req, res, next) => {
    try {
      validationResult(req).throw();
      next();
    } catch (error) {
      res.status(400).json({ error });
    }
  },
];

const validateLogin = [
  check("email", "Please enter a valid email").isEmail(),
  check("password", "Please your password").not().isEmpty(),
  (req, res, next) => {
    try {
      validationResult(req).throw();
      next();
    } catch (error) {
      res.status(400).json({ error });
    }
  },
];

module.exports = {
  validateRegister,
  validateLogin,
};
