const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const routes = require('./routes/api');

// Set up Express
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/catgo');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

// Middleware. Adds the /api url to routes. 
app.use('/api', routes);

// Listen for requests
app.listen(process.env.port || 4000, function() {
console.log(`Listening for requests on port 4000`)
})