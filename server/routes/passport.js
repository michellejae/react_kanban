const router = require(`express`).Router();
const passport = require(`passport`);
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const CONFIG = require(`../../CONFIG/config`);
const User = require(`../models/User`);

passport.use(new googleStrategy( {
  callbackURL: '/api/kanban/users/auth/google/redirect',
  clientID: CONFIG.google.clientID,
  clientSecret: CONFIG.google.clientSECRET
}, (accessToken, refreshToken, profile, done) => {

  return new User({googleId:profile.id}).save()
    .then(user => {
      user = user.toJSON();
      console.log(user)
    })
}
))