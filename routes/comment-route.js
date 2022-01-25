const express = require("express");
const router = express.Router();
const {
    createComment,
    getComments
} = require("../controllers/commentController");
const {
    isLogin
} = require("../middlewares/auth")

router.get("/:eventId", getComments)
router.post("/:eventId", isLogin, createComment)

module.exports = router