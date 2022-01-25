const express = require("express");
const router = express.Router();
const {
    editProfile,
    getProfile,
    changePassword,
    getMyEvents
} = require("../controllers/profileController");
const {
    isLogin
} = require("../middlewares/auth");
const {
    uploadCloud
} = require("../middlewares/fileUpload");

router.get("/", isLogin, getProfile)
router.put("/", isLogin, uploadCloud("image"), editProfile)
router.put("/changepassword", isLogin, changePassword)
router.get("/myevents", isLogin, getMyEvents)

module.exports = router