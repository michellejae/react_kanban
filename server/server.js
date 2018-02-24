const express = require(`express`);
const path = require(`path`);
const bodyParser = require(`body-parser`);

const app = express();


const PORT = process.env.PORT || 6060;


app.use(bodyParser.json());
app.use(express.static(`public`));

app.get(`/`, (req, res) => {
res.send(`smoke test`)
})

app.listen(PORT, (err) => {
  console.log(`Server be runnin' runnin' on ${PORT}`)
})