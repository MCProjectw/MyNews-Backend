const passport = require("passport");

exports.login = passport.authenticate('oauth2');
exports.callback = passport.authenticate('oauth2', {
    successRedirect: '/',
    failureRedirect: '/login',
})