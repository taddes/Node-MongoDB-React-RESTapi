const express = require('express');
const router = express.Router();
const Cat = require('../models/cats')

// Get a list of cats from database
router.get('/cats', function(req, res) {
  res.send({type:'GET'})
});

// Add new cat
router.post('/cats', function(req, res) {
 Cat.create(req.body).then(function(cat){
  res.send(cat);
 });
});

// update a cat from database
router.put('/cats/:id', function(req, res) {
  res.send({type: 'PUT'})
});

// delete a cat from db
router.delete('/cats/:id', function(req, res) {
  res.send({type: 'DELETE'})
});

module.exports = router;