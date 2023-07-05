const express = require("express");

const jwt = require("jsonwebtoken");
const router = express.Router();
const { registerUser, loginUser, updateProfileImage, updateProfile, getAllUser, getUserFromToken, getById } = require("../controller/user");
const multerUpload = require("../middleware/uploadProfile");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", getAllUser);
router.get("/user", getUserFromToken);

router.get("/users/:id", getById);

// update image
router.put("/update/profile-img/:id", multerUpload, updateProfileImage);

// update user
router.put("/update/profile/:id", updateProfile);

module.exports = router;
