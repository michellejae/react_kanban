const express = require(`express`);
const path = require(`path`);
const bodyParser = require(`body-parser`);

const app = express();


const PORT = process.env.PORT || 6060;


const cardRoute = require('./routes/cards')

app.use(bodyParser.json());
app.use(express.static(`public`));


app.get(`/api/hello`, (req, res) => {
res.send({ express: 'Hello From Express' })
})

app.use(`/api/kanban/cards`, cardRoute)

app.listen(PORT, (err) => {
  console.log(`Server be runnin' runnin' on ${PORT}`)
})