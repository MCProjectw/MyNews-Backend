const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2').Strategy;

passport.use(new OAuth2Strategy({
    authorizationURL: process.env.CLIENT_ID,
    tokenURL: process.env.CLIENT_SECRET,
    clientID: process.env.AUTHORIZATION_URL,
    clientSecret: process.env.TOKEN_URL,
    callbackURL: process.env.CALLBACK_URL
},
(accessToken, refreshToken, profile, cb) => {
    return cb(null, profile);
}));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});

module.exports = passport;