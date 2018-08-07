const router = require(`express`).Router();
const passport = require(`passport`);
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const CONFIG = require(`../../CONFIG/config`);
const USER = require(`../models/User`);

passport.use(new googleStrategy( {
  callbackURL: '/api/kanban/users/auth/google/redirect',
  clientID: CONFIG.google.clientID,
  clientSecret: CONFIG.google.clientSECRET
}, () => {

}
))