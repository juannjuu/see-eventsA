const express = require("express");
const router = express.Router();
const {
    getEventDetail,
    getEvents,
    createEvent,
    updateEvent,
} = require("../controllers/eventController")
const {
    isLogin
} = require("../middlewares/auth")
const {
    uploadCloud
} = require("../middlewares/fileUpload")

router.get("/", getEvents)
router.get("/:eventId", getEventDetail)
router.post("/", isLogin, uploadCloud("image"), createEvent)
router.put("/:eventId", isLogin, uploadCloud("image"), updateEvent)

module.exports = router