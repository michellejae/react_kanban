const router = require(`express`).Router();
const passport = require(`passport`);
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const CONFIG = require(`../../CONFIG/config`);
const User = require(`../models/User`);

passport.serializeUser((user, done) => {
  console.log('serializing')
  return done(null,user.id);
})

passport.deserializeUser((id, done) => {
  console.log('deserializing')
  new User ({id:id}).fetch()
    .then(user => {
      user = user.toJSON();
      return done(null, user)
    })
})


passport.use(new googleStrategy( {
  callbackURL: '/api/kanban/users/auth/google/redirect',
  clientID: CONFIG.google.clientID,
  clientSecret: CONFIG.google.clientSECRET
}, (accessToken, refreshToken, profile, done) => {
    findOrCreate(profile,done)
  }) 
)

const findOrCreate = (profile, done) => {
  return new User({googleId:profile.id}).fetch()
    .then(currentUser => {
      if(currentUser === null){
        return new User({googleId:profile.id, username:profile.displayName}).save()
          .then(newUser => {
            newUser = newUser.toJSON();
            done(null, newUser)
          }).catch(err =>{
            console.log(`error : ${err}`)
          })
      } else {
        currentUser = currentUser.toJSON();
        done(null, currentUser)
      }
    }).catch(err =>{
      console.log(`error : ${err}`)
    })
}