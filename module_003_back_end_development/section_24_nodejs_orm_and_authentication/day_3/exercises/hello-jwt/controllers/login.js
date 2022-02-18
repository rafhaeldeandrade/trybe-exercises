const joi = require("joi");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res) => {
  const { username, password } = req.body;

  const checkUsernameAndPassword = joi
    .object({
      username: joi.string().alphanum().min(5).required(),
      password: joi.string().min(5).required(),
    })
    .validate(req.body);

  if (checkUsernameAndPassword.error) throw checkUsernameAndPassword.error;

  const jwtConfig = {
    expiresIn: "1h",
    algorithm: "HS256",
  };

  const nameAndPasswordAreWhatEx7asks =
    username === "admin" && password === "s3nh4S3gur4???";

  const token = jwt.sign(
    { username, admin: nameAndPasswordAreWhatEx7asks },
    process.env.JWT_SECRET,
    jwtConfig
  );

  res.status(200).json({ token });
};
