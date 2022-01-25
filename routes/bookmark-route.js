const express = require("express");
const router = express.Router();
const {
    createBookmark,
    getBookmarks
} = require("../controllers/bookmarkController")
const {
    isLogin
} = require("../middlewares/auth")

router.get("/", isLogin, getBookmarks)
router.post("/:eventId", isLogin, createBookmark)

module.exports = router