const { Conflict } = require("http-errors");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { User } = require("../../models");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict("Email in use");
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const avatarURL = gravatar.url(email);
  const result = await User.create({
    email,
    password: hashPassword,
    avatarURL,
  });
  res.status(201).json({
    status: "success",
    code: 201,
    user: {
      email,
      subscription: result.subscription,
      avatarURL,
    },
  });
};

module.exports = register;
