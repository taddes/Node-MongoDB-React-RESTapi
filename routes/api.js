const express = require('express');
const router = express.Router();
const Cat = require('../models/cats')

// Get a list of cats from database
router.get('/cats', function(req, res, next) {
  //Sample GET to get all cats
 /* Cat.find({}).then(function(cats){
    res.send(cats);
  });*/


});

// Add new cat
router.post('/cats', function(req, res, next) {
 Cat.create(req.body).then(function(cat){
  res.send(cat);
 }).catch(next);
});

// update a cat from database
router.put('/cats/:id', function(req, res, next) {
  Cat.findByIdAndUpdate({_id: req.params.id}, req.body)
  .then(function() {
    Cat.findOne({_id: req.params.id}).then(function(cat) {
      res.send(cat);
    });
  });
});

// delete a cat from db
router.delete('/cats/:id', function(req, res, next) {
  Cat.findByIdAndRemove({_id: req.params.id})
  .then(function(cat){
    res.send(cat);
  });
});

module.exports = router;