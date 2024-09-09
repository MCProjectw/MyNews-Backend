const express = require('express');
const passport = require('passport');
const router = express.Router();


router.get("/auth", passport.authenticate('oauth2'));
router.get("/auth/callback", passport.authenticate('oauth2', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

module.exports = router;