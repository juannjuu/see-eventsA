const joi = require("joi"); //use joi validation npm
const errorHandler = require("../utils/error-handler"); //error handler
const {
  hashPassword,
  comparePassword
} = require("../utils/bcrypt"); //use bcrypt from utils
const {
  generateToken
} = require("../utils/jwt"); //use jwt from utils
const {
  User,
  Profile
} = require("../models");

module.exports = {
  register: async (req, res) => {
    const {
      firstName,
      lastName,
      email,
      password
    } = req.body;
    try {
      //create Joi schema
      const schema = joi.object({
        firstName: joi.string().required(),
        lastName: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().min(6).required(),
      });
      //check error schema
      const {
        error
      } = schema.validate(req.body);
      if (error) {
        return res.status(400).json({
          status: "Bad Request",
          message: error.message,
        });
      }
      //check user exist by email
      const check = await User.findOne({
        where: {
          email,
        },
      });
      //response email is already exist in the database
      if (check) {
        return res.status(400).json({
          status: "Bad Request",
          message: "Email is Already in Use",
        });
      }
      const passwordHashed = hashPassword(password);
      //insert to database
      const user = await User.create({
        firstName,
        lastName,
        email,
        password: passwordHashed,
      });

      await Profile.create({
        userId: user.id,
      });
      //generate token with payload id and email
      const token = generateToken({
        id: user.id,
        email: user.email,
      });
      res.status(201).json({
        status: "OK",
        message: "Register Success",
        result: {
          token,
        },
      });
    } catch (error) {
      errorHandler(res, error);
    }
  },

  login: async (req, res) => {
    const {
      email,
      password
    } = req.body; //get data from json body
    try {
      //create Joi schema
      const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().required(),
      });
      //check error schema
      const {
        error
      } = schema.validate(req.body);
      if (error) {
        return res.status(400).json({
          status: "Bad Request",
          message: error.message,
        });
      }
      //get user by email from database 
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (!user) {
        return res.status(401).json({
          message: "Incorrect Username or Password",
          status: "Unauthorized",
        });
      }
      //check login validation
      const checkValid = comparePassword(password, user.password);
      if (!checkValid) {
        return res.status(401).json({
          message: "Incorrect Username or Password",
          status: "Unauthorized",
        });
      }
      //generate token with payload id and email
      const token = generateToken({
        id: user.id,
        email: user.email,
      });
      res.status(200).json({
        status: "OK",
        message: "Login Success",
        result: {
          token,
        },
      });
    } catch (error) {
      errorHandler(res, error);
    }
  },
};