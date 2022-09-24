const { User } = require("../../models");
const { BadRequest, NotFound } = require("http-errors");
const sendEmail = require("../../helpers/sendEmail");
require("dotenv").config;

const { HOST } = process.env;

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new NotFound("User not found");
  }
  if (user.verify) {
    throw new BadRequest("Verification has already been passed");
  }
  const mail = {
    to: email,
    subject: "Mail confirmation",
    html: `<a href="${HOST}/api/users/verify/${user.verificationToken}" target="_blank">Click to confirm your email</a>`,
  };
  await sendEmail(mail);
  res.json({
    message: "Verification email sent",
  });
};

module.exports = resendVerifyEmail;
