const express = require(`express`);
const router = express.Router();
const Card = require(`../models/Card`)


router

.get(`/`, (req, res) => {
  return Card
  .fetchAll()
  .then(result => {
    result = result.toJSON();
    res.json(result)
  })

})

.post(`/`, (req, res) => {
  let {name, priority, status, created_by, assigned_to} = req.body
  return new Card({name, priority, status, created_by, assigned_to})
  .save()
  .then(result => {
    result = result.toJSON();
    res.json(result)
  })
})




module.exports = router;

