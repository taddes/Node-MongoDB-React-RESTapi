const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create geolocation schema
// 2d sphere curved path captures accurate geolocation data, via GeoJSON
const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index:"2dsphere"
  }
});

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
  },
  geometry: GeoSchema
});

// mongoose will pluralize from cat to cats
const Cat = mongoose.model('cat', CatSchema);

module.exports = Cat;