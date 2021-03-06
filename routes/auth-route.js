const express = require("express");
const router = express.Router();
const {
    register,
    login
} = require("../controllers/authController");
const passport = require("passport")
require('../utils/passport');
const { generateToken } = require("../utils/jwt")

router.post("/register", register);
router.post("/login", login);

router.get('/google', passport.authenticate('google', {
    scope: ['email', 'profile'],
    session: false,
    })
);

router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: 'https://www.rakyat.xyz/login',
    session: false,
}),
function (req, res) {
    let payload = {
    id: req.user.id,
    email: req.user.email,
    };

    const access_token = generateToken(payload);
    res.status(200).json({ access_token });
}
);

module.exports = router;