const express = require("express");
const router = express.Router();

const { register, login, getMe, logout, updateProfile, UserPhotoUpload } = require("../controllers/auth");

const { protect } = require("../middleware/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, getMe);
// router.post("/forgotpassword", forgotPassword);
// router.put("/resetpassword/:resettoken", resetPassword);
router.get("/logout", logout);
router.put("/updateProfile", updateProfile);

router
  .route("/:id/photo")
  .put(protect, UserPhotoUpload);

module.exports = router;
