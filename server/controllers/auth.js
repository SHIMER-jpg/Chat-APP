const User = require("../models/User");

const generateToken = require("../utils/generateToken");

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res
        .status(401)
        .json({ error: "There is an user already registered with this email" });
    }

    await User.create({
      name,
      email,
      password,
    });

    res
      .status(200)
      .json({ status: "Your user has successfully been created!" });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(401).json({ error: "Invalid email" });

    if (!(await user.matchPassword(password)))
      return res.status(401).json({ error: "Invalid password" });

    res.cookie("token", generateToken(user._id), {
      httpOnly: true,
      maxAge: 60 * 60 * 2 * 1000,
    });
    res.status(200).json({ status: "success" });
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  res.clearCookie("token");
  res.status(200).json({ status: "Successfully logged out" });
};

module.exports = {
  loginUser,
  registerUser,
  logout,
};
