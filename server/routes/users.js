const router = require(`express`).Router();
const passport = require(`passport`);
const CONFIG = require(`../../CONFIG/config`);
const USER = require(`../models/User`);

router.get('/google', passport.authenticate('google', {
  scope:['profile']
}))

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.send('at google redirect')
//  res.redirect('/auth/profiles')
})


module.exports = router;