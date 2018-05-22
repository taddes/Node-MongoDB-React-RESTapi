const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Cat schema and model
const CatSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  breed: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  }
  //include geolocation
});

// mongoose will pluralize from cat to cats
const Cat = mongoose.model('cat', CatSchema);

module.exports = Cat;