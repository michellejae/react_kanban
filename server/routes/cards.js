const express = require(`express`);
const router = express.Router();
const Card = require(`../models/Card`)


router
//figure out a way to verify that the destroy is working right now it returns the same results regardless of if it worked or not. ie if the id existed or not
.delete(`/:id`, (req, res) => {
  return new Card({id: req.params.id})
  .destroy({require:true})
  .then(result => {
    return res.json({message:'deleted id'})
  })
  .catch(err => {
    return res.json({message: err.message})
  })
})

.put(`/:id`, (req, res) => {
  let id = req.params.id
  let {priority, name, status, created_by, assigned_to} = req.body
  return new Card({id, name, priority, status, created_by, assigned_to})
  .save()
  .then(updatedCard => {
    updatedCard = updatedCard.toJSON();
    res.json(updatedCard)
  })
})

.get(`/:id`, (req, res) => {
  return new Card({id: req.params.id})
  .fetch()
  .then(card => {
    card = card.toJSON();
    res.json(card)
  })
})

.get(`/`, (req, res) => {
  return Card
  .fetchAll()
  .then(cards => {
    cards = cards.toJSON();
    res.json(cards)
  })

})

.post(`/`, (req, res) => {
  let {name, details, priority, status, created_by, assigned_to} = req.body
  return new Card({name, details, priority, status, created_by, assigned_to})
  .save()
  .then(newCard => {
    newCard = newCard.toJSON();
    res.json(newCard)
  })
})




module.exports = router;

