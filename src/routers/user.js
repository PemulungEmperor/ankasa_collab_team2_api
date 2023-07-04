const express = require("express");
const multer = require("multer");

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
router.put(
  "/update/profile-img/:id",
  (req, res) => {
    multerUpload(req, res, (err) => {
      if (err) {
        if (err instanceof multer.MulterError) {
          if (err.code == "LIMIT_FILE_SIZE")
            res.status(400).send({
              code: "large",
              message: "File is large ,only upload files less than 2MB",
            });
          else {
            res.status(400).send({
              code: "unknown",
              message: "Error while uploading",
            });
          }
        }
      }
    });
  },
  updateProfileImage
);

// update user
router.put("/update/profile/:id", updateProfile);

module.exports = router;
