require('dotenv').config();
const express = require('express');
const router = express.Router();
const authRoute = require('./auth-route');
const eventRoute = require('./event-route');
const commentRoute = require('./comment-route');
const profileRoute = require('./profile-route');
const bookmarkRoute = require('./bookmark-route');

router.use('/auth', authRoute);
router.use('/events', eventRoute);
router.use('/profile', profileRoute);
router.use('/comment', commentRoute);
router.use('/bookmark', bookmarkRoute);

module.exports = router