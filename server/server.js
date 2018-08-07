const express = require(`express`);
const passport = require(`passport`);
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const path = require(`path`);
const bodyParser = require(`body-parser`);
const session = require(`express-session`);
const Redis = require(`connect-redis`)(session);
const CONFIG = require(`../CONFIG/config`)

const app = express();


const PORT = process.env.PORT || 6060;

const usersRoute = require(`./routes/users`)
const cardRoute = require('./routes/cards')
const passportRoute = require(`./routes/passport`)

app.use(bodyParser.json());
app.use(express.static(`public`));

app.use(session({
  store: new Redis(),
  secret: CONFIG.passport.SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


// app.get(`/api/hello`, (req, res) => {
// res.send({ express: 'Hello From Express' })
// })

app.use(`/api/kanban/users/auth`, usersRoute)
app.use(`/api/kanban/cards`, cardRoute)

app.listen(PORT, (err) => {
  console.log(`Server be runnin' runnin' on ${PORT}`)
})