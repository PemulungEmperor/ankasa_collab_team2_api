// import form user models
const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const response = require("../helper/response");
const secretToken = require("../helper/secretToken");
const jwt = require("jsonwebtoken");
const dataToken = process.env.JWT_SECRET;
// const cloudinary = require("../utils/cloudinary");

const userController = {
  getAllUser: async (req, res) => {
    try {
      const user = await userModel.selectAll();
      res.json(user.rows);
    } catch (error) {
      console.error(error);
    }
  },

  getById: async (req, res) => {
    const id = req.params.id;
    try {
      const user = await userModel.getById(id);
      res.json(user.rows);
    } catch (error) {
      console.error(error);
    }
  },

  // register user
  registerUser: async (req, res) => {
    const { username, email, password } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
      const data = {
        username,
        email,
        password: hash,
      };

      userModel
        .registerUser(data)
        .then((result) => {
          response(200, result.rowCount, "The register was succesfull", res);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },

  // controller login user
  loginUser: async (req, res) => {
    const { username, password, is_admin } = req.body;

    try {
      const user = await userModel.loginUser({ username, password, is_admin });
      const token = await secretToken({
        id: user.id,
        username: user.username,
        city: user.city,
        photo_path: user.photo_path,
        admin: user.is_admin,
      });

      // save the token on cookie
      return res.status(200).cookie("token", token, { httpOnly: true }).json({
        success: true,
        message: "login successful",
        id: user.id,
        username,
        photo_path: user.photo_path,
        city: user.city,
        token,
      });
    } catch (err) {
      console.log(err);
      response(400, 0, err, res);
    }
  },

  // get credentials
  getUserFromToken: async (req, res) => {
    try {
      const token = req.cookies.token;

      const decoded = jwt.verify(token, dataToken);

      const userId = decoded.id;
      const admin = decoded.admin;
      const username = decoded.username;

      return res.status(200).json({
        success: true,
        message: "sukses mendapatkan data",
        userId,
        admin,
        username,
      });
    } catch (err) {
      console.log(err);
      response(400, 0, err, res);
    }
  },

  //update image profile
  updateProfileImage: async (req, res) => {
    try {
      const id = req.params.id;

      //photo
      const result = await cloudinary.uploader.upload(req.file.path, { folder: "ankasa" });
      const data = {
        id,
        photoPath: result.secure_url,
      };

      await userModel.updateProfileImg(data);
      // save the token on cookie
      return res.status(200).json({
        success: true,
        message: "update successful",
      });
    } catch (err) {
      console.log(err);
      response(400, 0, err, res);
    }
  },

  //update profile
  updateProfile: async (req, res) => {
    const id = req.params.id;
    const { username, email, phone_number, city, address, post_code } = req.body;
    const data = {
      id,
      username,
      email,
      phone_number,
      city,
      address,
      post_code,
    };
    userModel
      .updateProfile(data)
      .then((result) => {
        res.json({ message: "success", username, email, phone_number, city, address, post_code });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

module.exports = userController;
